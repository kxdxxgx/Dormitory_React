import React, { useContext } from 'react'
import Column from '../Common/Column'
import ReservationProvider from '../../provider/Reservation_Provider'
import ReservationContext from '../../context/Reservation_Context'

export default function Reservation4() {
    const { reservations } = useContext(ReservationContext)
    let reservation3 = null
    if (reservations && reservations.reservations3) {
        reservation3 = reservations.reservations3
    }

    return (
        <div className="col-start-3 col-end-11 w-full h-1000">
            {/* <div> 환불 규정 </div>
            <Column>{reservation3&&reservation3.policy0}</Column>
            <Column>{reservation3&&reservation3.policy1}</Column> */}
        </div>
    )
}
