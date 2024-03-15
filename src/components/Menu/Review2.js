import React, {useCallback, useContext, useEffect, useRef, useState} from 'react';
import Row from "../Common/Row";
import Column from "../Common/Column";
import ImageUploadComponent from "./ImageUploadComponent";
import FileUploadComponent from "./FileUploadComponent";
import MenuContext from "../../context/Menu_Context";
import Context from "../../context/Context";



export default function Review2() {
    const { images, setReviewdata, reviewdata } = useContext(MenuContext)
    const { searchdata } = useContext(Context)
    const [image, setImages] = useState(null)




    return (
      /*  <div className="col-start-3 col-end-11 w-full h-1000">
            <Row className="mt-1"><FileUploadComponent /></Row>
        </div>*/
        <div>
            <Column className="col-start-3 col-end-8 h-auto">
                <Row className="text-3xl font-semibold">리뷰 등록</Row>
                <Row className="mt-8 text-2xl">d_name</Row>
                <Row className="mt-4 text-lg">d_type</Row>
                <Row className="mt-8 text-lg">내용</Row>
                <input
                    className="border-solid border mt-4 border-gray-300 rounded-lg h-12 p-4 w-1/2 bg-white text-gray-900 font-normal text-base"
                    placeholder="내용을 입력하세요"/>
            </Column>
{/*            <button
                className="tab-size-4 user-select-text box-border flex items-center justify-center h-14 w-full rounded-md text-black font-bold text-lg mt-5"
                style={{backgroundColor: '#D9F99D'}}
                onClick={reviewWrite}
            >
                등록하기
            </button>*/}
        </div>

    );


}
