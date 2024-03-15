import React, { useState, useEffect } from 'react'
import HomeProvider from '../../provider/Home_Provider'
import Home1 from '../../components/Home/Home1'
import Home2 from '../../components/Home/Home2'
import Home3 from '../../components/Home/Home3'
import Home4 from '../../components/Home/Home4'
// import Search from '../../features/Search/Search'
import Search from '../../features/Search/container'
import axios from 'axios'
import Grid from '../../components/Common/Grid'
import getCookie from '../../api/cookie/getCookie'


export default function Home() {
    //
    // useEffect(() => {
    //     // getCookie 함수 내에서 쿠키 값을 가져와서 스토리지에 저장
    //     const accessToken = getCookie('accessToken');
    //
    //     // 스토리지에 저장
    //     // localStorage.setItem('accessToken', accessToken);
    //     console.log('제밟제발',accessToken)
    // }, []); // 빈 배열은 컴포넌트가 마운트될 때 한 번만 실행됨

    return (
        <>
            <HomeProvider>
                <Grid>
                    <Search />
                    {/* <Search2 /> */}
                    <Home1 />
                    <Home2 />
                    <Home3 />
                    <Home4 />
                </Grid>
            </HomeProvider>
        </>
    )
}
