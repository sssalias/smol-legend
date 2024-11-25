import { MainLayout } from 'src/layouts'
import {YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker} from 'src/shared/libs/ymaps'
import { Marker } from 'src/widgets/marker'
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
    return (
        <MainLayout>
            <div className='w-full h-screen'>
                <YMap location={LOCATION}>
                    <YMapDefaultSchemeLayer />
                    <YMapDefaultFeaturesLayer />
                    {coords.map(el => (
                        <YMapMarker coordinates={el.coords}>
                            <Marker coordinates={[31.817881, 55.499470]} title='Мост' body='Очень крутой мост'/>
                        </YMapMarker>
                    ))}
                </YMap>
            </div>
        </MainLayout>
    )
}
export default MapPage