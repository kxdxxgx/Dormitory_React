import React, { useContext, useEffect } from 'react'
import MapNaverDefault from '../../api/Map/NaverMap'
import MapKakaoDefault from '../../api/Map/KakaoMap'
import Column from '../Common/Column'
import RoomInfoProvider from '../../provider/RoomInfo_Provider'

export default function Reservation3() {
    return (
        <Column className="col-start-3 col-end-8 h-auto pt-16 mb-40">
            {/* <div>Map</div> */}
            {/* <MapNaverDefault /> */}
            {/* <div className="w-500 h-200"><MapKakaoDefault /></div> */}
        </Column>
    )
}
