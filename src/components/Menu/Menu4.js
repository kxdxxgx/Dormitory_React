import React, { useContext, useEffect, useState } from 'react'
import Box from '../Common/Box'
import MenuContext from '../../context/Menu_Context'
import Row from '../Common/Row'
import ReviewModal from './ReviewModal'
import Context from '../../context/Context'
import Column from '../Common/Column'

export default function Menu4() {
    const { images, setImagesdata, imagesdata } = useContext(MenuContext)
    const [image, setImage] = useState(null)

    console.log('zzz', images.images3)
    let imageInfo = null
    if (images && images.images3) {
        imageInfo = images.images3
        console.log('images의 넣은 배열' + imageInfo)
    }
    console.log('images를 넣은 배열' + imageInfo)
    useEffect(() => {
        if (images && images) {
            setImage(images.images3)
        }
    }, [images])
    // 모달을 열고 닫는 상태를 관리하는 state입니다.
    const [isModalOpen, setIsModalOpen] = useState(false)

    // 모달을 열고 닫는 함수입니다.
    const openModal = (visited) => {
        setImagesdata({
            ...imagesdata,
            d_code: visited.d_code,
            r_code: visited.r_code,
            m_userid: visited.m_userid,
            reservation_code: visited.reservation_code,
            r_name: visited.r_name
        })
        // if(imagesdata.review_score == null){
        //     alert('별점을 입력하세요');
        //     return false;
        // }
        // if(imagesdata.review_comment == null){
        //     alert('내용을 입력하세요.');
        //     return false;
        // }else{
        //         alert("서버 에러.");
        //         return false;
        //     }

        /*  setImagesdata&&setImagesdata((reviews)  => ({
            ...reviews,
            d_code: imageInfo.d_code,
            r_code: imageInfo.r_code,
            m_userid: imageInfo.m_userid,
            review_score: imageInfo.review_score,
            review_comment: imageInfo.review_comment,
        }))*/
        setIsModalOpen(true)
    }
    const closeModal = () => {
        setIsModalOpen(false)
    }

    return (
        <div className="col-start-4 col-end-13 w-4/5 h-auto pt-16 flex flex-col m-auto">
            {imageInfo &&
                imageInfo.map((visited, index) => (
                    <Box key={index} className="mb-24 p-10 pb-12">
                        <Row className="justify-start grid grid-cols-12 h-auto">
                            <Column className="col-start-1 col-end-7">
                                <Row className="text-2xl font-semibold mt-0 text-black">{`${index + 1}. ${visited.d_name} ${visited.d_type}`}</Row>
                                {/*<Row>{visited.reservation_code}</Row>*/}
                                {/*<Row className="mt-1">{visited.d_code}</Row>*/}
                                {/*<Row className="mt-1">{visited.r_code}</Row>*/}
                                {/*<Row className="mt-1">{visited.d_name}</Row>*/}
                                {/*<Row className="mt-1">{visited.d_type}</Row>*/}
                                <Row className="w-11/12 h-80 rounded-2xl">
                                    <img src={visited.r_img} className="rounded-2xl" alt="" />
                                </Row>
                            </Column>
                            <Column className="col-start-7 col-end-13">
                                <Row className="text-base mt-0" splitEnabled={false}>{`방 정보 : ${visited.r_name}`}</Row>
                                {/*<Row className="text-2xl mt-1">{visited.m_userid}</Row>*/}
                                <Row className="text-base mt-2">{`전화번호 : ${visited.m_telno}`}</Row>
                                <Row className="text-base mt-2">{`체크인 : ${visited.reservation_checkin}`}</Row>
                                <Row className="text-base mt-2">{`체크아웃 : ${visited.reservation_checkout}`}</Row>
                                <Row className="text-base mt-2">{`인원 수 : ${visited.reservation_guest}`}</Row>
                                <Row className="text-base mt-2">{` 가격 : ${visited.reservation_price}`}</Row>
                                <Row className="text-base mt-2">{` 요청사항 : ${visited.reservation_description}`}</Row>
                                <Row className="text-base mt-2">{` 호실 : ${visited.room}호`}</Row>
                                <Row className="text-base mt-2">
                                    {(() => {
                                        switch (visited.s_status) {
                                            case 1:
                                                return '상태 : 결제완료'
                                            case 3:
                                                return '상태 : 체크인 완료'
                                            case 4:
                                                return '상태 : 체크아웃 완료'
                                            default:
                                                return '상태 : 알 수 없는 상태'
                                        }
                                    })()}
                                </Row>

                                {/* 리뷰 작성 버튼입니다. 이 버튼을 누르면 모달창이 열립니다. */}
                                <button
                                    className="tab-size-4 user-select-text box-border flex items-center justify-center h-14 w-2/3 rounded-md text-black font-bold text-lg mt-5"
                                    style={{ backgroundColor: '#D9F99D' }}
                                    onClick={() => {
                                        openModal(visited)
                                    }}
                                >
                                    리뷰 작성
                                </button>

                                {/* 리뷰 작성 모달창입니다. */}
                                {isModalOpen && <ReviewModal closeModal={closeModal}></ReviewModal>}
                                {/*<ReviewModal isOpen={isModalOpen} onClose={openModal} />*/}
                            </Column>
                        </Row>
                    </Box>
                ))}
        </div>
    )
}
