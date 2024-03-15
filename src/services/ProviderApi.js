// services/ProviderApi.js
import api from '../api/api'

export const fetchProviderApi = async (pageNum, searchdata) => {
    const result1 = await api.post(`/searchList/dormitory?pageNum=${pageNum}`, searchdata)

    // console.log('result1 : ', result1)

    return result1.data
}
