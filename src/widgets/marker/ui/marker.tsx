import { YMapMarker } from 'src/shared/libs/ymaps'
import { LngLat } from '@yandex/ymaps3-types'
import { useDisclosure } from '@nextui-org/react'
import MarkerModal from 'src/widgets/marker/ui/marker-modal'

type Props = {
    coordinates: LngLat,
    title: string,
    body: string,
    img?: string,
}

const Marker: React.FC<Props> = props => {

    const {onOpen, onOpenChange, isOpen} = useDisclosure()

    return (
        <YMapMarker coordinates={props.coordinates}>
            <div>
                <button onClick={onOpen} className='bg-red-500 h-[50px] w-[50px] rounded-full text-white font-bold text-2xl hover:bg-red-400'>!</button>
                <MarkerModal title={props.title} body={props.body} img={props.img} onOpenChange={onOpenChange} isOpnen={isOpen}/>
            </div>
        </YMapMarker>
    )
}
export default Marker