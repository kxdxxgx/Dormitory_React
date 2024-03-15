import axios from 'axios'
import { useContext, useEffect, useRef, useState } from 'react'
import { Map, MapMarker, CustomOverlayMap } from 'react-kakao-maps-sdk'
import ReactDOMServer from 'react-dom/server'
import ReservationContext from '../../context/Reservation_Context'
import styled from 'styled-components'
import Box from '../../components/Common/Box'

export default function KakaoMap2() {
    const { kakao } = window
    const { reservations } = useContext(ReservationContext)
    console.log('reservations kakao : ', reservations.reservations1)
    const { d_lat, d_lon, d_name } = reservations?.reservations1 ?? {}
    // console.log('d_lat kakao : ', d_lat)
    // console.log('d_lon kakao : ', d_lon)
    const [state, setState] = useState({
        // 지도의 초기 위치
        center: { lat: 37.49676871972202, lng: 127.02474726969814 },
        // 지도 위치 변경시 panto를 이용할지(부드럽게 이동)
        isPanto: true,
        errMsg: null,
        isLoading: true,
        name: '',
    })
    const [searchAddress, SetSearchAddress] = useState('여기 어디게.')
    const [info, setInfo] = useState()
    const [markers, setMarkers] = useState([])
    const [map, setMap] = useState()

    const handleSearchAddress = (e) => {
        SetSearchAddress(e.target.value)
    }

    useEffect(() => {
        if (d_lat && d_lon) {
            // d_lat과 d_lon이 유효한 값인지 확인
            setState((prevState) => ({
                ...prevState,
                center: {
                    lat: d_lat,
                    lng: d_lon,
                },
                isLoading: false, // 데이터를 받아왔으므로 로딩 상태를 false로 변경
            }))
        }
    }, [d_lat, d_lon]) // d_lat과 d_lon을 의존성 배열에 추가

    const mapRef = useRef(null) // 지도 객체를 담을 ref 생성

    // const StyledMapMarker = styled(MapMarker)`
    //     /* 직접 스타일을 적용할 때는 작은따옴표(')나 쉼표(,)를 사용하지 않습니다. */
    //     width: 200px;
    //     height: 200px;
    //     border: none;

    //     /* MapMarker의 직접적인 자식 div에 스타일을 적용합니다. */
    //     > div {
    //         width: 200px;
    //         height: 200px;
    //         border: none;
    //     }
    // `

    return (
        <>
            <Map // 지도를 표시할 Container
                center={state.center}
                isPanto={state.isPanto}
                style={{
                    // 지도의 크기
                    width: '100%',
                    height: '300px',
                }}
                level={3} // 지도의 확대 레벨
                onCreate={setMap}
                ref={mapRef}
            >
                {!state.isLoading && (
                    <MapMarker
                        position={state.center}
                        // removable={true} // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다
                        // style={{ border: 'none' }}
                    ></MapMarker>
                )}
                <CustomOverlayMap position={state.center}>
                    <Box className="w-48 h-24 p-4 mb-48">
                        <div>{state.errMsg ? state.errMsg : d_name}</div>
                        <div>
                            <a href={`https://map.kakao.com/link/map/${d_name},${d_lat},${d_lon}`} style={{ color: 'blue' }} target="_blank" rel="noreferrer">
                                큰지도보기
                            </a>
                        </div>
                        <div>
                            <a href={`https://map.kakao.com/link/to/${d_name},${d_lat},${d_lon}`} style={{ color: 'blue' }} target="_blank" rel="noreferrer">
                                길찾기
                            </a>
                        </div>
                    </Box>
                </CustomOverlayMap>
            </Map>

            <div>
                <input onChange={(e) => handleSearchAddress(e)}></input>
            </div>
        </>
    )
}
