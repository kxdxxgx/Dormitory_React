import React, { useContext, useState } from 'react'
import Box from '../Common/Box'
import Row from '../Common/Row'
import Column from '../Common/Column'
import MenuContext from '../../context/Menu_Context'
import Input from '../Common/Input'

export default function Menu2() {
    const { images } = useContext(MenuContext)
    const [inputValue, setInputValue] = useState('')
    const [isValidDCode, setIsValidDCode] = useState(false)
    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    console.log('---------', images)
    let memberInfo = null
    if (images && images.images1) {
        memberInfo = images.images1
        console.log('=========', memberInfo)
    }
    const formatRegDate = (regdate) => {
        const date = new Date(regdate)
        const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`
        return formattedDate
    }

    const handleSubmit = async () => {
        // if(inputValue == null){
        //     alert('d_code를 입력하세요');
        //     return false;
        // }
        try {
            // API 요청을 통해 데이터베이스에 d_code 값이 있는지 확인
            const response = await fetch(`http://localhost:8080/menu/manager?userid=${memberInfo.userid}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ d_code: inputValue })
            })

            // const data = await response.json();
            //
            // if (data.isValid) {
            //     setIsValidDCode(true);
            //     // 서버로 데이터 전송
            //     // 예: 서버 API에 d_code를 전송하는 로직
            //     // fetch('/api/sendDCode', {
            //     //   method: 'POST',
            //     //   headers: {
            //     //     'Content-Type': 'application/json',
            //     //   },
            //     //   body: JSON.stringify({ d_code: inputValue }),
            //     // });
            // } else {
            //     setIsValidDCode(false);
            // }
        } catch (error) {
            console.error('Error:', error)
        }
        window.location.reload()
    }
    return (
        <div className="col-start-4 col-end-13 w-full h-auto pt-16 px-16">
            <Row className="text-4xl font-semibold">내 정보 관리</Row>
            {memberInfo && (
                <Box className="mt-12">
                    <Row className="text-2xl font-medium">회원 정보</Row>
                    <Row>
                        <Column className="w-full">
                            <Row className="text-base">유저아이디</Row>
                            <Input disabled={true} value={memberInfo.userid}></Input>
                        </Column>
                        <Column className="w-full">
                            <Row className="text-base">유저 정보</Row>
                            <Input disabled={true} value={memberInfo.username}></Input>
                        </Column>
                    </Row>
                    <Row>
                        <Column className="w-full">
                            <Row className="text-base">회원 가입 날짜</Row>
                            <Input disabled={true} value={formatRegDate(memberInfo.regdate)}></Input>
                        </Column>
                        <Column className="w-full">
                            <Row className="text-base">휴대폰 번호</Row>
                            <Input disabled={true} value={memberInfo.telno}></Input>
                        </Column>
                    </Row>
                    <Row>
                        <Column className="w-full">
                            <Row className="text-base">사업자 번호(숙소코드)</Row>
                            <input className="h-12 mt-1 pl-4" type="text" value={inputValue} onChange={handleChange} placeholder="d_code를 입력해주세요" />
                        </Column>
                        <Column className="w-full"></Column>
                    </Row>
                    <Row>
                        <Column className="w-full">
                            <button
                                className="tab-size-4 user-select-text box-border flex items-center justify-center h-14 w-full rounded-md text-black font-bold text-lg mt-5"
                                style={{ backgroundColor: '#D9F99D' }}
                                onClick={handleSubmit}
                            >
                                등록
                            </button>
                        </Column>
                        <Column className="w-full"></Column>
                    </Row>
                </Box>
            )}
        </div>
    )
}
