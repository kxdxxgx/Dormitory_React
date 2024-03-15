import Grid from '../../components/Common/Grid'
import RoomInfo1 from '../../components/RoomInfo/RoomInfo1'
import RoomInfo2 from '../../components/RoomInfo/RoomInfo2'
import RoomInfo3 from '../../components/RoomInfo/RoomInfo3'
import Search from '../../features/Search/container'
import RoomInfoProvider from '../../provider/RoomInfo_Provider'
import Review1 from '../../components/RoomInfo/Review1'
import UnderReview from '../../components/RoomInfo/UnderReview'

export default function RoomInfo() {
    return (
        <RoomInfoProvider>
            <Grid>
                <Search />
                <RoomInfo1 />
                <RoomInfo2 />
                <Review1 />
                <RoomInfo3 />
                <UnderReview />
            </Grid>
        </RoomInfoProvider>
    )
}
