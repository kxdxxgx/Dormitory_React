import React from 'react'
import Box from './components/Common/Box'
import Grid from './components/Common/Grid'
import Row from './components/Common/Row'

export default function BoxColor() {
    return (
        <Grid>
            <div className="col-start-1 col-end-5 h-auto pt-8 w-4/5 m-auto">
                <Box>
                    <Row>bg-lime-100</Row>
                    <button className="tab-size-4 user-select-text box-border flex items-center justify-center 
    h-14 w-full rounded-md  bg-lime-100 text-black font-bold text-lg mt-5" style={{ backgroundColor: "" }}>
                        330,000원 결제하기
                    </button>
                    {/* 컴플리멘터리 (보색) : #FCE6FC */}
                    <Row>컴플리멘터리 (보색)</Row>
                    <button className="tab-size-4 user-select-text box-border flex items-center justify-center 
    h-14 w-full rounded-md text-black font-bold text-lg mt-5" style={{ backgroundColor: "#FCE6FC" }}>
                        330,000원 결제하기
                    </button>
                    {/* 아날로그 (유사색) : #FCFCE6, #EAFCF2*/}
                    <Row>아날로그 (유사색)</Row>
                    <button className="tab-size-4 user-select-text box-border flex items-center justify-center 
    h-14 w-full rounded-md text-black font-bold text-lg mt-5" style={{ backgroundColor: "#FCFCE6" }}>
                        330,000원 결제하기
                    </button>
                    <button className="tab-size-4 user-select-text box-border flex items-center justify-center 
    h-14 w-full rounded-md text-black font-bold text-lg mt-5" style={{ backgroundColor: "#EAFCF2" }}>
                        330,000원 결제하기
                    </button>
                    {/* 트라이아드 (삼각색) : #E6FCFC, #FCE6E6 */}
                    <Row>트라이아드 (삼각색)</Row>
                    <button className="tab-size-4 user-select-text box-border flex items-center justify-center 
    h-14 w-full rounded-md text-black font-bold text-lg mt-5" style={{ backgroundColor: "#E6FCFC" }}>
                        330,000원 결제하기
                    </button>
                    <button className="tab-size-4 user-select-text box-border flex items-center justify-center 
    h-14 w-full rounded-md text-black font-bold text-lg mt-5" style={{ backgroundColor: "#FCE6E6" }}>
                        330,000원 결제하기
                    </button>
                    {/* 스플릿 컴플리멘터리 (분할 보색) : #FCE6F3, #E6E6FC */}
                    <Row>스플릿 컴플리멘터리 (분할 보색)</Row>
                    <button className="tab-size-4 user-select-text box-border flex items-center justify-center 
    h-14 w-full rounded-md text-black font-bold text-lg mt-5" style={{ backgroundColor: "#FCE6F3" }}>
                        330,000원 결제하기
                    </button>
                    <button className="tab-size-4 user-select-text box-border flex items-center justify-center 
    h-14 w-full rounded-md text-black font-bold text-lg mt-5" style={{ backgroundColor: "#E6E6FC" }}>
                        330,000원 결제하기
                    </button>
                    {/* 테트라드 (사각색) : #FCF3E6,  */}
                    <Row>테트라드 (사각색)</Row>
                    <button className="tab-size-4 user-select-text box-border flex items-center justify-center 
    h-14 w-full rounded-md text-black font-bold text-lg mt-5" style={{ backgroundColor: "#FCF3E6" }}>
                        330,000원 결제하기
                    </button>
                    {/* 모노크로마틱 (단일색) : #D4E4A7, #F9FFD5 */}
                    <Row>모노크로마틱 (단일색)</Row>
                    <button className="tab-size-4 user-select-text box-border flex items-center justify-center 
    h-14 w-full rounded-md text-black font-bold text-lg mt-5" style={{ backgroundColor: "#D4E4A7" }}>
                        330,000원 결제하기
                    </button>
                    <button className="tab-size-4 user-select-text box-border flex items-center justify-center 
    h-14 w-full rounded-md text-black font-bold text-lg mt-5" style={{ backgroundColor: "#F9FFD5" }}>
                        330,000원 결제하기
                    </button>
                </Box>
            </div>

            <div className="col-start-5 col-end-9 h-auto pt-8 w-4/5 m-auto">
                <Box>
                    <Row>bg-lime-200</Row>
                    <button className="tab-size-4 user-select-text box-border flex items-center justify-center 
                    h-14 w-full rounded-md bg-lime-200 text-black font-bold text-lg mt-5" style={{ backgroundColor: "" }}>
                        330,000원 결제하기
                    </button>
                    {/* 컴플리멘터리 (보색) : #FCDBFC */}
                    <Row>컴플리멘터리 (보색)</Row>
                    <button className="tab-size-4 user-select-text box-border flex items-center justify-center 
                    h-14 w-full rounded-md text-black font-bold text-lg mt-5" style={{ backgroundColor: "#FCDBFC" }}>
                        330,000원 결제하기
                    </button>
                    {/* 아날로그 (유사색) : #FCFCDB, #DBFCF2 */}
                    <Row>아날로그 (유사색)</Row>
                    <button className="tab-size-4 user-select-text box-border flex items-center justify-center 
                    h-14 w-full rounded-md text-black font-bold text-lg mt-5" style={{ backgroundColor: "#FCFCDB" }}>
                        330,000원 결제하기
                    </button>
                    <button className="tab-size-4 user-select-text box-border flex items-center justify-center 
                    h-14 w-full rounded-md text-black font-bold text-lg mt-5" style={{ backgroundColor: "#DBFCF2" }}>
                        330,000원 결제하기
                    </button>
                    {/* 트라이아드 (삼각색) : #DBFCFC, #FCDBDB */}
                    <Row>트라이아드 (삼각색)</Row>
                    <button className="tab-size-4 user-select-text box-border flex items-center justify-center 
                    h-14 w-full rounded-md text-black font-bold text-lg mt-5" style={{ backgroundColor: "#DBFCFC" }}>
                        330,000원 결제하기
                    </button>
                    <button className="tab-size-4 user-select-text box-border flex items-center justify-center 
                    h-14 w-full rounded-md text-black font-bold text-lg mt-5" style={{ backgroundColor: "#FCDBDB" }}>
                        330,000원 결제하기
                    </button>
                    {/* 스플릿 컴플리멘터리 (분할 보색) : #FCDBF3, #DBDBFC */}
                    <Row>스플릿 컴플리멘터리 (분할 보색)</Row>
                    <button className="tab-size-4 user-select-text box-border flex items-center justify-center 
                    h-14 w-full rounded-md text-black font-bold text-lg mt-5" style={{ backgroundColor: "#FCDBF3" }}>
                        330,000원 결제하기
                    </button>
                    <button className="tab-size-4 user-select-text box-border flex items-center justify-center 
                    h-14 w-full rounded-md text-black font-bold text-lg mt-5" style={{ backgroundColor: "#DBDBFC" }}>
                        330,000원 결제하기
                    </button>
                    {/* 테트라드 (사각색) : #FCF3DB */}
                    <Row>테트라드 (사각색)</Row>
                    <button className="tab-size-4 user-select-text box-border flex items-center justify-center 
                    h-14 w-full rounded-md text-black font-bold text-lg mt-5" style={{ backgroundColor: "#FCF3DB" }}>
                        330,000원 결제하기
                    </button>
                    {/* 모노크로마틱 (단일색) : #C7E0A1, #F3FFD1 */}
                    <Row>모노크로마틱 (단일색)</Row>
                    <button className="tab-size-4 user-select-text box-border flex items-center justify-center 
                    h-14 w-full rounded-md text-black font-bold text-lg mt-5" style={{ backgroundColor: "#C7E0A1" }}>
                        330,000원 결제하기
                    </button>
                    <button className="tab-size-4 user-select-text box-border flex items-center justify-center 
                    h-14 w-full rounded-md text-black font-bold text-lg mt-5" style={{ backgroundColor: "#F3FFD1" }}>
                        330,000원 결제하기
                    </button>
                </Box>
            </div>


            <div className="col-start-9 col-end-13 h-auto pt-8 w-4/5 m-auto">
                <Box>
                    <Row>bg-lime-300</Row>
                    <button className="tab-size-4 user-select-text box-border flex items-center justify-center 
h-14 w-full rounded-md bg-lime-300 text-black font-bold text-lg mt-5" style={{ backgroundColor: "" }}>
                        330,000원 결제하기
                    </button>
                    {/* 컴플리멘터리 (보색) : #FCD1FC */}
                    <Row>컴플리멘터리 (보색)</Row>
                    <button className="tab-size-4 user-select-text box-border flex items-center justify-center 
h-14 w-full rounded-md text-black font-bold text-lg mt-5" style={{ backgroundColor: "#FCD1FC" }}>
                        330,000원 결제하기
                    </button>
                    {/* 아날로그 (유사색) : #FCFCDB, #D1FCF2 */}
                    <Row>아날로그 (유사색)</Row>
                    <button className="tab-size-4 user-select-text box-border flex items-center justify-center 
h-14 w-full rounded-md text-black font-bold text-lg mt-5" style={{ backgroundColor: "#FCFCDB" }}>
                        330,000원 결제하기
                    </button>
                    <button className="tab-size-4 user-select-text box-border flex items-center justify-center 
h-14 w-full rounded-md text-black font-bold text-lg mt-5" style={{ backgroundColor: "#D1FCF2" }}>
                        330,000원 결제하기
                    </button>
                    {/* 트라이아드 (삼각색) : #D1FCFC, #FCD1D1 */}
                    <Row>트라이아드 (삼각색)</Row>
                    <button className="tab-size-4 user-select-text box-border flex items-center justify-center 
h-14 w-full rounded-md text-black font-bold text-lg mt-5" style={{ backgroundColor: "#D1FCFC" }}>
                        330,000원 결제하기
                    </button>
                    <button className="tab-size-4 user-select-text box-border flex items-center justify-center 
h-14 w-full rounded-md text-black font-bold text-lg mt-5" style={{ backgroundColor: "#FCD1D1" }}>
                        330,000원 결제하기
                    </button>
                    {/* 스플릿 컴플리멘터리 (분할 보색) : #FCD1F3, #D1D1FC */}
                    <Row>스플릿 컴플리멘터리 (분할 보색)</Row>
                    <button className="tab-size-4 user-select-text box-border flex items-center justify-center 
h-14 w-full rounded-md text-black font-bold text-lg mt-5" style={{ backgroundColor: "#FCD1F3" }}>
                        330,000원 결제하기
                    </button>
                    <button className="tab-size-4 user-select-text box-border flex items-center justify-center 
h-14 w-full rounded-md text-black font-bold text-lg mt-5" style={{ backgroundColor: "#D1D1FC" }}>
                        330,000원 결제하기
                    </button>
                    {/* 테트라드 (사각색) : #FCF3DB */}
                    <Row>테트라드 (사각색)</Row>
                    <button className="tab-size-4 user-select-text box-border flex items-center justify-center 
h-14 w-full rounded-md text-black font-bold text-lg mt-5" style={{ backgroundColor: "#FCF3DB" }}>
                        330,000원 결제하기
                    </button>
                    {/* 모노크로마틱 (단일색) : #B9D58C, #EDFFCC */}
                    <Row>모노크로마틱 (단일색)</Row>
                    <button className="tab-size-4 user-select-text box-border flex items-center justify-center 
h-14 w-full rounded-md text-black font-bold text-lg mt-5" style={{ backgroundColor: "#B9D58C" }}>
                        330,000원 결제하기
                    </button>
                    <button className="tab-size-4 user-select-text box-border flex items-center justify-center 
h-14 w-full rounded-md text-black font-bold text-lg mt-5" style={{ backgroundColor: "#EDFFCC" }}>
                        330,000원 결제하기
                    </button>
                </Box>
            </div>
        </Grid>


    )
}