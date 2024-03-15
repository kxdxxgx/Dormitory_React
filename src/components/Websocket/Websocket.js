import React, { useState, useEffect } from 'react'

function ReservationComponent() {
    const [reservationSocket, setReservationSocket] = useState(null)
    const [reservations, setReservations] = useState([])
    const [reservationDetails, setReservationDetails] = useState({
        // 초기 예약 상세 정보 상태 설정
    })

    // 웹소켓 연결을 설정합니다.
    useEffect(() => {
        const socket = new WebSocket('ws://127.0.0.1:8080/ws/reservation')
        setReservationSocket(socket)

        socket.onmessage = (event) => {
            const reservationUpdate = JSON.parse(event.data)
            if (reservationUpdate.success) {
                setReservations([...reservations, reservationUpdate.reservation])
            } else {
                alert('예약에 실패했습니다: ' + reservationUpdate.message)
            }
        }

        socket.onclose = (event) => {
            console.log('Reservation socket closed: ', event)
        }

        // 웹소켓 연결 종료 시 정리합니다.
        return () => {
            socket.close()
        }
    }, [])

    // 예약 정보를 서버로 보내는 함수입니다.
    const makeReservation = (details) => {
        if (reservationSocket) {
            reservationSocket.send(JSON.stringify(details))
        }
    }

    // 폼 제출 핸들러입니다.
    const handleSubmit = (e) => {
        e.preventDefault()
        makeReservation(reservationDetails)
    }

    // 예약 상세 정보 입력 핸들러입니다.
    const handleInputChange = (e) => {
        const { name, value } = e.target
        setReservationDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }))
    }

    // 예약 현황을 표시하는 함수입니다.
    const renderReservations = () => {
        return reservations.map((reservation, index) => <div key={index}>{/* 예약 정보를 렌더링합니다. */}</div>)
    }

    return (
        <div>
            <form id="reservationForm" onSubmit={handleSubmit}>
                {/* 폼 필드와 버튼을 구현합니다. */}
                <input type="text" name="reservationName" value={reservationDetails.reservationName} onChange={handleInputChange} />
                {/* 다른 필드들 추가... */}
                <button type="submit">예약하기</button>
            </form>
            <div>{renderReservations()}</div>
        </div>
    )
}

export default ReservationComponent
