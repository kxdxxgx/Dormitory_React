import axios from 'axios'
import { useEffect, useRef, useState } from 'react'
import { Map, MapMarker, CustomOverlayMap } from 'react-kakao-maps-sdk'
import ReactDOMServer from 'react-dom/server'
import Box from '../../components/Common/Box'
import Row from '../../components/Common/Row'
import api from '../api'

// export default function KakaoMap() {
//     const { kakao } = window
//     const [info, setInfo] = useState()
//     const [markers, setMarkers] = useState([])
//     const [map, setMap] = useState()

//     useEffect(() => {
//         if (!map) return
//         const ps = new kakao.maps.services.Places()

//         ps.keywordSearch('이태원 맛집', (data, status, _pagination) => {
//             if (status === kakao.maps.services.Status.OK) {
//                 // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
//                 // LatLngBounds 객체에 좌표를 추가합니다
//                 const bounds = new kakao.maps.LatLngBounds()
//                 let markers = []

//                 for (var i = 0; i < data.length; i++) {
//                     // @ts-ignore
//                     markers.push({
//                         position: {
//                             lat: data[i].y,
//                             lng: data[i].x,
//                         },
//                         content: data[i].place_name,
//                     })
//                     // @ts-ignore
//                     bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x))
//                 }
//                 setMarkers(markers)

//                 // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
//                 map.setBounds(bounds)
//             }
//         })
//     }, [map])

//     return (
//         <Map // 로드뷰를 표시할 Container
//             center={{
//                 lat: 37.566826,
//                 lng: 126.9786567,
//             }}
//             style={{
//                 width: '100%',
//                 height: '350px',
//             }}
//             level={3}
//             onCreate={setMap}
//         >
//             {markers.map((marker) => (
//                 <MapMarker
//                     key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
//                     position={marker.position}
//                     onClick={() => setInfo(marker)}
//                 >
//                     {info && info.content === marker.content && <div style={{ color: '#000' }}>{marker.content}</div>}
//                 </MapMarker>
//             ))}
//         </Map>
//     )
// }

