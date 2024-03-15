import React from 'react'
import Grid from '../../components/Common/Grid'
import Menu1 from '../../components/Menu/Menu1'
import Menu2 from '../../components/Menu/Menu2'
import Menu3 from '../../components/Menu/Menu3'
import Menu4 from '../../components/Menu/Menu4'
import MenuProvider from '../../provider/Menu_Provider'
import Layout2 from '../../Layout2'
import { Route, Routes } from 'react-router-dom'
import Menu5 from '../../components/Menu/Menu5'
import Menu6 from '../../components/Menu/Menu6'

export default function Menu() {
    return (
        <MenuProvider className="grid grid-cols-12 h-auto">
            <Grid>
                {/* <Menu1 />
                <Menu2 />
                <Menu3 />
                <Menu4 /> */}
                <Routes>
                    <Route path="/" element={<Layout2 />}>
                        <Route path="/memberInfo" element={<Menu2 />} />
                        <Route path="/Reservation" element={<Menu3 />} />
                        <Route path="/visited" element={<Menu4 />} />
                        <Route path="/review" element={<Menu5 />} />
                        <Route path="/manager" element={<Menu6 />} />
                    </Route>
                </Routes>
            </Grid>
        </MenuProvider>
    )
}
