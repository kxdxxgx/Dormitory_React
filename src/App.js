import { Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Login from './components/Login/Login'
import Home from './pages/Home/Home'
import SearchList from './pages/SearchList/SearchList'
import RoomInfo from './pages/RoomInfo/RoomInfo'
import Reservation from './pages/Reservation/Reservation'
import Search from './features/Search/Search'
import Menu from './pages/menu/Menu'
import BoxColor from './BoxColor'
import Provider from './provider/Provider'
import Payment from './components/Payment/Payment'
import RedirectPage from './components/Login/RedirectPage'
import page from './pages/page'
import KakaoMap from './api/Map/KakaoMap'
import { Provider as ReduxProvider } from 'react-redux'
import { useStore } from './features/useStore'

function App() {
    const store = useStore()
    return (
        <ReduxProvider store={store}>
            <Provider>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />}></Route>
                        <Route path="/searchList" element={<SearchList />} />
                        <Route path="/roomInfo" element={<RoomInfo />} />
                        <Route path="/reservation" element={<Reservation />} />
                        <Route path="/menu/*" element={<Menu />} />

                        {/* <Route path="/search" element={<Search />} /> */}
                        <Route path="/boxColor" element={<BoxColor />} />
                        <Route path="/payment" element={<Payment />} />
                        <Route path="/redirect" element={<RedirectPage />} />
                        <Route path="/map" element={<KakaoMap />} />
                    </Route>
                </Routes>
            </Provider>
        </ReduxProvider>
    )
}

export default App