export default function KakaoMap() {
    const { kakao } = window
    const [state, setState] = useState({
        // 지도의 초기 위치
        center: { lat: 37.49676871972202, lng: 127.02474726969814 },
        // 지도 위치 변경시 panto를 이용할지(부드럽게 이동)
        isPanto: true,
        errMsg: null,
        isLoading: true,
        name: '',
    })
    const [searchAddress, SetSearchAddress] = useState('')
    const [info, setInfo] = useState()
    const [markers, setMarkers] = useState([])
    const [map, setMap] = useState()

    const [places, setPlaces] = useState([]) // 검색 결과를 저장할 상태

    // 키워드 입력후 검색 클릭 시 원하는 키워드의 주소로 이동
    const SearchMap = () => {
        const ps = new kakao.maps.services.Places()
        const placesSearchCB = function (data, status, pagination) {
            if (status === kakao.maps.services.Status.OK) {
                const newSearch = data[0]
                setState({
                    center: { lat: newSearch.y, lng: newSearch.x },
                })

                console.log('data : ', data)

                const bounds = new kakao.maps.LatLngBounds()

                let places = []
                for (var i = 0; i < data.length; i++) {
                    // @ts-ignore
                    places.push({
                        position: {
                            lat: data[i].y,
                            lng: data[i].x,
                        },
                        content: data[i].place_name,
                    })
                    // @ts-ignore
                    bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x))
                }

                setPlaces(places) // 검색 결과를 상태에 저장
            }
        }
        ps.keywordSearch(`${searchAddress}`, placesSearchCB)
    }

    // 사용자가 선택한 장소로 지도를 이동하는 함수
    // const moveToPlace = (position) => {
    //     setState({
    //         center: { lat: position.lat, lng: position.lng },
    //         isLoading: false,
    //     })
    // }

    const movetToAccomodation = (position, name) => {
        setState({
            center: { lat: position.lat, lng: position.lng },
            isLoading: false,
            name: name,
        })
    }

    const handleSearchAddress = (e) => {
        SetSearchAddress(e.target.value)
    }

    useEffect(() => {
        if (navigator.geolocation) {
            // GeoLocation을 이용해서 접속 위치를 얻어옵니다
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setState((prev) => ({
                        ...prev,
                        center: {
                            lat: position.coords.latitude, // 위도
                            lng: position.coords.longitude, // 경도
                        },
                        isLoading: false,
                    }))
                },
                (err) => {
                    setState((prev) => ({
                        ...prev,
                        errMsg: err.message,
                        isLoading: false,
                    }))
                },
            )
        } else {
            // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
            setState((prev) => ({
                ...prev,
                errMsg: 'geolocation을 사용할수 없어요..',
                isLoading: false,
            }))
        }
    }, [])

    // useEffect(() => {
        const onSearchAdrress = () => {
        if (!map) return
        const ps = new kakao.maps.services.Places()

        ps.keywordSearch(searchAddress, (data, status, _pagination) => {
            if (status === kakao.maps.services.Status.OK) {
                // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
                // LatLngBounds 객체에 좌표를 추가합니다
                const bounds = new kakao.maps.LatLngBounds()
                let markers = []

                for (var i = 0; i < data.length; i++) {
                    // @ts-ignore
                    markers.push({
                        position: {
                            lat: data[i].y,
                            lng: data[i].x,
                        },
                        content: data[i].place_name,
                    })
                    // @ts-ignore
                    bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x))
                }
                setMarkers(markers)

                // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
                map.setBounds(bounds)
            }
        })
    }
    // }, [map])

    const [LatLng, setLatLng] = useState({
        swLat: null,
        swLng: null,
        neLat: null,
        neLng: null,
    })
    const defaultLevel = 3
    const [level, setLevel] = useState(defaultLevel)
    const mapRef = useRef(null) // 지도 객체를 담을 ref 생성
    // idle 이벤트 핸들러
    const handleIdle = () => {
        const bounds = mapRef.current.getBounds()
        const swLatLng = bounds.getSouthWest()
        const neLatLng = bounds.getNorthEast()

        console.log('SW Latitude:', swLatLng.getLat())
        console.log('SW Longitude:', swLatLng.getLng())
        console.log('NE Longitude:', neLatLng.getLat())
        console.log('NE Longitude:', neLatLng.getLng())

        setLatLng({
            swLat: swLatLng.getLat(),
            swLng: swLatLng.getLng(),
            neLat: neLatLng.getLat(),
            neLng: neLatLng.getLng(),
        })
    }

    const [accommodations, setAccommodations] = useState([])
    const fetchAccommodations = async (LatLng) => {
        try {
            const response = await api.get(
                `/roomInfo/map?swLat=${LatLng.swLat}&swLng=${LatLng.swLng}&neLat=${LatLng.neLat}&neLng=${LatLng.neLng}&centerLat=${state.center.lat}&centerLng=${state.center.lng}`,
            )
            setAccommodations(response.data)
            console.log('response.data : ', response.data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        console.log('Accomodations : ', accommodations)
    }, [accommodations])

    const [isOpen, setIsOpen] = useState(false)



    const markerRef = useRef(null)

    // useEffect(() => {
    //     const overlayInfos = accommodations?.map(accomodation => {
    //       return {
    //         lat: accomodation.position.lat,
    //         lng: accomodation.position.lng,
    //         d_name: accomodation.d_name,
    //         d_star: accomodation.d_star
    //       };
    //     });

    //     overlayInfos.forEach(el => {
    //       let marker = new kakao.maps.Marker({
    //         map: markerRef.current,
    //         position: new kakao.maps.LatLng(el.lat, el.lng),
    //         d_name: el.d_name,
    //       });

    //       const content = ReactDOMServer.renderToString(
    //         <div className=" w-20 h-20 bg-teal-200">
    //             <div className="accommInfoWrap">
    //                 <h1 className="accommName">안녕</h1>
    //                 <p className="accommRegion">안녕</p>
    //                 <p className="accommDesc">안녕</p>
    //                 <p className="accommPrice"></p>
    //             </div>
    //             <div className="overlayArrow"></div>
    //           </div>
    //       )

    //       let position = new kakao.maps.LatLng(el.lat, el.lng);

    //       let customOverlay = new kakao.maps.CustomOverlay({
    //         position: position,
    //         content: content,
    //       });

    //       kakao.maps.event.addListener(marker, 'mouseover', function () {
    //         customOverlay.setMap(markerRef.current);
    //       });

    //       kakao.maps.event.addListener(marker, 'mouseout', function () {
    //         setTimeout(function () {
    //           customOverlay.setMap();
    //         });
    //       });
    //     });
    //   }, [accommodations]);

    return (
        <>
            <Map // 지도를 표시할 Container
                center={state.center}
                isPanto={state.isPanto}
                style={{
                    // 지도의 크기
                    width: '1200px',
                    height: '800px',
                }}
                level={defaultLevel} // 지도의 확대 레벨
                onCreate={setMap}
                ref={mapRef}
                onIdle={handleIdle}
            >
                {/* {!state.isLoading && (
                    <MapMarker position={state.center}>
                        <div style={{ padding: '5px', color: '#000' }}>{state.errMsg ? state.errMsg : searchAddress}</div>
                    </MapMarker>
                )} */}
                {markers.map((marker) => (
                    <MapMarker
                        key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
                        position={marker.position}
                        onClick={() => {
                            setInfo(marker)
                            setState((prev) => ({...prev, center: marker.position }))
                        }}
                    >
                        {info && info.content === marker.content && <div style={{ color: '#000' }}>{marker.content}</div>}
                    </MapMarker>
                ))}

                {/* {places.map((place, index) => (
                    <MapMarker key={index} position={place.position} onClick={() => moveToPlace(place.position)}>
                        {place.place_name}
                    </MapMarker>
                ))} */}

                {accommodations &&
                    accommodations.map((accomodation, index) => (
                        <>
                            <MapMarker
                                key={index}
                                position={accomodation.position}
                                onClick={() => {
                                    movetToAccomodation(accomodation.position, accomodation.d_name)
                                    setIsOpen(true)
                                }}
                                ref={markerRef}
                            />
                                            <CustomOverlayMap position={accomodation.position}>
                                <Box
                                    className="w-48 h-24 p-4 mb-48">
                        <div>{accomodation.d_name}</div>
                        <div>
                            <a href={`https://map.kakao.com/link/map/${accomodation.d_name},${accomodation.position.lat},${accomodation.position.lng}`} style={{ color: 'blue' }} target="_blank" rel="noreferrer">
                                큰지도보기
                            </a>
                        </div>
                        <div>
                            <a href={`https://map.kakao.com/link/to/${accomodation.d_name},${accomodation.position.lat},${accomodation.position.lng}`} style={{ color: 'blue' }} target="_blank" rel="noreferrer">
                                길찾기
                            </a>
                        </div>
                    </Box>
                </CustomOverlayMap>
                        </>
                    ))}
                {!state.isLoading && isOpen && (
                    <div>안녕</div>
                )}

            </Map>

            <div>
            <Row splitEnabled={false}>

                <input
                className="border-solid border border-gray-300 rounded-lg h-10 p-4 w-1/4 bg-white text-gray-900 font-normal text-base"
                placeholder="위치를 입력하세요"
                onChange={(e) => handleSearchAddress(e)}
            />
                    <button
                        className="tab-size-4 user-select-text box-border flex items-center justify-center
                                h-10 w-1/4 rounded-md text-black font-bold text-lg"
                        style={{ backgroundColor: '#D9F99D' }}
                        onClick={() => onSearchAdrress()}
                        >
                        위치 검색
                    </button>
                    <button
                        className="tab-size-4 user-select-text box-border flex items-center justify-center
                                h-10 w-1/4 rounded-md text-black font-bold text-lg"
                        style={{ backgroundColor: '#D9F99D' }}
                        onClick={() => fetchAccommodations(LatLng)}
                        >
                        근처 숙소 검색하기
                    </button>
                    </Row>
            </div>
        </>
    )
}

