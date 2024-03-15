import React, { useState, useEffect, useMemo, useContext } from 'react'
import RoomInfoContext from '../context/RoomInfo_Context'
import Context from '../context/Context'
import { fetchRoomInfoApi } from '../services/RoomInfoApi'

const RoomInfoProvider = ({ children }) => {
        const [roomInfos, setRoomInfos] = useState({
        roomInfos1: null,
        roomInfos2: null,
        //roomInfos3: null,
        roomInfos4: null,
        roomInfos5: null,
        roomInfos6: null,
        roomInfos7: null
    })

    let d_code = sessionStorage.getItem('d_code')
    const { searchdata } = useContext(Context)
    const { startDate, endDate } = searchdata

    useEffect(() => {
        const fetchAndSetRoomInfos = async () => {
            const fetchRoomInfoData = await fetchRoomInfoApi(d_code, startDate, endDate)
            setRoomInfos(fetchRoomInfoData)
        }

        fetchAndSetRoomInfos()
    }, [])

    const value = useMemo(() => ({ roomInfos }), [roomInfos])

    return <RoomInfoContext.Provider value={value}>{children}</RoomInfoContext.Provider>
}

export default RoomInfoProvider
