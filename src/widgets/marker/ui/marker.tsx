import { YMapMarker } from 'src/shared/libs/ymaps'
import { LngLat } from '@yandex/ymaps3-types'

type Props = {
    coordinates: LngLat,
    icon?: React.ReactNode,
    title?: string
}

const Marker: React.FC<Props> = props => {
    return (
        <YMapMarker coordinates={props.coordinates}>
            
        </YMapMarker>
    )
}
export default Marker