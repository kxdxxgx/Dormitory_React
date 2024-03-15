import React, { useEffect, useRef, useState, useCallback, useContext } from 'react'
import SearchListContext from '../../context/SearchList_Context'
import Column from '../Common/Column'
import Row from '../Common/Row'
import { useNavigate } from 'react-router-dom'
import Context from '../../context/Context'
import { useLocation } from 'react-router-dom'

export default function SearchList2() {
    const { searchdata, images, setImages, GetSearchList } = useContext(Context)
    const searchlists = images.searchlist1
    console.log('images4 : ', searchlists)

    const [pageNum, setPageNum] = useState(1)
    const loadingRef = useRef(false)
    const location = useLocation()

    const loadItems = useCallback(async () => {
        if (loadingRef.current) return // 이미 로딩 중이라면 더 이상 진행하지 않는다.
        loadingRef.current = true
        const newItems = await GetSearchList(pageNum)
        setImages((prevItems) => ({
            searchlist1: [...prevItems.searchlist1, ...newItems],
        }))
        console.log('pageNum : ', pageNum)
        loadingRef.current = false
    }, [GetSearchList, setImages, pageNum])

    const navigate = useNavigate()

    const onRoomInfo = (d_code, r_code) => {
        sessionStorage.setItem('d_code', d_code)
        sessionStorage.setItem('r_code', r_code)
        navigate('/roomInfo')
    }

    // useEffect(() => {
    //     loadItems(1) // 컴포넌트가 마운트될 때 한 번만 데이터 로드
    // }, []) // dependency 배열에서 loadItems를 제거

    useEffect(() => {
        loadItems(1) // 컴포넌트가 마운트될 때 한 번만 데이터 로드
    }, [location]) // location을 의존성 배열에 추가

    useEffect(() => {
        const handleScroll = () => {
            const { scrollTop, clientHeight, scrollHeight } = document.documentElement
            console.log(scrollHeight, scrollTop, clientHeight)
            if (scrollHeight - scrollTop <= clientHeight + 50) {
                if (!loadingRef.current) {
                    setPageNum((prevpage) => prevpage + 1)
                }
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, []) // 스크롤 이벤트 리스너 등록 및 해제

    useEffect(() => {
        if (pageNum > 1) {
            loadItems()
        }
    }, [pageNum]) // pageNum이 업데이트 될 때마다 loadItems 함수 호출

    return (
        <div className="col-start-5 col-end-12 w-full pt-16 flex flex-row justify-start">
            <div className="flex flex-col w-11/12">
                <div>n개 중 예약 가능 n개</div>
                {searchlists &&
                    searchlists.map((searchlist, index) => (
                        <div
                            key={pageNum + index}
                            onClick={() => {
                                onRoomInfo(searchlist.d_code, searchlist.r_code)
                            }}
                        >
                            <Row className="w-full">
                                <div className=" w-96 h-48 rounded-2xl">
                                    <img className=" w-full h-full object-contain rounded-2xl" src={searchlist.d_img} alt=""></img>
                                </div>
                                <Column className="ml-4 w-full">
                                    <Row className="mt-2 text-xl font-semibold">{searchlist.d_name}</Row>
                                    <Row className="text-base mt-0" splitEnabled={false}>
                                        {searchlist.d_type}
                                    </Row>
                                    <Row className="text-sm mt-1 text-gray-500" splitEnabled={false}>
                                        ★ {searchlist.d_star}
                                    </Row>
                                    <Row className="mt-0">{searchlist.d_road}</Row>
                                    <Row className="mt-4 text-xl font-semibold">
                                        /
                                        <Row>
                                            {parseInt(searchlist.min_r_price).toLocaleString()}원 ~{parseInt(searchlist.max_r_price).toLocaleString()}원
                                        </Row>
                                    </Row>
                                    <Row className="mt-1">
                                        /
                                        <button
                                            className="tab-size-4 user-select-text box-border flex items-center justify-center
                                                    h-10 w-1/4 rounded-md text-black font-bold text-lg"
                                            style={{ backgroundColor: '#D9F99D' }}
                                        >
                                            결제하기
                                        </button>
                                    </Row>
                                </Column>
                            </Row>
                            <hr className="mt-6" />
                        </div>
                    ))}
            </div>
        </div>
    )
}
