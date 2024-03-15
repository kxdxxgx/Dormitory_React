import React, { useContext, useState } from 'react'
import Box from '../Common/Box'
import Row from '../Common/Row'
import MenuContext from '../../context/Menu_Context'
import Column from '../Common/Column'

export default function Menu3() {
    const { images } = useContext(MenuContext)
    console.log('zzz', images.images2)
    let imageInfo = null
    if (images && images.images2) {
        imageInfo = images.images2
        console.log('images의 넣은 배열' + imageInfo)
    }
    console.log('images를 넣은 배열' + imageInfo)
    return (
        <div className="col-start-4 col-end-13 w-4/5 h-auto pt-16 flex flex-col m-auto">
            {imageInfo &&
                imageInfo.map((reservation, index) => (
                    <Box key={index} className="mb-24 p-10 pb-12">
                        <Row className="justify-start grid grid-cols-12 h-auto">
                            <Column className="col-start-1 col-end-7">
                                <Row className="text-2xl font-semibold mt-0 text-black">{` ${index + 1}. ${reservation.d_name} ${reservation.d_type} `}</Row>
                                {/*<Row className="mt-1">{reservation.d_code}</Row>*/}
                                {/* <Row className="mt-1">{reservation.r_code}</Row>*/}
                                {/* <Row className="mt-1">{reservation.d_name}</Row>*/}
                                {/* <Row className="mt-1">{reservation.d_type}</Row>*/}
                                <Row className="w-11/12 h-80 rounded-2xl">
                                    <img src={reservation.r_img} className="rounded-2xl" alt="" />
                                </Row>
                            </Column>
                            <Column className="col-start-7 col-end-13">
                                <Row className="text-base mt-0">{`방 정보 : ${reservation.r_name}`}</Row>
                                {/*<Row className="text-2xl mt-1">{reservation.m_userid}</Row>*/}
                                <Row className="text-base mt-2">{`전화번호 : ${reservation.m_telno}`}</Row>
                                <Row className="text-base mt-2">{`체크인 : ${reservation.reservation_checkin}`}</Row>
                                <Row className="text-base mt-2">{`체크아웃 : ${reservation.reservation_checkout}`}</Row>
                                <Row className="text-base mt-2">{`인원 수 : ${reservation.reservation_guest}`}</Row>
                                <Row className="text-base mt-2">{` 가격 : ${reservation.reservation_price}`}</Row>
                                <Row className="text-base mt-2">{` 요청사항 : ${reservation.reservation_description}`}</Row>
                                <Row className="text-base mt-2">{` 호실 : ${reservation.room}호`}</Row>
                                <Row className="text-base mt-2">
                                    {(() => {
                                        switch (reservation.s_status) {
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
                            </Column>
                        </Row>
                    </Box>
                ))}
        </div>
    )
}
