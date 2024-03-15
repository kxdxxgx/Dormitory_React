// services/RoomInfoApi.js
import axios from 'axios'
import api from '../api/api'

export const fetchRoomInfoApi = async (d_code, startDate, endDate) => {
    const result1 = await api.get(`/roomInfo/roomReview?d_code=${d_code}`)
    const result2 = await api.get(`/roomInfo/review?d_code=${d_code}`)
    // const result3 = await axios.get(`http://localhost:8080/roomInfo/map?d_code=${d_code}`)
    const result4 = await axios.get(`/api/roomInfo/roomDetail?d_code=${d_code}&reservation_checkin=${startDate}&reservation_checkout=${endDate}`)
    const result5 = await api.get(`/roomInfo/dormitory?d_code=${d_code}`)
    const result6 = await api.get(`/roomInfo/cancel?d_code=${d_code}`)
    const result7 = await api.get(`/roomInfo/amenity?d_code=${d_code}`)

    // console.log('result1 : ', result1)
    // console.log('result2 : ', result2)
    // // console.log('result3 : ', result3)
    // console.log('result4 : ', result4)
    // console.log('result5 : ', result5)
    // console.log('result6 : ', result6)
    // console.log('result7 : ', result7)

    return {
        roomInfos1: result1.data,
        roomInfos2: result2.data,
        // roomInfos3: result3.data,
        roomInfos4: result4.data,
        roomInfos5: result5.data,
        roomInfos6: result6.data,
        roomInfos7: result7.data
    }
}
