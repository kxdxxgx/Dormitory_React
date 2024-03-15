import React, { useState } from 'react';

const uploadCountLimit = 5; // 업로드 가능한 파일 개수
const FileUploadComponent = () => {
    const [fileCount, setFileCount] = useState(0); // 선택해서 가져오는 파일의 개수
    const [contentFiles, setContentFiles] = useState([]); // 업로드할 파일들의 배열

    // 파일 선택 버튼을 클릭하도록 하는 함수
    const triggerFileInput = () => {
        document.querySelector('#inputFile').click();
    };

    // 파일 변경 이벤트 핸들러
    const handleFileChange = (e) => {
        const files = e.target.files;
        fileCheck(files);
    };

    // 파일 드래그 핸들러
    const handleFileDragEnter = (e) => {
        e.stopPropagation();
        e.preventDefault();
        // 여기서 스타일 변경 가능
    };

    const handleFileDragOver = (e) => {
        e.stopPropagation();
        e.preventDefault();
    };

    const handleFileDrop = (e) => {
        e.stopPropagation();
        e.preventDefault();
        const files = e.dataTransfer.files;
        fileCheck(files);
    };

    // 파일 검사 및 추가 함수
    const fileCheck = (files) => {
        let filesArr = Array.from(files); // 객체에서 value에 해당되는 값을 뽑아서 배열로 반환

        if (fileCount + filesArr.length > uploadCountLimit) {
            alert('파일은 최대 ' + uploadCountLimit + '개까지 업로드 할 수 있습니다.');
            return;
        } else {
            setFileCount(fileCount + filesArr.length);
            setContentFiles([...contentFiles, ...filesArr]);
            // 나머지 파일 처리 로직...
        }
    };

    // 파일 삭제 함수
    const fileDelete = (index) => {
        const newFiles = [...contentFiles];
        newFiles.splice(index, 1);
        setContentFiles(newFiles);
        setFileCount(fileCount - 1);
    };

    return (
        <div>
            <div
                id="fileZone"
                onClick={triggerFileInput}
                onDragEnter={handleFileDragEnter}
                onDragOver={handleFileDragOver}
                onDrop={handleFileDrop}
                style={{ border: 'solid 2px #0B85A1' }} // 예시 스타일
            >
                {/* 나머지 UI 요소 */}
            </div>
            <input type="file" id="inputFile" onChange={handleFileChange} style={{ display: 'none' }} multiple />
            {/* 파일 리스트 렌더링 */}
            {contentFiles.map((file, index) => (
                <div key={index}>
                    {file.name} - {file.size} bytes
                    <button onClick={() => fileDelete(index)}> 삭제</button>
                </div>
            ))}
        </div>
    );
};

export default FileUploadComponent;