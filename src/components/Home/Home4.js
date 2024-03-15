import React, { useContext, useState } from 'react'
import RoomImageSlide from './RoomImageSlide'
import ImageContext from '../../context/Home_Context'
import Row from '../Common/Row'
import Column from '../Common/Column'
import beach from '../../assets/img/beach.jpg'
import bird from '../../assets/img/bird.png'
import butterfly from '../../assets/img/butterfly.jpg'
import forest from '../../assets/img/forest.jpg'
import mountain from '../../assets/img/mountain.jpg'
import vine from '../../assets/img/vine.jpg'
import Slider from 'react-slick'
import '../../assets/css/slick-theme.css'
import '../../assets/css/slick.css'
import HomeContext from '../../context/Home_Context'
import { useNavigate } from 'react-router-dom'

export default function Home4() {
    const data = useContext(ImageContext)
    const settings = {
        // lazyLoad: true,
        dots: true,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 15000,
        autoplaySpeed: 0,
        cssEase: 'linear',
        pauseOnHover: true,
    }

    const navigate = useNavigate()
    const onRoomInfo = (d_code) => {
        sessionStorage.setItem('d_code', d_code)
        navigate('/roomInfo')
    }

    const { images } = useContext(HomeContext)
    const images3 = images.images3

    const imagess = [mountain, vine, beach, bird, butterfly, forest, mountain, vine, beach, bird, butterfly, forest]
    return (
        <div className="col-start-1 col-end-13 w-full h-auto pt-16 pl-6 pr-6 mt-24">
            <Row className="pl-3 text-3xl font-bold w-full">/얼리 체크인 숙소/</Row>
            <Slider {...settings}>
                {images3 &&
                    images3.map((image, index) => (
                        <div
                            key={index}
                            className="pl-3 pr-3 w-44 h-44 mt-2"
                            onClick={() => {
                                onRoomInfo(image.d_code)
                            }}
                        >
                            <img className="w-full h-full object-fit rounded-2xl mt-6" src={image.d_img} alt="" />
                            <Row className="mt-4 text-xs text-gray-500">{`★${image.d_star} - ${image.d_road}`}</Row>
                            <Row className="mt-2 text-lg font-bold">{image.d_name}</Row>
                            <Row className="mt-2 text-xl font-semibold">{`${image.min_r_price} ~`}</Row>
                        </div>
                    ))}
            </Slider>
        </div>
    )
}
