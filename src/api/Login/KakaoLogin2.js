// import axios from 'axios'
// import KakaoLogin from 'react-kakao-login'

// import kakaoImg from '../../assets/img/kakaoLogin.png'

// const SocialKakao = () => {
//     const Kakao_CLIENT_ID = process.env.KAKAO_CLIENT_ID // 발급받은 클라이언트 아이디
//     const kakaoOnSuccess = async (data) => {
//         console.log(data)
//         const idToken = data.response.access_token // 엑세스 토큰 백엔드로 전달

//         // https://kapi.kakao.com/v2/user/me 로 id_token을 헤더에 삽입하여 Post 요청해 데이터를 얻습니다.
//         const kakaoResponse = await axios.post('https://kapi.kakao.com/v2/user/me', {
//             headers: {
//                 Authorization: `Bearer ${idToken}`,
//             },
//         })
//         idToken = kakaoResponse.data.id
//     }
//     const kakaoOnFailure = (error) => {
//         console.log(error)
//     }

//     return (
//         <>
//             <KakaoLogin token={Kakao_CLIENT_ID} onSuccess={kakaoOnSuccess} onFail={kakaoOnFailure}>
//                 <img src={kakaoImg} />
//             </KakaoLogin>
//         </>
//     )
// }

// export default SocialKakao
