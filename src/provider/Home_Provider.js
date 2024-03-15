import React, { useState, useEffect, useMemo, useContext } from 'react'
import HomeContext from '../context/Home_Context'
import Context from '../context/Context'
import { fetchHomeApi } from '../services/HomeApi'

const HomeProvider = ({ children }) => {
    const [images, setImages] = useState({
        images1: null,
        images2: null,
        images3: null
    })

    const fetchAndSetImages = async (params) => {
        const fetchHomeData = await fetchHomeApi(params)
        setImages(fetchHomeData)
    }

    const { location } = useContext(Context)
    const { coordinates } = location

    // API 호출 상태를 추적하는 상태 변수
    const [apiCalled, setApiCalled] = useState(false)
    useEffect(() => {
        // 위치 정보가 로드되었으면 실제 위치를, 그렇지 않으면 기본 위치를 사용합니다.
        const lat = location.coordinates?.lat ?? '37.49616859'
        const lng = location.coordinates?.lng ?? '127.0204826'
        const params = { lat, lng }

        const callApi = () => {
            // ImagesAPI(params)
            fetchAndSetImages(params)
            setApiCalled(true) // API를 호출했다는 상태를 업데이트
        }

        console.log('location.coordinates Home : ', location.coordinates)

        // 위치 정보가 로드되었을 때 한 번만 API 호출
        if (location.loaded) {
            callApi()
        }
    }, [location]) // location 객체 자체를 의존성 배열에 추가

    useEffect(() => {
        const callApi = (lat, lng) => {
            const params = { lat, lng }
            // ImagesAPI(params)
            fetchAndSetImages(params)
            setApiCalled(true) // API를 호출했다는 상태를 업데이트
        }

        console.log('location.coordinates Home : ', location.coordinates)

        // 위치 정보가 로드되었으면 실제 위치를, 그렇지 않으면 기본 위치를 사용합니다.
        if (location.loaded) {
            const lat = location.coordinates?.lat
            const lng = location.coordinates?.lng
            callApi(lat, lng)
        } else if (!apiCalled) {
            const lat = '37.49616859'
            const lng = '127.0204826'
            callApi(lat, lng)
        }
    }, [location, apiCalled]) // location과 apiCalled 객체를 의존성 배열에 추가

    // // API 호출 상태를 추적하는 상태 변수
    // const [apiCalled, setApiCalled] = useState(false)

    // useEffect(() => {
    //     // 위치 정보가 로드되었으면 실제 위치를, 그렇지 않으면 기본 위치를 사용합니다.
    //     let lat = '37.49616859'
    //     let lng = '127.0204826'

    //     // 위치 정보가 로드되면 실제 위치를 사용하여 API를 호출합니다.
    //     if (location.loaded) {
    //         lat = location.coordinates?.lat
    //         lng = location.coordinates?.lng
    //     }

    //     // API 호출을 지연시키는 함수
    //     const delayAPICall = async () => {
    //         await new Promise((resolve) => setTimeout(resolve, 2000)) // 2초 기다립니다.
    //         const params = { lat, lng }
    //         ImagesAPI(params)
    //         setApiCalled(true) // API를 호출했다는 상태를 업데이트
    //     }

    //     // API 호출이 아직 이루어지지 않았다면 API를 호출합니다.
    //     if (!apiCalled) {
    //         delayAPICall()
    //     }
    // }, [location, apiCalled]) // location과 apiCalled 객체를 의존성 배열에 추가

    const value = useMemo(() => ({ images }), [images])

    return (
        <HomeContext.Provider value={value}>
            <div>{children}</div>
        </HomeContext.Provider>
    )
}

export default HomeProvider
