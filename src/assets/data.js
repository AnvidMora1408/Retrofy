import { cancion1,cancion2,cancion3,cancion4,cancion5,cancion6 } from "../songs";
import { BillieJean,TakeOnMe, DancingQueen, Superstition, StayinAlive, IWantYouBack } from "../img";

const retroSongs = [
    {
      id: 1,
      image: Superstition,
      title: "Superstition",
      artist: 'Stevie Wonder',
      audio: cancion1,
    },
    {
      id: 2,
      image: BillieJean,
      title: 'Billie Jean',
      artist: 'Michael Jackson',
      audio: cancion2,
    },
    {
      id: 3,
      image: TakeOnMe,
      title: 'Take On Me',
      artist: 'a-ha',
      audio: cancion3,
    },
    {
      id: 4,
      image: DancingQueen,
      title: 'Dancing Queen',
      artist: 'ABBA',
      audio: cancion4,
    },
    {
      id: 5,
      image: StayinAlive,
      title: 'Stayin’ Alive',
      artist: 'Bee Gees',
      audio: cancion5,
    },
    {
      id: 6,
      image: IWantYouBack,
      title: 'I Want You Back',
      artist: 'Jackson 5',
      audio: cancion6,
    }
];
export default retroSongs;