import { Divider } from '@nextui-org/react'
import { MainLayout } from 'src/layouts'

const HomePage: React.FC = () => {
    return (
        <MainLayout>
            <div className='w-full flex flex-col gap-14 items-center'>
                <div className='w-full h-[700px] flex justify-center relative'>
                    <div className='top-24 w-3/4 absolute text-white'>
                        <h1 className='text-3xl font-semibold'>Окунись в Глубину Веков!</h1>
                    </div>
                    <img className='object-cover h-full w-full' src="https://sun9-1.userapi.com/impg/LsoAJY1Vj5-cvBApqkhtAGi_vicAmUpFwC0cRQ/m4P1RpofYTE.jpg?size=1920x1080&quality=95&sign=dea832d40e28343a6bfa61b55997a21e&type=album" alt="" />
                </div>
                <div className='flex flex-col gap-2 items-center'>
                    <h2 className='text-3xl'>SmolLegend</h2>
                    <p className='w-3/4 text-center text-xl'>- это не просто экскурсия! Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, aut corporis tempore, laboriosam quis impedit odio provident cupiditate ullam unde maxime culpa minus quos quas voluptatum consequuntur? Amet, rerum ratione!</p>
                </div>
                <div className='w-3/4'>
                    <Divider orientation='horizontal'/>
                </div>
                <div className='w-3/4'>
                    <h2 className='w-full text-center font-semibold text-4xl'>Вас ждёт:</h2>
                    <div className='w-full flex justify-between'>

                    </div>
                </div>
            </div>
        </MainLayout>
    )
}
export default HomePage