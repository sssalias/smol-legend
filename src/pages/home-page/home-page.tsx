import { MainLayout } from 'src/layouts'

const HomePage: React.FC = () => {
    return (
        <MainLayout>
            <div className='w-full'>
                <div className='w-full h-[700px] flex justify-center relative'>
                    <div className='top-24 w-3/4 absolute text-white'>
                        <h1 className='text-3xl font-semibold'>Окунись в Глубину Веков!</h1>
                    </div>
                    <img className='object-cover h-full w-full' src="https://sun9-1.userapi.com/impg/LsoAJY1Vj5-cvBApqkhtAGi_vicAmUpFwC0cRQ/m4P1RpofYTE.jpg?size=1920x1080&quality=95&sign=dea832d40e28343a6bfa61b55997a21e&type=album" alt="" />
                </div>
            </div>
        </MainLayout>
    )
}
export default HomePage