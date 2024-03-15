import React, { useState, useRef, useEffect, useContext } from 'react'
import { put } from 'axios'
import MenuContext from '../../context/Menu_Context'

const uploadCountLimit = 5

const ImageUploadComponent = ({ onImageUpload, onFileDelete, imagefile }) => {
    const [fileCount, setFileCount] = useState(0)
    const [sumContentFiles, setSumContentFiles] = useState([])
    const [sumPreviewSrc, setSumPreviewSrc] = useState([])
    const { imagesdata, reviewFile, setReviewFile, deleteFile, setDeleteFile } = useContext(MenuContext)
    const [hasReceivedInitialValue, setHasReceivedInitialValue] = useState(false)
    // const [deleteFile, setDeleteFile] = useState({fileseqno:null});

    let response = null

    /*console.log("리뷰!!!!!!!!!!!!!"+imagesdata.fileInfo.fileseqno);*/
    console.log('리뷰리뷰리뷰리뷰', imagefile)
    useEffect(() => {
        if (imagefile && imagefile.length > 0 && reviewFile && !hasReceivedInitialValue) {
            const fetchAndSetFiles = async () => {
                const newFiles = []
                const newPreviews = []

                for (let i = 0; i < imagefile.length; i++) {
                    const file = imagefile[i]
                    if (typeof file === 'string') {
                        response = await fetch(`http://localhost:8080/file/${file}`)

                        if (!response.ok) {
                            throw new Error(`HTTP error! status: ${response.status}`)
                        }
                        const blob = await response.blob()
                        const newFile = new File([blob], file)
                        newFiles.push(newFile)
                        newPreviews.push(URL.createObjectURL(newFile))
                        console.log(newFiles)
                    } else if (file instanceof File) {
                        newFiles.push(file)
                        newPreviews.push(URL.createObjectURL(file))
                    }
                }
                // 초기 값을 받았음을 표시
                setHasReceivedInitialValue(true)
                setReviewFile((prev) => ({
                    ...prev,
                    src: newPreviews,
                    fileseqno: imagesdata.fileInfo
                }))
                console.log('reviewFile', reviewFile)
                console.log('reviewFile2', reviewFile.fileseqno)

                console.log('urlurlurl', newPreviews)
                setSumContentFiles((prev) => [...prev, ...newFiles])
                setSumPreviewSrc((prev) => [...prev, ...newPreviews])
                setFileCount((prevCount) => prevCount + newFiles.length)
                onImageUpload(newFiles)
            }

            fetchAndSetFiles()
        }
    }, [imagefile, onImageUpload, hasReceivedInitialValue])

    const fileInputRef = useRef()

    const handleImgZoneClick = () => {
        fileInputRef.current.click()
    }

    const handleFileChange = (e) => {
        const files = e.target.files
        if (files.length > 0) {
            showImage(files)
        }
    }

    const isFileAlreadyUploaded = (file) => {
        return sumContentFiles.some((existingFile) => existingFile.name === file.name && existingFile.size === file.size)
    }

    const showImage = async (files) => {
        const filesArr = Array.from(files).filter((file) => file.type.startsWith('image'))

        // 중복 체크
        const uniqueFiles = filesArr.filter((file) => !isFileAlreadyUploaded(file))

        if (fileCount + uniqueFiles.length > uploadCountLimit) {
            alert(`사진은 최대 ${uploadCountLimit}개까지 업로드 할 수 있습니다.`)
            return
        }

        const loadedFiles = await Promise.all(
            uniqueFiles.map((file) => {
                return new Promise((resolve) => {
                    const reader = new FileReader()
                    reader.onload = (event) => {
                        resolve({
                            file,
                            result: event.target.result
                        })
                    }
                    reader.readAsDataURL(file)
                })
            })
        )

        setSumContentFiles((prev) => [...prev, ...loadedFiles.map((item) => item.file)])
        setSumPreviewSrc((prev) => [...prev, ...loadedFiles.map((item) => item.result)])
        setFileCount((prevCount) => prevCount + loadedFiles.length)
        onImageUpload(loadedFiles.map((item) => item.file))
    }

    const fileDelete = (index) => {
        const updatedContentFiles = [...sumContentFiles]
        const updatedPreviewSrc = [...sumPreviewSrc]

        updatedContentFiles.splice(index, 1)
        updatedPreviewSrc.splice(index, 1)

        setSumContentFiles(updatedContentFiles)
        setSumPreviewSrc(updatedPreviewSrc)
        // let arr = [];
        // arr.push(fileseqno);
        // console.log('fileseqno======',fileseqno)
        // console.log('arr======',arr)
        // setDeleteFile({fileseqno:imagesdata.fileInfo.fileseqno});
        // reviewFile가 존재하고, 해당 인덱스에 fileseqno가 있는 경우에만 업데이트
        if (reviewFile && reviewFile.fileseqno && reviewFile.fileseqno[index]) {
            setDeleteFile({ fileseqno: reviewFile.fileseqno[index].fileseqno })
            console.log('deleteFile', deleteFile.fileseqno)
        }
        // 해당 인덱스의 fileseqno 값을 가져와서 setDeleteFile로 업데이트
        // if (reviewFile && reviewFile.fileseqno && reviewFile.fileseqno[index]) {
        //     setDeleteFile({ fileseqno: reviewFile.fileseqno[index].fileseqno });
        //
        // }

        setFileCount((prevCount) => prevCount - 1)
        onFileDelete(index)
    }

    return (
        <div className="mt-6">
            <div
                id="imageZone"
                onClick={handleImgZoneClick}
                style={{
                    width: 'full',
                    height: '300px',
                    border: '1px solid #ddd',
                    overflow: 'auto',
                    display: 'flex',
                    flexWrap: 'wrap'
                }}
            >
                {sumPreviewSrc.map((src, index) => (
                    <div className="flex flex-col">
                        <div key={index}>
                            <img
                                src={src}
                                alt="미리보기"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover'
                                }}
                            />
                        </div>
                        <button className="mr-4 self-end" onClick={() => fileDelete(index)}>
                            삭제
                        </button>
                    </div>
                ))}
            </div>
            <input type="file" onChange={handleFileChange} ref={fileInputRef} style={{ display: 'none' }} multiple />
        </div>
    )
}

export default ImageUploadComponent
