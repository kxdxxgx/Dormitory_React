import React, { useContext } from 'react'
import Row from '../Common/Row'
import Column from '../Common/Column'
import RoomInfoContext from '../../context/RoomInfo_Context'
import { Link } from 'react-router-dom'

export default function RoomInfo1() {
    const { roomInfos } = useContext(RoomInfoContext)
    let roomInfo1 = null
    if (roomInfos && roomInfos.roomInfos1) {
        roomInfo1 = roomInfos.roomInfos1[0]
    }
    return (
        <div className="col-start-3 col-end-11 w-full h-1000 mt-24">
            {roomInfo1 && (
                <Column>
                    <Link to="/searchList">
                        <Row>&lt; More Hotels</Row>
                    </Link>
                    <Row className="text-3xl font-semibold">{roomInfo1.d_name}</Row>
                    <Row className="text-lg font-medium mt-1">{roomInfo1.d_grade && roomInfo1.d_grade}</Row>
                    <Row className="text-lg font-medium mt-1">{roomInfo1.d_road}</Row>
                    <Row className="text-3xl font-semibold mt-1">/{`${parseInt(roomInfo1.r_price).toLocaleString()}원 ~`}</Row>
                    <Row className="mt-1 w-full">
                        {`★ ${roomInfo1.d_star} 35 riviews`}
                        <Row className="mt-0 w-1/3">
                            <div>
                                <img src="https://www.tripbtoz.com/images/common/bg_ico_share01.svg" className="w-16 h-16" alt="" />
                            </div>
                            <div>
                                <img src="https://www.tripbtoz.com/images/common/bg_ico_share02.svg" className="w-16 h-16" alt="" />
                            </div>
                            <button
                                className="user-select-text box-border flex items-center justify-center
                                                    h-16 w-40 rounded-md text-black font-bold text-lg"
                                style={{ backgroundColor: '#D9F99D' }}
                            >
                                객실 선택
                            </button>
                        </Row>
                    </Row>
                    <img className="w-1/2 h-112 object-cover rounded-2xl" src={roomInfo1.d_img} alt=""></img>
                </Column>
            )}
        </div>
    )
}
