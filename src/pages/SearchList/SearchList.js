import Grid from '../../components/Common/Grid'
import Search from '../../features/Search/container'
import SearchList1 from '../../components/SearchList/SearchList1'
import SearchList2 from '../../components/SearchList/SearchList2'
import Provider from '../../provider/Provider'

export default function SearchList() {
    return (
        <Provider className="grid grid-cols-12 h-auto">
            <Grid>
                <Search />
                <SearchList1 />
                <SearchList2 />
            </Grid>
        </Provider>
    )
}
