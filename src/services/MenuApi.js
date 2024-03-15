// services/MenuApi.js
import axios from 'axios'
import getCookie from '../api/cookie/getCookie'
import api from '../api/api'

export const fetchMenuApi = async () => {
    const result1 = await api.get(`/menu/memberInfo?userid=${getCookie('userid')}`)
    const result2 = await api.get(`/menu/reservationInfo?userid=${getCookie('userid')}`)
    const result3 = await api.get(`/menu/visited?userid=${getCookie('userid')}`)
    const result4 = await api.get(`/menu/memberReview?userid=${getCookie('userid')}`)
    const result5 = await api.get(`/menu/managerReservation?userid=${getCookie('userid')}`)

    // console.log('result1 : ', result1)
    // console.log('result2 : ', result2)
    // console.log('result3 : ', result3)
    // console.log('result4 : ', result4)
    // console.log('result5 : ', result5)

    return {
        images1: result1.data,
        images2: result2.data,
        images3: result3.data,
        images4: result4.data,
        images5: result5.data
    }
}
