// services/HomeApi.js
import axios from 'axios'
import api from '../api/api'

export const fetchHomeApi = async (params) => {
    const result1 = await api.get('/star', { params })
    const result2 = await api.get('/discount', { params })
    const result3 = await api.get('/earlyCheckin', { params })

    // console.log('result1 : ', result1)
    // console.log('result2 : ', result2)
    // console.log('result3 : ', result3)

    return {
        images1: result1.data,
        images2: result2.data,
        images3: result3.data
    }
}
