import { Outlet } from 'react-router-dom'
import Nav from './Nav'
import Menu1 from './components/Menu/Menu1'

const Layout2 = () => {
    return (
        <>
            <Menu1 />
            <Outlet />
        </>
    )
}

export default Layout2