// prettier-ignore

// // 주소 입력후 검색 클릭 시 원하는 주소로 이동
// const SearchMap = () => {
//     const geocoder = new kakao.maps.services.Geocoder()

//     let callback = function (result, status) {
//         if (status === kakao.maps.services.Status.OK) {
//             const newSearch = result[0]
//             setState({
//                 center: { lat: newSearch.y, lng: newSearch.x },
//             })
//         }
//     }
//     geocoder.addressSearch(`${searchAddress}`, callback)
// }

// from "react"
// import { Map } from "react-kakao-maps-sdk"
// import useKakaoLoader from "./useKakaoLoader"

// export default function ChangeLevel() {
//   useKakaoLoader()
//   const mapRef = useRef<kakao.maps.Map>(null)
//   const defaultLevel = 3
//   const [level, setLevel] = useState(defaultLevel)

//   const handleLevel = (type: "increase" | "decrease") => {
//     const map = mapRef.current
//     if (!map) return

//     if (type === "increase") {
//       map.setLevel(map.getLevel() + 1)
//       setLevel(map.getLevel())
//     } else {
//       type === "decrease"
//       map.setLevel(map.getLevel() - 1)
//       setLevel(map.getLevel())
//     }
//   }

//   return (
//     <Map // 지도를 표시할 Container
//       center={{
//         lat: 33.450701,
//         lng: 126.570667,
//       }}
//       style={{
//         // 지도의 크기
//         width: "100%",
//         height: "350px",
//       }}
//       level={defaultLevel} // 지도의 확대 레벨
//       zoomable={true}
//       ref={mapRef}
//     >
//       <p>
//         <button onClick={() => handleLevel("decrease")}>지도레벨 - 1</button>{" "}
//         <button onClick={() => handleLevel("increase")}>지도레벨 + 1</button>{" "}
//         <span id="maplevel">현재 지도 레벨은 {level} 레벨 입니다.</span>
//       </p>
//     </Map>
//   )
// }

