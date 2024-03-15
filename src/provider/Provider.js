import React, { useState, useEffect, useMemo, useCallback } from 'react'
import axios from 'axios'
import api from '../api/api'
import { useLocation, useNavigate } from 'react-router-dom'
import Context from '../context/Context'
import { format, addDays } from 'date-fns'
import { fetchProviderApi } from '../services/ProviderApi'

const Provider = ({ children }) => {
    const [location, setLocation] = useState({
        loaded: false,
        coordinates: { lat: '37.49616859', lng: '127.0204826' }
    })

    const onSuccess = (location) => {
        setLocation({
            loaded: true,
            coordinates: {
                lat: location.coords.latitude,
                lng: location.coords.longitude
            }
        })
    }

    useEffect(() => {
        console.log('location.coordinates : ', location.coordinates)
    }, [location])

    const onError = (error) => {
        setLocation({
            loaded: false,
            error
        })
    }

    useEffect(() => {
        if (!navigator.geolocation) {
            onError({ code: 0, message: 'Geolocation not supported' })
        } else {
            navigator.geolocation.getCurrentPosition(onSuccess, onError)
        }
    }, [])

    const [images, setImages] = useState({
        searchlist1: []
    })

    const [searchClicked, setSearchClicked] = useState(true)

    const link = useLocation()

    const today = new Date()
    const tomorrow = addDays(today, 1)

    const [searchdata, setSearchdata] = useState(() => {
        // 로컬 스토리지에서 저장된 값을 가져옵니다.
        const saved = localStorage.getItem('searchdata')
        // 저장된 값이 있으면 파싱하여 반환하고, 없으면 초기 상태를 반환합니다.
        return saved
            ? JSON.parse(saved)
            : {
                  keyword: null,
                  startDate: format(today, 'yyyy-MM-dd'),
                  endDate: format(tomorrow, 'yyyy-MM-dd'),
                  guest: 1,
                  type: [],
                  star: []
              }
    })

    // 상태가 변경될 때마다 로컬 스토리지에 저장합니다.
    // 단, 현재 페이지가 홈('/')이 아닐 때만 저장합니다.
    useEffect(() => {
        if (link.pathname !== '/') {
            // 상태를 문자열로 변환하여 로컬 스토리지에 저장합니다.
            localStorage.setItem('searchdata', JSON.stringify(searchdata))
        }
    }, [searchdata, link.pathname]) // 상태와 pathname이 변경될 때만 이 effect를 실행합니다.

    // pathname이 변경될 때마다 실행합니다.
    useEffect(() => {
        // 홈 화면일 때 로컬 스토리지의 searchdata를 삭제합니다.
        if (link.pathname === '/') {
            setSearchdata({
                keyword: null,
                startDate: format(today, 'yyyy-MM-dd'),
                endDate: format(tomorrow, 'yyyy-MM-dd'),
                guest: 1,
                type: [],
                star: []
            }) // 상태를 초기화합니다.
            localStorage.removeItem('searchdata')
        }
    }, [link.pathname]) // pathname이 변경될 때만 이 effect를 실행합니다.

    useEffect(() => {
        console.log(searchdata.keyword, searchdata.startDate, searchdata.endDate, searchdata.guest)
    }, [searchdata])

    const navigate = useNavigate()

    const onSubmitSearch = useCallback(() => {
        setImages((prevItems) => ({
            ...prevItems,
            searchlist1: [] // or some default value
        }))
        navigate('/searchList')
        setSearchClicked(true)
    }, [])

    const GetSearchList = useCallback(
        async (pageNum) => {
            return fetchProviderApi(pageNum, searchdata)

        },
        [searchdata]
    )

    const value = useMemo(
        () => ({ location, images, setImages, searchdata, setSearchdata, GetSearchList, onSubmitSearch }),
        [location, images, setImages, searchdata, setSearchdata, GetSearchList, onSubmitSearch]
    )

    return (
        <Context.Provider value={value}>
            <div>{children}</div>
        </Context.Provider>
    )
    //
    //
    // axios({
    //     method: 'get', // 또는 'post', 서버 설정에 따라 다름
    //     url: 'http://localhost:8080/login/oauth2/code/{registrationId}',
    //     // 필요하다면 headers 등의 추가적인 설정이 가능합니다.
    // })
    //     .then(response => {
    //         // 서버로부터 받은 응답에서 액세스 토큰을 추출합니다.
    //         const accessToken = response.data.access_token;
    //
    //         sessionStorage.setItem("token",accessToken);
    //         console.log("왜 안돼ㅐㅐㅐㅐㅐ",sessionStorage.getItem());
    //
    //         // 액세스 토큰을 사용하는 로직을 여기에 작성합니다.
    //         // 예를 들어, 상태에 저장하거나, API 요청에 사용하거나, 로컬 스토리지에 저장할 수 있습니다.
    //     })
    //     .catch(error => {
    //         // 오류 처리
    //         console.error('There was an error!', error);
    //     });

    // useEffect(() => {
    //     axios({
    //         method: 'get', // 또는 'post', 서버 설정에 따라 다름
    //         url: '/api/token',
    //         // 필요하다면 headers 등의 추가적인 설정이 가능합니다.
    //     })
    //         .then(response => {
    //             // 서버로부터 받은 응답에서 액세스 토큰을 추출합니다.
    //             const accessToken = response.data.access_token;
    //
    //             sessionStorage.setItem("token",accessToken);
    //             console.log("왜 안돼ㅐㅐㅐㅐㅐ",sessionStorage.getItem());
    //
    //             // 액세스 토큰을 사용하는 로직을 여기에 작성합니다.
    //             // 예를 들어, 상태에 저장하거나, API 요청에 사용하거나, 로컬 스토리지에 저장할 수 있습니다.
    //         })
    //         .catch(error => {
    //             // 오류 처리
    //             console.error('There was an error!', error);
    //         });
    // }, [])

    // let query = useQuery();
    //
    // useEffect(() => {
    //     const accessToken = query.get('cookie');
    //     if (accessToken) {
    //         console.log('Access Token:', accessToken);
    //         // 여기서 상태 관리 라이브러리에 토큰을 저장하거나 다른 처리를 할 수 있습니다.
    //         // 예: localStorage.setItem('accessToken', accessToken);
    //     }
    // }, [query]);

    //
    // let accessToken = null;
    // useEffect(() => {
    //     accessToken = getCookie('accessToken')
    //     if (accessToken) {
    //         // 토큰을 로컬 스토리지에 저장하거나 상태 관리 라이브러리를 사용하여 저장합니다.
    //         localStorage.setItem('access_token', accessToken);
    //
    //         // 토큰을 받은 후에 추가 작업을 수행할 수 있습니다.
    //         console.log('Access Token Received:', accessToken);
    //     }
    // }, [accessToken]);

    useEffect(() => {
        axios
            .get('http://localhost:8080/api/token', {
                withCredentials: true
            })
            .then((response) => console.log(response.data))
    }, [])
}

export default Provider
