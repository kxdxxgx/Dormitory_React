import React, { useCallback, useContext, useEffect, useState } from 'react'
import Datepicker from 'react-tailwindcss-datepicker'
import 'tailwindcss/tailwind.css'
import './your-tailwind.css'
import styled from 'styled-components'
import Context from '../../context/Context'
import { format, addDays } from 'date-fns'
import { useLocation } from 'react-router-dom'

const Styled = styled.div`
    div > input {
        padding: 2rem;
        font-size: inherit;
        background: transparent;
        display: inline-block;
        height: auto;
        width: 19.5rem;
        overflow: hidden;
        text-overflow: ellipsis;
        border: none;
        padding: 0;
        color: #2d3748;
        caret-color: #48bb78;
        ::placeholder {
            /* Chrome, Firefox, Opera, Safari 10.1+ */
            color: #cbd5e0;
        }
        :focus::placeholder {
            color: #f7fafc;
        }
        outline: none;
        position: relative;
        left: 2rem;
        top: 0.25rem;
        z-index: 20;
        cursor: pointer;
        line-height: normal;
    }
`

export default function DataPicker({}) {
    // const { images, searchdata, setSearchdata } = useContext(HomeContext)
    const { images, searchdata, setSearchdata } = useContext(Context)
    // const { images, searchdata, setSearchdata } = useContext(SearchListContext)
    const { keyword, startDate, endDate, guest, type, star } = searchdata

    const today = new Date()
    const tomorrow = addDays(today, 1)

    // const [value, setValue] = useState({
    //     startDate: format(today, 'yyyy-MM-dd'),
    //     endDate: format(tomorrow, 'yyyy-MM-dd'),
    // })

    const location = useLocation()

    const [trigger, setTrigger] = useState(Date.now())

    const handleValueChange = (newValue) => {
        const newStartDate = new Date(newValue.startDate)
        const newEndDate = new Date(newValue.endDate)
        // console.log('newValue:', newValue)
        if (newStartDate.getTime() < today.getTime() || newEndDate.getTime() < today.getTime()) {
            alert('날짜를 오늘 날짜 이후로 설정해주세요.')
            setSearchdata((searchdata) => ({
                ...searchdata,
                startDate: format(today, 'yyyy-MM-dd'),
                endDate: format(tomorrow, 'yyyy-MM-dd')
            }))
            // 달력 컴포넌트의 인스턴스를 새로 만들기 위해 key값을 변경
            setTrigger(Date.now())
        } else {
            setSearchdata((searchdata) => ({
                ...searchdata,
                startDate: format(newStartDate, 'yyyy-MM-dd'),
                endDate: format(newEndDate, 'yyyy-MM-dd')
            }))
        }
    }

    // useEffect(() => {
    //     // console.log('value : ', value)
    //     onSearchChange(value)
    // }, [value])

    // const onSearchChange = useCallback(
    //     (value) => {
    //         setSearchdata((searchdata) => ({
    //             ...searchdata,
    //             startDate: value.startDate,
    //             endDate: value.endDate,
    //         }))
    //     },
    //     [value],
    // )

    useEffect(() => {
        console.log('onSearchChange3 : ', searchdata)
    }, [searchdata])

    return (
        <Styled>
            <Datepicker key={trigger} value={{ startDate, endDate }} onChange={handleValueChange} />
        </Styled>
    )
}
