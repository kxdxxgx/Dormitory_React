// services/RoomInfoApi.js
import axios from 'axios'
import api from '../api/api'

export const fetchReservationApi = async (d_code, r_code) => {
    const result1 = await api.get(`/reservation/dormitoryRoom?r_code=${r_code}`)
    // const result2 = await axios.get('http://localhost:8080/reservation/reservationInfo')
    const result3 = await api.get(`/reservation/cancel?d_code=${d_code}`)

    // console.log('result1 : ', result1)
    // console.log('result2 : ', result2)
    // console.log('result3 : ', result3)

    return {
        reservations1: result1.data,
        // reservations2: result2.data,
        reservations3: result3.data
    }
}
