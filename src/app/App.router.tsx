import { Route, Routes } from 'react-router-dom'
import { AboutPage } from 'src/pages/about-page'
import { HomePage } from 'src/pages/home-page'
import { MapPage } from 'src/pages/map-page'

interface IRoute {
    path: string
    page: React.ReactNode
}

const RouterData: IRoute[] = [
    {
        path: '/',
        page: <HomePage/>
    },
    {
        path: '/map',
        page: <MapPage/>
    },
    {
        path: '/about',
        page: <AboutPage/>
    }
]

const AppRouter: React.FC = () => {
    return (
        <Routes>
            {RouterData.map(el => <Route key={el.path} path={el.path} element={el.page}/>)}
        </Routes>
    )
}
export default AppRouter