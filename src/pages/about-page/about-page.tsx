import { MainLayout } from 'src/layouts'
import {Image} from '@nextui-org/react'

import danek from 'src/pages/about-page/assets/danek.png'
import fedor from 'src/pages/about-page/assets/fedor.png'
import gleb from 'src/pages/about-page/assets/gleb.png'

const AboutPage = () => {
    return (
        <MainLayout>
            <div className='w-2/3 pt-4  mx-auto flex flex-col items-center gap-4'>
                <h1 className='font-semibold text-3xl'>Наша команда</h1>
                <div className='flex justify-between'>
                    <Image src={gleb} height={350} width={300}/>
                    <Image src={fedor} height={500} width={300}/>
                    <Image src={danek} height={350} width={300}/>
                </div>
            </div>
        </MainLayout>
    )
}

export default AboutPage