import React, { useState, useContext } from 'react'
import axios from 'axios'
import ReservationContext from '../../context/Reservation_Context'
import { useNavigate } from 'react-router-dom'
import api from '../../api/api'

const Payment = (data) => {
    const { price, name, telno } = data.data
    const [IMP, setIMP] = useState('imp30387750')
    const { reservationdata } = useContext(ReservationContext)
    const navigate = useNavigate()
    // console.log(price)
    const onClickRequestPay = () => {
        const { IMP } = window
        IMP.init('imp30387750')

        const today = new Date()
        const hours = today.getHours() // 시
        const minutes = today.getMinutes() // 분
        const seconds = today.getSeconds() // 초
        const milliseconds = today.getMilliseconds()
        const makeMerchantUid = hours + minutes + seconds + milliseconds
        IMP.request_pay(
            {
                pg: 'kakaopay',
                pay_method: 'kakaopay',
                merchant_uid: 'IMP' + makeMerchantUid,
                name: '숙소예약Test', //입력란 만들기
                amount: price, //나중에 숙소 가격 DB에서 가져오기
                buyer_name: name, //입력란 만들기
                buyer_tel: telno //입력란 만들기
            },
            (rsp) => {
                if (rsp.success) {
                    console.log('가격' + rsp.paid_amount)
                    api({
                        url: '/reservation/reservationInfo',
                        method: 'post',
                        headers: { 'Content-Type': 'application/json' },
                        data: {
                            ...reservationdata
                        }
                    }).then((data) => {
                        console.log(data)
                    })

                    api({
                        url: '/reservation/payment',
                        method: 'post',
                        headers: { 'Content-Type': 'application/json' },
                        data: {
                            imp_uid: rsp.imp_uid,
                            merchant_uid: rsp.merchant_uid,
                            paid_amount: rsp.paid_amount,
                            buyer_name: rsp.buyer_name,
                            buyer_tel: rsp.buyer_tel,
                            paid_status: rsp.status,
                            success: rsp.success,
                            reservation_code: 3
                        }
                    })
                        .then((data) => {
                            console.log(data)
                            if (data.status == 200) {
                                navigate('/menu/reservation')
                            }
                            // navigate('/reservation')
                        })
                        .catch((error) => {
                            console.log(error)
                            alert('예약 처리 중 오류가 발생했습니다.')
                        })
                } else {
                    alert(`결제에 실패하였습니다. 에러 내용: ${rsp.error_msg}`)
                }
            }
        )
    }

    return (
        <button
            className="tab-size-4 user-select-text box-border flex items-center justify-center h-14 w-full rounded-md text-black font-bold text-lg mt-5"
            style={{ backgroundColor: '#D9F99D' }}
            onClick={onClickRequestPay}
        >
            {parseInt(price).toLocaleString()}원 결제하기
        </button>
    )
}

export default Payment
