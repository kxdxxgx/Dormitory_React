import React from 'react'
import Home from './Home/Home'
import Menu from './menu/Menu'
import Reservation from './RoomInfo/RoomInfo'
import RoomInfo from './RoomInfo/RoomInfo'
import SearchList from './SearchList/SearchList'
import Provider from '../provider/Provider'

export default function page() {
    return (
        <Provider>
            <Home />
            <Menu />
            <Reservation />
            <RoomInfo />
            <SearchList />
        </Provider>
    )
}
