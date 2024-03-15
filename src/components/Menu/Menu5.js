import React, { useContext, useState } from 'react'
import Box from '../Common/Box'
import MenuContext from '../../context/Menu_Context'
import Row from '../Common/Row'
import ReviewModifyModal from './ReviewModifyModal'

export default function Menu5() {
    const { images, imagesdata, setImagesdata, reviewFile, setReviewFile } = useContext(MenuContext)
    let imageInfo = null
    if (images && images.images4) {
        imageInfo = images.images4
    }
    console.log('imageInfo의 값', imageInfo)

    // 모달을 열고 닫는 상태를 관리하는 state입니다.
    const [isModalOpen, setIsModalOpen] = useState(false)

    // 모달을 여는 함수.
    const openModal = (review) => {
        setImagesdata({
            ...review
        })
        console.log('review', review)
        console.log('reviewFile77777', reviewFile)
        setIsModalOpen(true)
    }
    // 모달을 닫는 함수.
    const closeModal = () => {
        setIsModalOpen(false)
    }

    return (
        <div className="col-start-4 col-end-13 w-4/5 h-auto pt-16 flex flex-col m-auto">
            {imageInfo &&
                imageInfo.map((review, index) => (
                    <Box key={index} className="mb-24 p-10 pb-12 w-2/3">
                        <Row className="text-2xl m-0 text-black">{` ${index + 1}. 제목 `}</Row>
                        {/*<Row className="text-2xl mt-1">{review.d_code}</Row>*/}
                        {/*<Row className="text-2xl mt-1">{review.r_code}</Row>*/}
                        <Row className="text-base mt-2">{`작성자 ID: ${review.m_userid}`}</Row>
                        <Row className="text-base mt-2">{`별점 : ${review.review_score}`}</Row>
                        <Row className="text-base mt-2">{`내용 : ${review.review_comment}`}</Row>

                        {review.fileInfo && review.fileInfo.length > 0 && (
                            <div
                                id="imageZone"
                                style={{
                                    width: '50%',
                                    height: '320px',
                                    border: '1px solid #ddd',
                                    marginTop: '16px',
                                    overflow: 'auto', // overflow 속성 추가
                                    display: 'flex', // flexbox 사용하여 내부 컨텐츠 정렬
                                    flexWrap: 'wrap' // 내부 컨텐츠가 넘칠 경우 줄바꿈
                                }}
                            >
                                {review.fileInfo.map((e, i) => (
                                    <div key={i}>
                                        <img
                                            src={`http://localhost:8080/api/file/${e.review_stored}`}
                                            alt="미리보기"
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover' // 이미지 크기 조절을 위해 objectFit 속성 추가
                                            }}
                                        />
                                    </div>
                                ))}
                            </div>
                        )}
                        {/* 리뷰 수정 버튼입니다. 이 버튼을 누르면 모달창이 열립니다. */}
                        <button
                            className="tab-size-4 user-select-text box-border flex items-center justify-center h-14 w-1/2 rounded-md text-black font-bold text-lg mt-6"
                            style={{ backgroundColor: '#D9F99D' }}
                            onClick={() => {
                                openModal(review)
                            }}
                        >
                            수정하기
                        </button>

                        {/* 리뷰 작성 모달창입니다. */}
                        {isModalOpen && <ReviewModifyModal closeModal={closeModal}></ReviewModifyModal>}
                    </Box>
                ))}
        </div>
    )
}
