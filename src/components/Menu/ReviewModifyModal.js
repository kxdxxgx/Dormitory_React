import React, { useCallback, useContext, useEffect, useState } from 'react'
import Column from '../Common/Column'
import Row from '../Common/Row'
import ImageUploadComponent from './ImageUploadComponent'
import MenuContext from '../../context/Menu_Context'
import x from '../../assets/img/x.png'
import { Link } from 'react-router-dom'

export default function ReviewModifyModal({ closeModal }) {
    // 리뷰 내용을 관리하는 state 입니다.
    /*  const [review, setReview] = useState('');*/

    //imagesdata에 Menu5 수정하기 버튼 누른값들을 저장
    const { images, imagesdata, setImagesdata, reviewFile, deleteFile, setDeleteFile } = useContext(MenuContext)
    const [uploadedFilesInfo, setUploadedFilesInfo] = useState([])
    // 기존 상태에 추가로 상태를 정의합니다.
    const [editedReviewComment, setEditedReviewComment] = useState('')
    const [editedReviewScore, setEditedReviewScore] = useState('')
    const [editedFilesInfo, setEditedFilesInfo] = useState([])
    const [deleteFileList, setDeleteFileList] = useState([])
    let array = []
    let count = 0

    console.log('받은deleteFile', deleteFile)
    console.log('!!!!!!!!!!!!!!!!!' + reviewFile.fileseqno)
    console.log('deletefilelist', deleteFileList)
    console.log('imagesdata에 들어간 값', imagesdata)
    console.log('imagesdata에 들어간 값', imagesdata.fileInfo)
    useEffect(() => {
        setEditedReviewComment(imagesdata.review_comment)
        setEditedReviewScore(imagesdata.review_score)
        // reviewFile
        if (imagesdata.fileInfo) {
            let editedImages = imagesdata.fileInfo.map((e) => e.review_stored)
            setUploadedFilesInfo(editedImages)
        }
    }, [images])
    console.log('uploadfilesInfo', uploadedFilesInfo)
    console.log('초기화시킨값', editedReviewComment)

    // ImageUploadComponent에서 파일 정보를 전달 받는 콜백 함수
    const handleFileUploadInfo = useCallback((fileInfo) => {
        setEditedFilesInfo(fileInfo)
    }, [])

    const handleFileDelete = useCallback(
        (indexToRemove) => {
            setEditedFilesInfo((prevInfo) => {
                // 해당 인덱스의 파일 정보를 제외하고 새로운 배열을 반환
                return prevInfo.filter((_, index) => index !== indexToRemove)
            })

            //deleteFile 값을 setDeleteFileList 배열에 추가
            setDeleteFileList((prevList) => {
                // 현재 deleteFile의 값을 prevList 배열에 추가하고 반환
                return [...prevList, deleteFile]
            })
            console.log('딜리트파일리스트', deleteFileList)
        },
        [deleteFile, setDeleteFileList]
    )

    // 수정된 리뷰 내용 저장
    const editedCommentChange = useCallback((e) => {
        setEditedReviewComment(e.target.value)
    }, [])

    // 수정된 별점 저장
    const editedScoreChange = useCallback((e) => {
        setEditedReviewScore(e.target.value)
    }, [])

    console.log('uploadImage', uploadedFilesInfo)
    const Submit = async (event) => {
        event.preventDefault()

        console.log('uploadImage', uploadedFilesInfo)

        const formData = new FormData()

        formData.append('review_code', imagesdata.review_code)
        formData.append('d_code', imagesdata.d_code)
        formData.append('r_code', imagesdata.r_code)
        formData.append('m_userid', imagesdata.m_userid)
        formData.append('reservation_code', imagesdata.reservation_code)
        formData.append('review_score', editedReviewScore)
        formData.append('review_comment', editedReviewComment)
        /*const deleteFileList = [];*/
        //파일이 있다면 추가
        if (editedFilesInfo.length > 0) {
            for (let i = 0; i < editedFilesInfo.length; i++) {
                if (deleteFileList.length > 0) {
                    console.log(deleteFileList)
                    formData.append('deleteFileList', deleteFileList[i + 1].fileseqno)
                }
                formData.append('sendToFileList', editedFilesInfo)
            }
            // editedFilesInfo.forEach((file) => {
            //     console.log("=============" + file.data);
            //    /* if (!file.is_delete) {*/
            //
            //         formData.append('sendToFileList', file);
            //     /*}*/
            //     if (deleteFileList.length > 0) {
            //         /*const deleteFileListAsString = deleteFileList.join(',');*/
            //         formData.append('deleteFileList', deleteFileList)
            //         console.log('deletefile정보',deleteFile)
            //         console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",file.fileseqno)
            //     }
            // });
        }

        try {
            const response = await fetch('http://localhost:8080/menu/imageUpload?kind=U', {
                method: 'POST',
                // headers: { 'Content-Type': 'application/json' },
                body: formData
            })
        } catch (error) {
            console.log('error' + error)
        }

        // 후속 처리
        // 리뷰 제출 후 모달을 닫습니다.
        window.location.reload()
        closeModal()
    }

    return (
        <Column className="col-start-3 col-end-8 h-auto">
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4" onClick={closeModal}>
                <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full p-8" onClick={(e) => e.stopPropagation()}>
                    <Link to="#" onClick={closeModal} className="flex flex-row justify-end">
                        <img src={x} className="w-6 h-6" alt="" />
                    </Link>

                    <Row className="text-3xl font-semibold">리뷰</Row>
                    <Row className="mt-16 text-xl font-medium">리뷰 작성</Row>
                    <hr className="mt-4 w-11/12" />
                    <Row className="mt-4 text-lg">내용</Row>
                    <input
                        className="border-solid border mt-4 border-gray-300 rounded-lg h-12 p-4 w-1/2 bg-white text-gray-900 font-normal text-base"
                        placeholder="내용을 작성하세요"
                        value={editedReviewComment}
                        onChange={editedCommentChange}
                    />
                    <Row className="text-lg">별점</Row>
                    <input
                        className="border-solid border mt-4 border-gray-300 rounded-lg h-12 p-4 w-1/2 bg-white text-gray-900 font-normal text-base"
                        placeholder="별점을 입력하세요"
                        value={editedReviewScore}
                        onChange={editedScoreChange}
                    />
                    <ImageUploadComponent
                        /*onImageUpload={handleFileUploadInfo}*/
                        onFileDelete={handleFileDelete}
                        onImageUpload={handleFileUploadInfo}
                        imagefile={uploadedFilesInfo} // 추가: 이미 업로드된 파일 정보를 전달
                    />
                    <button
                        className="tab-size-4 user-select-text box-border flex items-center justify-center h-14 w-full rounded-md text-black font-bold text-lg mt-6"
                        style={{ backgroundColor: '#D9F99D' }}
                        onClick={Submit}
                    >
                        등록하기
                    </button>
                </div>
            </div>
        </Column>
    )
}
