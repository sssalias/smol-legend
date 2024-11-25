import { Link } from 'react-router-dom'
import { Logo } from 'src/widgets/logo'

const links = [
    {
        path: '/map',
        title: 'Карта'
    },
    {
        path: '/about',
        title: 'О нас'
    },
    {
        path: '/',
        title: 'Медиа'
    },
    {
        path: '/',
        title: 'Сотрудничество'
    }
]

const Header: React.FC = () => {
    return (
        <header className='fixed w-screen bg-white z-[10]'>
            <div className='mx-auto flex justify-between items-center w-2/3 h-[100px]'>
                <Logo/>
                <nav className='flex gap-3'>
                    {links.map(link => <Link className='font-semibold underline-offset-4 hover:underline hover:text-gray-500' to={link.path}>{link.title}</Link>)}
                </nav>
            </div>
        </header>
    )
}
export default Header