import { Divider } from '@nextui-org/react'
import { MainLayout } from 'src/layouts'


import main1Img from 'src/pages/home-page/assets/main1.jpg'
import main2Img from 'src/pages/home-page/assets/main2.jpg'

const HomePage: React.FC = () => {
    return (
        <MainLayout>
            <div className='w-full flex flex-col gap-14 items-center mb-20'>
                <div className='w-full h-[700px] flex justify-center relative'>
                    <div className='top-24 w-2/3 absolute text-white'>
                        <h1 className='text-3xl font-semibold'>Окунись в Глубину Веков!</h1>
                        <h2 className='text-2xl'>Вместе с <span className='font-semibold'>SmolLegend!</span></h2>
                    </div>
                    <img className='object-cover h-full w-full' src="https://sun9-1.userapi.com/impg/LsoAJY1Vj5-cvBApqkhtAGi_vicAmUpFwC0cRQ/m4P1RpofYTE.jpg?size=1920x1080&quality=95&sign=dea832d40e28343a6bfa61b55997a21e&type=album" alt="" />
                </div>
                <div className='flex flex-col gap-2 items-center'>
                    <h2 className='text-3xl'>SmolLegend</h2>
                    <p className='w-2/3 text-center text-xl'>- это не просто экскурсия! Это целая история! Станьте частью истории вместе с нами!</p>
                </div>
                <div className='w-2/3'>
                    <Divider orientation='horizontal'/>
                </div>
                <div className='w-2/3 gap-4 flex flex-col items-center'>
                    <div className='w-full gap-4 flex justify-between'>
                        <span className='w-[50%] text-xl'>
                            Добрро пожаловать в SmolLegend - экскурсию по одному из самых красивых национальных парков России "Смоленское Поозерье"!
                            С нами, Вы сможете посетить невроятные места, узнать историю родного края!
                        </span>
                        <div className='w-[50%] h-[300px] bg-red-400 rounded-xl'>
                            <img className='object-cover w-full h-full rounded-md' src={main1Img} alt="err" />
                        </div>
                    </div>

                    <div className='w-full gap-4 flex justify-between'>
                        <div className='w-[50%] h-[300px] bg-red-400 rounded-xl'>
                            <img className='object-cover w-full h-full rounded-md' src={main2Img} alt="err" />
                        </div>
                        <span className='w-[50%] text-xl'>
                            Мы предоставляем возможность помимо оффлайн экскурсии, также посетить виртуальную в 2D формате. На карте вы сможете выбрать одну из отмеченных точек, чтобы узнать историю и описание отмеченного места.
                        </span>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}
export default HomePage