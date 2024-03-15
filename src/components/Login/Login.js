import SocialKakao from '../../api/Login/KakaoLogin'
import SocialKakao2 from '../../api/Login/KakaoLogin2'

import React from 'react'
import GoogleLogin from '../../api/Login/GoogleLogin'

import NaverLogin from '../../api/Login/NaverLogin'
import NaverLogin2 from '../../api/Login/NaverLogin2'
import Column from '../Common/Column'

export default function Login() {
    return (
        <Column className="pt-40 h-full flex flex-row justify-center items-center" style={{ testAlign: 'center' }}>
            <GoogleLogin />
            <br />
            <SocialKakao />
            <br />
            {/* <SocialKakao2 /><br /> */}
            <NaverLogin />
            <br />
            {/* <NaverLogin2 /> */}
        </Column>
    )
}
