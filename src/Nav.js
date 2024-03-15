import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import getCookie from './api/cookie/getCookie'

export default function Nav() {
    const accessToken = getCookie('accessToken')

    const navigate = useNavigate()

    return (
        <div className="fixed w-full h-20 bg-purple-100 p-4">
            <div className="flex w-auto h-full flex-row justify-between items-center p-6">
                <Link to="/" onClick={() => (window.location.href = '/')}>
                    칼퇴시켜줄래
                </Link>
                <div className=" w-1/12 flex justify-between">
                    {!accessToken ? (
                        <>
                            <Link to="/login">로그인</Link>
                            <Link to="/login">메뉴</Link>
                        </>
                    ) : (
                        <>
                            <Link to="http://localhost:8080/logout">로그아웃</Link>
                            <Link to="/menu">메뉴</Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}