// const strenght = () => {
//     // 마커이미지의 주소입니다. 스프라이트 이미지 입니다
//     const markerImageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/category.png'

//     const imageSize = { width: 22, height: 26 }
//     const spriteSize = { width: 36, height: 98 }

//     // 커피숍 마커가 표시될 좌표 배열입니다
//     const coffeePositions = [
//         { lat: 37.499590490909185, lng: 127.0263723554437 },
//         { lat: 37.499427948430814, lng: 127.02794423197847 },
//         { lat: 37.498553760499505, lng: 127.02882598822454 },
//         { lat: 37.497625593121384, lng: 127.02935713582038 },
//         { lat: 37.49646391248451, lng: 127.02675574250912 },
//         { lat: 37.49629291770947, lng: 127.02587362608637 },
//         { lat: 37.49754540521486, lng: 127.02546694890695 },
//     ]
//     const coffeeOrigin = { x: 10, y: 0 }

//     const [selectedCategory, setSelectedCategory] = useState('coffee')

//     useEffect(() => {
//         const coffeeMenu = document.getElementById('coffeeMenu')

//         if (selectedCategory === 'coffee') {
//             // 커피숍 카테고리를 선택된 스타일로 변경하고
//             coffeeMenu.className = 'menu_selected'
//         }
//     }, [selectedCategory])

//     return (
//         <>
//             <CategoryMarkerStyle />
//             <div id="mapwrap">
//                 <Map // 지도를 표시할 Container
//                     id={`map`}
//                     center={{
//                         // 지도의 중심좌표
//                         lat: 37.498004414546934,
//                         lng: 127.02770621963765,
//                     }}
//                     style={{
//                         // 지도의 크기
//                         width: '100%',
//                         height: '450px',
//                     }}
//                     level={3} // 지도의 확대 레벨
//                 >
//                     {selectedCategory === 'coffee' &&
//                         coffeePositions.map((position) => (
//                             <MapMarker
//                                 key={`coffee-${position.lat},${position.lng}`}
//                                 position={position}
//                                 image={{
//                                     src: markerImageSrc,
//                                     size: imageSize,
//                                     options: {
//                                         spriteSize: spriteSize,
//                                         spriteOrigin: coffeeOrigin,
//                                     },
//                                 }}
//                             />
//                         ))}
//                 </Map>
//                 {/* 지도 위에 표시될 마커 카테고리 */}
//                 <div className="category">
//                     <ul>
//                         <li id="coffeeMenu" onClick={() => setSelectedCategory('coffee')}>
//                             <span className="ico_comm ico_coffee"></span>
//                             커피숍
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </>
//     )
// }
