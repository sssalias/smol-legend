import type { LngLat } from 'ymaps3'

interface IPoint {
    title: string,
    body: string,
    img?: string,
    coords: LngLat
}

export const points: IPoint[] = [
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
    },
    {
        title: 'Медвежья тропа',
        body: `Прямо возле входа в парк находится и вход на так называемую
«Медвежью тропу» или тропу в «царство медведя». Своим названием она
обязана свои расположением на болоте, где растет много черники, которую
так любят медведи. Правда, на тропе вы вряд-ли встретите настоящего
«косолапого», но зато можно испугаться пластикового макета медведя. По
всей тропе стоят напоминающие стенды с информацией о правилах
поведения при встрече с медведем. Пройдя по тропе можно полакомиться
черникой, но делать это нужно аккуратно, так как болото – очень опасное
место. Можно провалиться в болото под мох и вас уже никто не спасет.

Также не стоит забывать и о змеях. На территории тропы их довольно много,
так что не удивляйтесь встрече с «ползучими гадами».`,
        coords: [31.827862, 55.484018]
    },
    {
        title: 'Озеро Поганое и озеро Ржавец',
        body: `Озера крайне живописны и оборудованы для купания и рыбалки. На
озере Ржавец можно посидеть, любуясь на озеро и пожарить шашлыки, а
также поставить палатку и искупаться. Вода в озере чистая, дно песчаное.
Минус один – узкий пляж. Для любителей половить рыбу тоже отличные
новости – озеро в силу своей отдаленности и непопулярности богато рыбой,
без улова точно не останетесь.
Любой желающий может пройтись в деревню Городище и посмотреть,
как же сейчас там живут люди, в таком отдалении от всех.`,
        coords: [31.943823, 55.364815]
    },
    {
        title: `Корево`,
        body: `В самой деревне Корево практически нет ничего интересного, так что в
ней останавливаться мы не будем. Наша цель – кордон лесника. Данное
место я открыл чисто случайно, когда ездил с родителями посмотреть на
зубров. Мы остановились у последнего жилого дома спросить дорогу, а нам
на встречу вышли люди вместе с собаками и лошадьми! Нам рассказали о
том, какого здесь жить, разрешили покормить лошадей и
сфотографироваться с ними. Где же еще можно такое встретить?! Как
оказалось, хозяин данного дома – человек, который кормит тех самых зубров.
Данный человек очень отзывчивый и всегда поможет вам посмотреть на
зубров. Он сказал ехать за ним, и мы поехали кормить зубров.`,
        coords: [31.925449, 55.369330]
    }
]
