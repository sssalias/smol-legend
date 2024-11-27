import { MainLayout } from 'src/layouts'
import { points } from 'src/pages/map-page/info'
import {YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer} from 'src/shared/libs/ymaps'
import { Marker } from 'src/widgets/marker'
import type {YMapLocationRequest} from 'ymaps3'

const LOCATION: YMapLocationRequest = {
    center: [31.82, 55.498],
    zoom: 12
  }




//   55.499460, 31.817913
const MapPage: React.FC = () => {
    return (
        <MainLayout>
            <div className='w-full h-screen'>
                <YMap location={LOCATION}>
                    <YMapDefaultSchemeLayer />
                    <YMapDefaultFeaturesLayer />
                    {points.map(point => <Marker title={point.title} body={point.body} coordinates={point.coords}/>)}
                </YMap>
            </div>
        </MainLayout>
    )
}
export default MapPage