import React, { useState, useEffect, useMemo } from 'react'
import ReservationContext from '../context/Reservation_Context'
import { fetchReservationApi } from '../services/ReservationApi'

const ReservationProvider = ({ children }) => {
    const [reservations, setRerservations] = useState({
        reservations1: null,
        reservations2: null,
        reservations3: null
    })

    const [reservationdata, setReservationdata] = useState({
        d_code: null,
        r_code: null,
        d_name: null,
        d_type: null,
        r_img: null,
        r_name: null,
        d_discount: null,

        m_userid: null,
        m_telno: null,
        m_username: null,

        reservation_checkin: null,
        reservation_checkout: null,
        reservation_guest: null,
        reservation_price: null,
        reservation_description: null,
        s_status: 3
    })

    let d_code = sessionStorage.getItem('d_code')
    let r_code = sessionStorage.getItem('r_code')

    useEffect(() => {
        const fetchAndSetReservations = async () => {
            const fetchReservationData = await fetchReservationApi(d_code, r_code)
            setRerservations(fetchReservationData)
        }

        fetchAndSetReservations()
    }, [])

    const value = useMemo(() => ({ reservations, reservationdata, setReservationdata }), [reservations, reservationdata, setReservationdata])

    return <ReservationContext.Provider value={value}>{children}</ReservationContext.Provider>
}

export default ReservationProvider
