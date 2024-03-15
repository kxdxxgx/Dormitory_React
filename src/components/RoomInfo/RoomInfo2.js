import React, { useContext, useEffect, useRef, useState } from 'react'
import Row from '../Common/Row'
import Column from '../Common/Column'
import RoomInfoContext from '../../context/RoomInfo_Context'
import Box from '../Common/Box'
import { useNavigate } from 'react-router-dom'
import Slider from 'react-slick'
import '../../assets/css/slick-theme.css'
import '../../assets/css/slick.css'
import Button from '../Common/Button'

export default function RoomInfo2() {
    const { roomInfos } = useContext(RoomInfoContext)
    const [roomInfos4, setRoomInfos4] = useState(null)
    useEffect(() => {
        if (roomInfos.roomInfos4) {
            setRoomInfos4(roomInfos.roomInfos4)
        }
    }, [roomInfos])
    console.log('roomInfos4 : ', roomInfos4)

    // if (roomInfos4) {
    //     Object.values(roomInfos4).map((roomInfo, index) => {
    //         console.log('index : ', index)
    //         console.log('roomInfo : ', roomInfo)
    //     })
    //
    //     Object.keys(roomInfos4).forEach((key) => {
    //         roomInfos4[key].forEach(({ r_name, r_description }) => {
    //             console.log(`r_name: ${r_name}`)
    //             console.log(`r_description: ${r_description}`)
    //         })
    //     })
    // }

    let roomInfo6 = null
    if (roomInfos && roomInfos.roomInfos6) {
        roomInfo6 = roomInfos.roomInfos6
    }

    const navigate = useNavigate()
    const onReservation = (d_code, r_code) => {
        sessionStorage.setItem('d_code', d_code)
        sessionStorage.setItem('r_code', r_code)

        navigate('/reservation')
    }

    const slider1 = useRef()
    const slider2 = useRef()

    useEffect(() => {
        if (slider1.current && slider2.current) {
            slider1.current.slickGoTo(slider2.current.innerSlider.state.currentSlide)
            slider2.current.slickGoTo(slider1.current.innerSlider.state.currentSlide)
        }
    }, [])

    return (
        <div className="col-start-3 col-end-11 w-full h-1000">
            {roomInfos4 &&
                Object.values(roomInfos4).map((roomInfos, index) => <SliderComponent roomInfos={roomInfos} index={index} onReservation={onReservation} />)}
        </div>
    )
}

const SliderComponent = ({ roomInfos, index, onReservation }) => {
    const slider1 = useRef()
    const slider2 = useRef()
    const [centerPadding, setCenterPadding] = useState('40px')
    const extendedRoomInfos = [roomInfos.r_url[roomInfos.r_url.length - 1], ...roomInfos.r_url, roomInfos.r_url[0], roomInfos.r_url[1]]

    return (
        <Row key={index} className="w-full h-1000 mt-36">
            <Column className="w-1/2">
                <Slider
                    asNavFor={slider2.current}
                    ref={(slider) => (slider1.current = slider)}
                    beforeChange={(current, next) => {
                        slider2.current.slickGoTo(next)
                    }}
                >
                    {extendedRoomInfos.map((roomInfo, index) => (
                        <div key={index} className="h-112">
                            <img src={roomInfo} className="w-full h-full rounded-2xl" alt="" />
                        </div>
                    ))}
                </Slider>
                <Slider
                    asNavFor={slider1.current}
                    ref={(slider) => (slider2.current = slider)}
                    slidesToShow={3}
                    swipeToSlide={true}
                    focusOnSelect={true}
                    centerMode={true}
                    infinite={true}
                    lazyLoad={true}
                    centerPadding={centerPadding}
                    beforeChange={(current, next) => {
                        slider1.current.slickGoTo(next)
                    }}
                >
                    {extendedRoomInfos.map((roomInfo, index) => (
                        <>
                            <div key={index} className="h-32">
                                <img src={roomInfo} className="pl-1 pr-1 w-full h-full object-fill rounded-xl" alt="" />
                            </div>
                        </>
                    ))}
                </Slider>
            </Column>
            <Column className="w-1/2 pl-8">
                <Row className="text-3xl font-semibold mt-0">{roomInfos.r_name}</Row>
                <hr className="mt-4 border-b-2 border-b-black" />
                <Column>{roomInfos.r_description}</Column>
                <Box className="mt-8">
                    <Column>
                        <Row className="">
                            <Row className="mt-0 text-2xl">{parseInt(roomInfos.r_price).toLocaleString()}원</Row>
                            <Button
                                className="h-14 w-1/4"
                                onClick={() => {
                                    onReservation(roomInfos.d_code, roomInfos.r_code)
                                }}
                                style={{ backgroundColor: roomInfos.r_status == 'O' ? '#D9F99D' : '#adadad' }}
                                disabled={roomInfos.r_status == 'O' ? false : true}
                            >
                                {roomInfos.r_status == 'O' ? '예약하기' : '예약불가'}
                            </Button>
                        </Row>
                    </Column>
                </Box>
            </Column>
        </Row>
    )
}
