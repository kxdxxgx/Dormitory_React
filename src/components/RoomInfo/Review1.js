import React, { useContext } from 'react'
import RoomInfoContext from '../../context/RoomInfo_Context'
import Column from '../Common/Column'
import Row from '../Common/Row'
import Box from '../Common/Box'
import Slider from 'react-slick'

export default function Review1() {
    const PrevArrow = (props) => {
        const { className, onClick } = props
        return (
            <img
                width="64"
                height="64"
                className="absolute z-10 w-20 h-20"
                style={{ left: '5%', top: '30%' }}
                onClick={onClick}
                src="https://www.tripbtoz.com/images/main/bg_btn_mGroup2_arr.svg"
                alt="circled-chevron-right"
            />
        )
    }

    const NextArrow = (props) => {
        const { className, onClick } = props
        return (
            <img
                width="64"
                height="64"
                className="absolute z-10 w-20 h-20"
                style={{ right: '5%', bottom: '33%', transform: 'scaleX(-1)' }}
                onClick={onClick}
                src="https://www.tripbtoz.com/images/main/bg_btn_mGroup2_arr.svg"
                alt="circled-chevron-right"
            />
        )
    }

    const settings = {
        className: 'center',
        centerMode: true,
        centerPadding: '250px',
        lazyLoad: true,
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />
    }

    const { roomInfos } = useContext(RoomInfoContext)
    let reviewInfo = null
    if (roomInfos && roomInfos.roomInfos2) {
        reviewInfo = roomInfos.roomInfos2
        console.log('배열인지 확인', reviewInfo)
    }
    return (
        <div className="col-start-3 col-end-11 w-full h-1000 relative mt-8">
            <Slider {...settings}>
                {reviewInfo &&
                    reviewInfo.map((review, index) => (
                        <div key={index} className="p-4">
                            <Box className="p-6 px-4">
                                <Column>
                                    <Row className="mt-1">{review.r_name}</Row>
                                    <Row className="mt-1">{review.m_userid}</Row>
                                    <Row className="mt-1">{review.review_comment}</Row>
                                    <Row className="mt-1">{`★ ${review.review_score}`}</Row>
                                </Column>
                            </Box>
                        </div>
                    ))}
            </Slider>
        </div>
    )
}
