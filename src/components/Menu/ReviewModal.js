import React, { useCallback, useContext, useEffect, useState } from 'react'
import ImageUploadComponent from './ImageUploadComponent'
import MenuContext from '../../context/Menu_Context'
import Row from '../Common/Row'
import Column from '../Common/Column'
import x from '../../assets/img/x.png'
import { Link } from 'react-router-dom'

export default function ReviewModal({ closeModal }) {
    // 리뷰 내용을 관리하는 state 입니다.
    const [review, setReview] = useState('')
    const { images, imagesdata, setImagesdata } = useContext(MenuContext)
    const [uploadedFilesInfo, setUploadedFilesInfo] = useState([])

    // ImageUploadComponent에서 파일 정보를 전달 받는 콜백 함수
    const handleFileUploadInfo = useCallback((fileInfo) => {
        setUploadedFilesInfo(fileInfo)
    }, [])

    const handleFileDelete = useCallback((indexToRemove) => {
        setUploadedFilesInfo((prevInfo) => {
            // 해당 인덱스의 파일 정보를 제외하고 새로운 배열을 반환
            return prevInfo.filter((_, index) => index !== indexToRemove)
        })
    }, [])

    useEffect(() => {
        if (images.images3) {
            setReview(images.images3)
        }
    }, [images])

    //리뷰 내용 저장
    const commentChange = useCallback((e) => {
        setImagesdata({
            ...imagesdata,
            review_comment: e.target.value
        })
    })
    //별점 저장
    const scoreChange = useCallback((e) => {
        setImagesdata({
            ...imagesdata,
            review_score: e.target.value
        })
    })
    const Submit = async (event) => {
        event.preventDefault()

        const formData = new FormData()

        formData.append('d_code', imagesdata.d_code)
        formData.append('r_code', imagesdata.r_code)
        formData.append('r_name', imagesdata.r_name)
        formData.append('m_userid', imagesdata.m_userid)
        formData.append('review_score', imagesdata.review_score)
        formData.append('review_comment', imagesdata.review_comment)
        formData.append('reservation_code', imagesdata.reservation_code)

        // 파일이 있다면 추가
        if (uploadedFilesInfo.length > 0) {
            uploadedFilesInfo.forEach((file) => {
                console.log('=============' + file)
                formData.append('sendToFileList', file)
            })
        }
        try {
            const response = await fetch('http://localhost:8080/api/menu/imageUpload?kind=I', {
                method: 'POST',
                // headers: { 'Content-Type': 'application/json' },
                body: formData
            })
        } catch (error) {
            console.log('error' + error)
        }

        // 후속 처리
        window.location.reload()
        // 리뷰 제출 후 모달을 닫습니다.
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
                        onChange={commentChange}
                    />
                    <Row className="text-lg">별점</Row>
                    <input
                        className="border-solid border mt-4 border-gray-300 rounded-lg h-12 p-4 w-1/2 bg-white text-gray-900 font-normal text-base"
                        placeholder="별점을 입력하세요"
                        onChange={scoreChange}
                    />
                    <ImageUploadComponent
                        onImageUpload={handleFileUploadInfo}
                        onFileDelete={handleFileDelete}
                    /*uploadedFiles={uploadedFilesInfo}*/ // 추가: 이미 업로드된 파일 정보를 전달
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
