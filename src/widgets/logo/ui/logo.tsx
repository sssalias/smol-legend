import { Link } from 'react-router-dom'
import logoPath from './Logo.png'

const Logo: React.FC = () => {
    return (
        <Link to='/'>
            <div className='w-[150px] h-[35px]'>
                <img className='object-cover w-full h-full' src={logoPath} alt='logo' />
            </div>
        </Link>
    )
}
export default Logo