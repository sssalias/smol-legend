import { Modal, ModalBody, ModalContent, ModalHeader, useDisclosure } from '@nextui-org/react'
import { MainLayout } from 'src/layouts'
import {YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker} from 'src/shared/libs/ymaps'
import type {LngLat, YMapLocationRequest} from 'ymaps3'

const LOCATION: YMapLocationRequest = {
    center: [31.82, 55.498],
    zoom: 17
  }

const coords: {coords: LngLat}[] = [
    {
        coords: [31.817881, 55.499470]
    },
    {
        coords: [31.9, 55.5]
    }
]

//   55.499460, 31.817913
const MapPage: React.FC = () => {

    const obj = useDisclosure()
    
    return (
        <MainLayout>
            <Modal size='4xl' isOpen={obj.isOpen} onOpenChange={obj.onOpenChange}>
                <ModalContent>
                    <ModalHeader>Объект?</ModalHeader>
                    <ModalBody>

                    </ModalBody>
                </ModalContent>
            </Modal>
            <div className='w-full h-screen'>
                <YMap location={LOCATION}>
                    <YMapDefaultSchemeLayer />
                    <YMapDefaultFeaturesLayer />
                    {coords.map(el => (
                        <YMapMarker coordinates={el.coords}>
                            <button onClick={obj.onOpen} className='bg-red-500 h-[50px] w-[50px] rounded-full text-white font-bold text-2xl hover:bg-red-400'>!</button>
                        </YMapMarker>
                    ))}
                </YMap>
            </div>
        </MainLayout>
    )
}
export default MapPage