import { MainLayout } from 'src/layouts'
import {YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker} from 'src/shared/libs/ymaps'
import { Marker } from 'src/widgets/marker'
import type {LngLat, YMapLocationRequest} from 'ymaps3'

const LOCATION: YMapLocationRequest = {
    center: [31.82, 55.498],
    zoom: 17
  }

interface IPoint {
    title: string,
    body: string,
    img?: string,
    coords: LngLat
}

const points: IPoint[] = [
    {
        title: 'Деревня Боровики',
        body: `Деревня эта интересна тем, что в ней находится несколько интересных мест.
Сперва, после выхода с тропы, мы попадаем на Серафимовский источник. По
пути к нему мы можем наблюдать остатки военных укреплений, на которых
также можно фотографироваться, но делать это нужно крайне аккуратно,
ведь укрепления стали менее прочными и могут разрушиться. Пройдя дальше
можно увидеть колодец с питьевой святой водой. На колодце стоит банка для
пожертвований на развитие данного места и многие приезжие оставляют тут
свои деньги. Спустившись ниже нас встречает главная изюминка данного
места, то за чем многие сюда и идут – купель. Вода в ней проточная, течет
она из того же родника, которым питается колодец. Любой желающий может
окунуться в данной купели и почувствовать легкость в теле и идти дальше.
Также данное место интересно тем, что все эти постройки и мосточки для
ходьбы сделал сам, своими руками один из жителей данной деревни.
Выйдя из источника мы можем увидеть вырезанные из дерева сооружения,
одно из которых – «чертово колесо»! Все эти сооружения – работа того же
человека, который облагородил источник, о котором говорилось ранее.`,
        coords: [31.823583, 55.482398]
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
                    {points.map(point => <Marker title={point.title} body={point.body} coordinates={point.coords}/>)}
                </YMap>
            </div>
        </MainLayout>
    )
}
export default MapPage