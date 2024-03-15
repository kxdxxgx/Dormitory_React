import React, { useContext, useEffect, useState, useCallback } from 'react'
import MapNaverDefault from '../../api/Map/NaverMap'
import MapKakaoDefault from '../../api/Map/KakaoMap'
import Row from '../Common/Row'
import Column from '../Common/Column'
import ReservationContext from '../../context/Reservation_Context'
import Box from '../Common/Box'

export default function Reservation1() {
    const { reservations, reservationdata, setReservationdata } = useContext(ReservationContext)
    const [reservations1, setReservations1] = useState(null)
    useEffect(() => {
        if (reservations.reservations1) {
            setReservations1(reservations.reservations1)
        }
    }, [reservations])
    console.log('reservations1 : ', reservations1)

    //이름 저장
    const nameChange = useCallback((e) => {
        setReservationdata({
            ...reservationdata,
            m_username: e.target.value,
        })
    })
    //전화번호 저장
    const telnoChange = useCallback((e) => {
        setReservationdata({
            ...reservationdata,
            m_telno: e.target.value,
        })
    })
    //아이디 저장
    const useridChange = useCallback((e) => {
        setReservationdata({
            ...reservationdata,
            m_userid: e.target.value,
        })
    })
    //아이디 저장
    const descriptionChange = useCallback((e) => {
        setReservationdata({
            ...reservationdata,
            reservation_description: e.target.value,
        })
    })
    return (
        <Column className="col-start-3 col-end-8 h-auto">
            <Row className="text-3xl font-semibold">예약 확인 및 결제</Row>
            {reservations1 && (
                <div>
                    <Row className="mt-4 text-lg">{reservations1.d_name}</Row>
                    <Row className="mt-4 text-lg">{reservations1.r_name}</Row>
                </div>
            )}
            <Row className="mt-16 text-2xl">예약자 정보</Row>
            <hr className="mt-4 w-11/12" />
            <Row className="mt-8 text-lg">예약자 이름</Row>
            <input
                className="border-solid border mt-4 border-gray-300 rounded-lg h-12 p-4 w-1/2 bg-white text-gray-900 font-normal text-base"
                placeholder="이름을 입력하세요"
                onChange={nameChange}
            />
            <Row className="text-lg">휴대폰 번호</Row>
            <input
                className="border-solid border mt-4 border-gray-300 rounded-lg h-12 p-4 w-1/2 bg-white text-gray-900 font-normal text-base"
                placeholder="번호를 입력하세요"
                onChange={telnoChange}
            />
            <Row className="text-lg">이메일</Row>
            <input
                className="border-solid border mt-4 border-gray-300 rounded-lg h-12 p-4 w-1/2 bg-white text-gray-900 font-normal text-base"
                placeholder="이메일을 입력하세요"
                onChange={useridChange}
            />
            <Row className="text-lg">요청사항</Row>
            <textarea
                className="border-solid border mt-4 border-gray-300 rounded-lg h-300 p-4 w-1/2 bg-white text-gray-900 font-normal text-base"
                placeholder="요청사항을 입력하세요"
                onChange={descriptionChange}
            />
        </Column>
    )
}
