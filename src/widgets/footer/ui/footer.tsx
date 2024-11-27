import { Link } from 'react-router-dom'
import { Logo } from 'src/widgets/logo'

const links = [
    {
        path: '/map',
        title: 'Карта'
    },
    {
        path: '/',
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

const Footer: React.FC = () => {
    return (
        <footer className='w-screen h-[200px] bg-gray-100'>
            <div className='w-2/3 mx-auto py-10'>
                <div className='flex justify-between'>
                    <div className='flex flex-col gap-6'>
                        <Logo/>
                        <nav className='flex gap-3'>
                            {links.map(link => <Link className='font-semibold underline-offset-4 hover:underline hover:text-gray-500' to={link.path}>{link.title}</Link>)}
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer