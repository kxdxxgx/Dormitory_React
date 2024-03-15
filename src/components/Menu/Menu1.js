import React, {useContext, useState} from 'react'
import Box from '../Common/Box'
import Row from '../Common/Row'
import Menu2 from './Menu2'
import Menu3 from './Menu3'
import Menu4 from './Menu4'
import { Link } from 'react-router-dom'
import MenuContext from "../../context/Menu_Context";
export default function Menu1() {
    const { images } = useContext(MenuContext)

    let memberInfo = null
    if (images && images.images1) {
        memberInfo = images.images1
        console.log('=========', memberInfo)
    }
    return (
        <div className="col-start-1 col-end-4 w-full h-auto pt-16 pl-16">
            <Box className="">
                <Link to="/menu/memberInfo">
                    <Row className="text-2xl font-medium">내 정보 관리</Row>
                </Link>
                <Row className="mt-8 border-b border-b-gray-300"></Row>
                <Link to="/menu/reservation">
                    <Row className="mt-8 text-2xl font-medium">예약 내역</Row>
                </Link>
                <Row className="mt-8 border-b border-b-gray-300"></Row>
                <Link to="/menu/visited">
                    <Row className="mt-6 text-2xl font-medium">방문 내역</Row>
                </Link>
                <Row className="mt-8 border-b border-b-gray-300"></Row>
                <Link to="/menu/review">
                    <Row className="mt-6 text-2xl font-medium">내가 쓴 리뷰</Row>
                </Link>
                <Row className="mt-8 border-b border-b-gray-300"></Row>
                {memberInfo && memberInfo.role === 'MASTER' && (
                <Link to="/menu/manager">
                    <Row className="mt-6 text-2xl font-medium">관리자페이지</Row>
                </Link>
                )}
            </Box>
        </div>
    )
}
