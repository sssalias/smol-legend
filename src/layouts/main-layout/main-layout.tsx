import { Footer } from 'src/widgets/footer'
import { Header } from 'src/widgets/header'

type Props = {
    children: React.ReactNode
}
const MainLayout: React.FC<Props> = props => {
    return (
        <div className='flex flex-col items-center'>
            <Header/>
            <main className='w-full'>
                {props.children}
            </main>
            <Footer/>
        </div>
    )
}
export default MainLayout