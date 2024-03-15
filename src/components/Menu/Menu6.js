import React, { useContext } from 'react'
import MenuContext from '../../context/Menu_Context'
import Column from '../Common/Column'
import Row from '../Common/Row'
import Box from '../Common/Box'

export default function Menu6() {
    const { images } = useContext(MenuContext)
    let imageInfo = null
    if (images && images.images5) {
        imageInfo = images.images5
        console.log('sadsad', imageInfo)
    }

    const Checkin = async (reservation) => {
        console.log('보냈습니다', reservation)
        try {
            const response = await fetch('http://localhost:8080/menu/checkin', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(reservation)
            })
        } catch (error) {
            console.log('error' + error)
        }

        // 후속 처리
        window.location.reload()
    }
    const Checkout = async (reservation) => {
        try {
            const response = await fetch('http://localhost:8080/menu/checkout', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(reservation)
            })
        } catch (error) {
            console.log('error' + error)
        }

        // 후속 처리
        window.location.reload()
    }

    return (
        <div className="col-start-4 col-end-13 w-4/5 h-auto pt-16 flex flex-col m-auto">
            {imageInfo &&
                imageInfo.map((reservation, index) => (
                    <Box key={index} className="mb-24 p-10 pb-12">
                        <Row className="justify-start grid grid-cols-12 h-auto">
                            <Column className="col-start-1 col-end-7">
                                <Row className="text-2xl font-semibold mt-0 text-black">{`${index + 1}. ${reservation.d_name} ${reservation.d_type}`}</Row>
                                <Row className="w-11/12 h-80 rounded-2xl">
                                    <img src={reservation.r_img} className="rounded-2xl" alt="" />
                                </Row>
                            </Column>
                            <Column className="col-start-7 col-end-13">
                                {/*<Row className="mt-1">{`이름이야 : ${reservation.r_name}`}</Row>*/}
                                <Row className="text-base mt-2">{`예약자아이디 : ${reservation.m_userid}`}</Row>
                                <Row className="text-base mt-2">{`전화번호 : ${reservation.m_telno}`}</Row>
                                <Row className="text-base mt-2">{`체크인 : ${reservation.reservation_checkin}`}</Row>
                                <Row className="text-base mt-2">{`체크아웃 : ${reservation.reservation_checkout}`}</Row>
                                <Row className="text-base mt-2">{`인원수 : ${reservation.reservation_guest}명`}</Row>
                                <Row className="text-base mt-2">{`가격 : ${reservation.reservation_price}`}</Row>
                                <Row className="text-base mt-2">{`요청사항 : ${reservation.reservation_description}`}</Row>
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
                                <div className="flex flex-row">
                                    <button
                                        className="tab-size-4 user-select-text box-border flex items-center justify-center h-14 w-96 rounded-md text-black font-bold text-lg mt-5"
                                        style={{ backgroundColor: '#D9F99D' }}
                                        onClick={() => Checkin(reservation)}
                                    >
                                        체크인
                                    </button>
                                    <button
                                        className="ml-8 tab-size-4 user-select-text box-border flex items-center justify-center h-14 w-96 rounded-md text-black font-bold text-lg mt-5"
                                        style={{ backgroundColor: '#D9F99D' }}
                                        onClick={() => Checkout(reservation)}
                                    >
                                        체크아웃
                                    </button>
                                </div>
                            </Column>
                        </Row>
                    </Box>
                ))}
        </div>
    )
}
