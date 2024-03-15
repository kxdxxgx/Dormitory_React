import React, { useCallback, useContext, useState } from 'react'
import RoomImageSlide from './RoomImageSlide'
import ImageContext from '../../context/Home_Context'
import Row from '../Common/Row'
import Column from '../Common/Column'
import Seoul from '../../assets/img/Seoul.jpg'
import Incheon from '../../assets/img/Incheon.jpeg'
import Gyeonggi from '../../assets/img/Gyeonggi.jpeg'
import Gangwon from '../../assets/img/Gangwon.jpg'
import Daejeon from '../../assets/img/Daejeon.jpg'
import Chungnam from '../../assets/img/Chungnam.jpg'
import Busan from '../../assets/img/Busan.jpg'
import Gyeongbuk from '../../assets/img/Gyeongbuk.jpg'
import Gyeongnam from '../../assets/img/Gyeongnam.jpg'
import Jeonbuk from '../../assets/img/Jeonbuk.jpeg'
import Jeonnam from '../../assets/img/Jeonnam.jpg'
import Gwangju from '../../assets/img/Gwangju.webp'
import Jeju from '../../assets/img/Jeju.jpg'
import Slider from 'react-slick'
import '../../assets/css/slick-theme.css'
import '../../assets/css/slick.css'
import Context from '../../context/Context'
import { useNavigate } from 'react-router-dom'

export default function Home2() {
    const [isVisible, setIsVisible] = useState(true)

    const PrevArrow = (props) => {
        const { className, onClick } = props
        return (
            !isVisible && (
                <img
                    width="64"
                    height="64"
                    className="absolute z-10  w-10 h-10 object-cover"
                    style={{ left: '1%', top: '61%' }}
                    onClick={() => {
                        onClick()
                        setIsVisible(true)
                    }}
                    src="https://www.tripbtoz.com/images/main/bg_btn_mGroup2_arr.svg"
                    alt="circled-chevron-right"
                />
            )
        )
    }

    const NextArrow = (props) => {
        const { className, onClick } = props
        return (
            isVisible && (
                <img
                    width="32"
                    height="32"
                    className="absolute z-10 w-10 h-10 object-cover"
                    style={{ right: '1%', bottom: '28%', transform: 'scaleX(-1)' }}
                    onClick={() => {
                        onClick()
                        setIsVisible(false)
                    }}
                    src="https://www.tripbtoz.com/images/main/bg_btn_mGroup2_arr.svg"
                    alt="circled-chevron-right"
                />
            )
        )
    }

    const settings = {
        // className: 'center',
        // centerMode: true,
        lazyLoad: true,
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 6,
        slidesToScroll: 6,
        arrows: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        // autoplay: true,
        // autoplaySpeed: 2000,
        // cssEase: "linear"
    }

    const { searchdata, setSearchdata } = useContext(Context)

    const navigate = useNavigate()

    const onRegionChange = useCallback(
        (region) => {
            setSearchdata((searchdata) => ({
                ...searchdata,
                keyword: region,
            }))
            navigate('/searchList')
        },
        [setSearchdata],
    )

    const region = ['서울', '인천', '경기', '강원', '충북,대전,세종', '충남', '부산,울산,대구', '경북', '경남', '전북',  '전남,광주', '제주']
    const images = [Seoul, Incheon, Gyeonggi, Gangwon, Daejeon, Chungnam, Busan, Gyeongbuk, Gyeongnam, Jeonbuk, Jeonnam, Jeju]

    return (
        <div className="col-start-2 col-end-12 w-full h-auto pt-16 pl-6 pr-6 mt-32 relative">
            <Row className="pl-3 text-3xl font-bold w-full">/국내 지역 여행지/</Row>
            <Slider {...settings}>
                {images &&
                    images.map((image, index) => (
                        <div
                            key={index}
                            className="pl-3 pr-3 w-44 h-44 mt-8"
                            onClick={() => {
                                onRegionChange(region[index])
                            }}
                        >
                            <img className="w-full h-full object-fit rounded-2xl" src={images[index]} alt="" />
                            <Row className="mt-2 text-sm">{region[index]}</Row>
                        </div>
                    ))}
            </Slider>
        </div>
    )
}
