import React, { useContext } from 'react'
import RoomInfoContext from '../../context/RoomInfo_Context'
import Column from '../Common/Column'
import Row from '../Common/Row'
import Box from '../Common/Box'

export default function UnderReview() {
    const { roomInfos } = useContext(RoomInfoContext)
    let reviewInfo = null
    if (roomInfos && roomInfos.roomInfos2) {
        reviewInfo = roomInfos.roomInfos2
        console.log('배열인지 확인', reviewInfo)
    }
    return (
        <div className="col-start-3 col-end-11 w-full h-1000">
            {reviewInfo &&
                reviewInfo.map((review, index) => (
                    <Box key={index} className="mt-8 w-1/2">
                        <Column>
                            <Row className="font-bold">{`${index + 1}.리뷰`}</Row>
                            <Row className="mt-1">{`방 이름 : ${review.r_name}`}</Row>
                            <Row className="mt-1">{`작성자ID : ${review.m_userid}`}</Row>
                            <Row className="mt-1">{`내용 : ${review.review_comment}`}</Row>
                            <Row className="mt-1">{`평점 : ${review.review_score}`}</Row>
                        </Column>
                        {review.fileInfo && review.fileInfo.length > 0 && (
                            <div
                                id="imageZone"
                                style={{
                                    width: '350px',
                                    height: '350px',
                                    border: '1px solid #ddd',
                                    overflow: 'auto', // overflow 속성 추가
                                    display: 'flex', // flexbox 사용하여 내부 컨텐츠 정렬
                                    flexWrap: 'wrap' // 내부 컨텐츠가 넘칠 경우 줄바꿈
                                }}
                            >
                                {review.fileInfo.map((e, i) => (
                                    <div key={i}>
                                        <img
                                            src={`http://localhost:8080/file/${e.review_stored}`}
                                            alt="미리보기"
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover' // 이미지 크기 조절을 위해 objectFit 속성 추가
                                            }}
                                        />
                                    </div>
                                ))}
                            </div>
                        )}
                    </Box>
                ))}
        </div>
    )
}
