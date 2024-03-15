import React from 'react'
import Grid from '../../components/Common/Grid'
import Reservation1 from '../../components/Reservation/Reservation1'
import Reservation2 from '../../components/Reservation/Reservation2'
import Reservation3 from '../../components/Reservation/Reservation3'
import Reservation4 from '../../components/Reservation/Reservation4'
import ReservationProvider from '../../provider/Reservation_Provider'
import ReservationModal from '../../components/Reservation/ReservationModal'
export default function SearchList() {
    return (
        <ReservationProvider>
            <Grid>
                <Reservation1 />
                <Reservation2 />
                {/* <Reservation3 />
                <Reservation4 /> */}
            </Grid>
        </ReservationProvider>
    )
}
