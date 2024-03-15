import React, { useContext, useEffect } from 'react'
import ReservationProvider from '../../provider/Reservation_Provider'
import Provider from '../../provider/Provider'
import Context from '../../context/Context'
import Row from '../Common/Row'
import Column from '../Common/Column'
import Box from '../Common/Box'
import ReservationContext from '../../context/Reservation_Context'
import Payment from '../../components/Payment/Payment'
import '../../assets/css/modal.css'
import axios from 'axios'
export default function ReservationModal({ closeModal, children, price }) {
    const { searchdata } = useContext(Context)
    const { reservations, reservationdata, setReservationdata } = useContext(ReservationContext)
    let search = null
    console.log(reservationdata)
    if (searchdata && searchdata) {
        search = searchdata
    }
    let reservation3 = null
    if (reservations && reservations.reservations3) {
        reservation3 = reservations.reservations3
    }
    let data = {
        // price:reservationdata.reservation_price,
        price: price,
        name: reservationdata.m_username,
        telno: reservationdata.m_telno
    }

    // if(reservationdata && reservationdata){
    //     reservation = reservationdata;
    //     console.log("2222222",reservationdata.d_name);
    // }
    function getDayName(dateString) {
        const date = new Date(dateString)
        const dayNames = ['일', '월', '화', '수', '목', '금', '토']
        return dayNames[date.getDay()]
    }

    return (
        <div className="z-20 fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4" onClick={closeModal}>
            <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full" onClick={(e) => e.stopPropagation()}>
                <div className="px-10 py-8 flex flex-col">
                    <button className=" self-end" href="#" onClick={closeModal}>
                        x
                    </button>
                    <Row className="text-2xl font-semibold mt-0">결제 진행을 위해 한 번 더 확인해 주세요</Row>
                    <Row className="grid grid-cols-1 mt-0">
                        <Row className="text-lg mt-2">{reservationdata.d_name}</Row>
                        <Row className="text-lg mt-2">{reservationdata.r_name}</Row>
                    </Row>
                    <Row className="relative flex w-full flex-row gap-1">
                        <div className="flex basis-1/2 flex-col items-center overflow-hidden border border-gray-50 rounded-l-lg">
                            <div className="SB_14_100_Medium w-full bg-gray-100 py-2 text-center text-gray-900">체크인</div>
                            <span className="font-medium bg-white rounded p-1">
                                {reservationdata.reservation_checkin}({getDayName(reservationdata.reservation_checkin)})
                            </span>
                            <span>{reservations && reservations.reservations1.d_checkin}~</span>
                        </div>
                        <div className="P_15_145_Regular absolute left-1/2 top-[calc(50%_+_17px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white py-1.5 px-3 text-gray-900 shadow-[0_0_8px_0_rgba(0,0,0,0.08)]">
                            {Math.ceil((new Date(search.endDate) - new Date(search.startDate)) / (1000 * 60 * 60 * 24))}박
                        </div>
                        <div className="flex basis-1/2 flex-col items-center overflow-hidden border border-gray-50 rounded-r-lg">
                            <div className="SB_14_100_Medium w-full bg-gray-100 py-2 text-center text-gray-900">체크아웃</div>
                            <span className="font-medium bg-white rounded p-1">
                                {reservationdata.reservation_checkout}({getDayName(reservationdata.reservation_checkout)})
                            </span>
                            <span>~{reservations && reservations.reservations1.d_checkout}</span>
                        </div>
                    </Row>

                    <div className="mt-4">
                        예약자명 : <span className="font-medium">{reservationdata.m_username}</span>
                    </div>
                    <div>
                        이메일 : <span className="font-medium">{reservationdata.m_userid}</span>
                    </div>
                    <div>
                        연락처 : <span className="font-medium">{reservationdata.m_telno}</span>
                    </div>
                    <div>
                        인원 : <span className="font-medium">{reservationdata.reservation_guest}</span>명
                    </div>

                    <div className="mb-5">
                        요청사항 : <span className="font-medium">{reservationdata.reservation_description}</span>
                    </div>
                    <Box className="bg-gray-100 border-none font-bold">
                        환불 정책
                        <Column className="mt-4">{reservation3 && reservation3.policy0}</Column>
                        <Column className="mt-4">{reservation3 && reservation3.policy1}</Column>
                    </Box>
                    <div className="mt-2">
                        <Payment data={data} />
                    </div>
                </div>
            </div>
        </div>
    )
}
