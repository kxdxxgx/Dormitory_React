// RedirectPage.jsx

import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import getCookie from'../../api/cookie/getCookie'
import axios from 'axios'

const RedirectPage = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    // const accessToken = searchParams.get('access_token');
    let accessToken = null;
    let userid =null;
    useEffect(() => {
        accessToken = getCookie('accessToken')
        userid = getCookie('userid')
        if (accessToken) {
            // 토큰을 로컬 스토리지에 저장하거나 상태 관리 라이브러리를 사용하여 저장합니다.
            // localStorage.setItem('access_token', accessToken);
            // localStorage.setItem('userid',userid);
            // 토큰을 받은 후에 추가 작업을 수행할 수 있습니다.
            console.log('Access Token Received:', accessToken);
        }
    }, []);


    // useEffect(()=>{
    //     axios.get('http://localhost:8080/api/token', {
    //         withCredentials: true
    //     }).then(response => console.log(response.data));
    // },[])

    // function href(){
    //     document.location.href='http://localhost:3000';
    // }

    return (
        <div>
            {accessToken ? (
                <p>Access Token Received!</p>
            ) : (
                <p>No Access Token Received.</p>
            )}
            {/*{href()}*/}
        </div>
    );
};

export default RedirectPage;