import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import Column from '../Common/Column'
import SearchListContext from '../../context/SearchList_Context'
import Context from '../../context/Context'
import KakaoMap from '../../api/Map/KakaoMap'
import x from '../../assets/img/x.png'

export default function HigherOrderRadioInputTest() {
    const DormitoryType = useMemo(() => ['All', 'HOTEL', 'MOTEL', 'PENSION', 'GUESTHOUSE'], [])
    const ReviewStar = useMemo(() => ['All', '★ 9 ~ 10', '★ 8 ~ 9', '★ 7 ~ 8', '★ 6 ~ 7', '★ 5 ~ 6'], [])
    const Star = useMemo(() => ['All', '10', '9', '8', '7', '6'])
    const [SelectedIndexes, setSelectedIndexes] = useState([0])
    const [SelectedIndexes2, setSelectedIndexes2] = useState([0])
    const { setSearchdata } = useContext(Context)

    for (let i = 0; i < SelectedIndexes.length; i++) {
        console.log(`SelectedIndexes ${i} : `, DormitoryType[SelectedIndexes[i]])
    }
    for (let i = 0; i < SelectedIndexes2.length; i++) {
        console.log(`SelectedIndexes2 ${i} : `, ReviewStar[SelectedIndexes2[i]])
    }

    useEffect(() => {
        console.log('SelectedIndexes', SelectedIndexes)
        console.log('SelectedIndexes2', SelectedIndexes2)
        const selectedTypes = SelectedIndexes.map((index) => DormitoryType[index])
        const selectedStars = SelectedIndexes2.map((index) => Star[index])
        console.log('selectedTypes', selectedTypes)
        console.log('selectedStars', selectedStars)

        setSearchdata((prevData) => ({
            ...prevData,
            type: selectedTypes,
            star: selectedStars
        }))
    }, [SelectedIndexes, SelectedIndexes2])

    const onChange = useCallback(
        (index) => () => {
            setSelectedIndexes((prevIndexes) => {
                if (index === 0) {
                    // 인덱스 0을 선택하는 경우, 모든 인덱스 선택 해제
                    return [0]
                } else if (prevIndexes.includes(0)) {
                    // 인덱스 0이 선택된 상태에서 다른 인덱스를 선택하는 경우, 인덱스 0 선택 해제 후 해당 인덱스 선택
                    return [index]
                } else if (prevIndexes.includes(index)) {
                    // 이미 선택된 인덱스인 경우 선택 해제
                    return prevIndexes.filter((selectedIndex) => selectedIndex !== index)
                } else {
                    // 선택되지 않은 인덱스를 추가 선택
                    return [...prevIndexes, index]
                }
            })
        },
        []
    )

    const onChange2 = useCallback(
        (index) => () => {
            setSelectedIndexes2((prevIndexes) => {
                if (index === 0) {
                    // 인덱스 0을 선택하는 경우, 모든 인덱스 선택 해제
                    return [0]
                } else if (prevIndexes.includes(0)) {
                    // 인덱스 0이 선택된 상태에서 다른 인덱스를 선택하는 경우, 인덱스 0 선택 해제 후 해당 인덱스 선택
                    return [index]
                } else if (prevIndexes.includes(index)) {
                    // 이미 선택된 인덱스인 경우 선택 해제
                    return prevIndexes.filter((selectedIndex) => selectedIndex !== index)
                } else {
                    // 선택되지 않은 인덱스를 추가 선택
                    return [...prevIndexes, index]
                }
            })
        },
        []
    )

    const radioInputs = useMemo(
        () =>
            DormitoryType.map((value, index) => (
                <label key={index} className="flex justify-start cursor-pointer label">
                    <input
                        type="checkbox"
                        name="DormitoryType"
                        className="mr-4 w-4 h-4"
                        checked={SelectedIndexes.includes(index)}
                        defaultValue={value}
                        onChange={onChange(index)}
                    />
                    <span className="label-text">{value}</span>
                </label>
            )),
        [DormitoryType, SelectedIndexes, onChange]
    )

    const radioInputs2 = useMemo(
        () =>
            ReviewStar.map((value, index) => (
                <label key={index} className="flex justify-start cursor-pointer label">
                    <input
                        type="checkbox"
                        name="ReviewStar"
                        className="mr-4 radio radio-primary"
                        checked={SelectedIndexes2.includes(index)}
                        defaultValue={value}
                        onChange={onChange2(index)}
                    />
                    <span className="label-text">{value}</span>
                </label>
            )),
        [ReviewStar, SelectedIndexes2, onChange2]
    )

    const [isModalOpen, setModalOpen] = useState(false)

    const openModal = () => setModalOpen(true)
    const closeModal = () => setModalOpen(false)

    return (
        <div className="col-start-2 col-end-5 w-full pt-16 flex flex-col items-center">
            <button onClick={openModal} className="relative w-2/3">
                <img src="https://static.yeogi.com/_next/static/media/thumbnail_map.74bb1588.png" className="" alt="" />
                <button
                    className="relative bottom-1/2 tab-size-4 user-select-text box-border flex items-center justify-center
                                        h-12 w-32 rounded-md text-black font-bold text-lg"
                    style={{ backgroundColor: '#DBDBFC', left: 'calc(50% - 64px)' }}
                >
                    지도 보기
                </button>
            </button>
            <Modal isOpen={isModalOpen} close={closeModal}>
                <div className="w-full flex flex-row justify-end mb-4">
                    <button className="" onClick={closeModal}>
                        <img src={x} className="w-6 h-6" alt="" />
                    </button>
                </div>
                <KakaoMap />
            </Modal>
            <Column className="items-start">
                <section className="">
                    <div className="text-lg font-semibold">PropertyType</div>
                    {/* {SelectedIndexes.map((index) => DormitoryType[index]).join(', ')} */}
                    <div className="flex p-2">
                        <div className="mt-4 text-base font-normal text-gray-500">{radioInputs}</div>
                    </div>
                </section>
                <section className="mt-4">
                    <div className="text-lg font-semibold">Star Rating</div>
                    {/* {SelectedIndexes2.map((index) => ReviewStar[index]).join(', ')} */}
                    <div className="flex p-2">
                        <div className="mt-4 text-base font-normal text-gray-500">{radioInputs2}</div>
                    </div>
                </section>
            </Column>
        </div>
    )
}

const Modal = ({ isOpen, close, children }) => {
    if (!isOpen) return null

    return (
        <div className="modal-overlay z-20" onClick={close}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}
