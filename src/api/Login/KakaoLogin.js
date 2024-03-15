import kakaoLogin from '../../assets/img/kakaoLogin.png'

const SocialKakao = () => {
    const Kakao_CLIENT_ID = process.env.KAKAO_CLIENT_ID // 발급받은 클라이언트 아이디
    // const Rest_api_key = 'REST API KEY' //REST API KEY
    // const redirect_uri = 'http://localhost:3000/auth' //Redirect URI
    // const code = new URL(window.location.href).searchParams.get('code')
    // oauth 요청 URL
    // const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Kakao_CLIENT_ID}&redirect_uri=http://localhost:3000/auth&response_type=code`
    const kakaoURL = 'http://localhost:8080/api/oauth2/authorization/kakao'
    const handleLogin = () => {
        window.location.href = kakaoURL
    }
    return (
        <>
            <button onClick={handleLogin}>
                <img src={kakaoLogin} />
            </button>
        </>
    )
}
export default SocialKakao
