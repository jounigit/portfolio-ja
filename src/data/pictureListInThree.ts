import kuva1 from '../assets/kuva-1.jpg'
import kuva2 from '../assets/kuva-2.jpg'
import kuva3 from '../assets/talvi-1.jpg'
import { IImage } from './pictureData'

export const pictureListInThree: IImage[] = [
  {
    id: '1',
    title: 'Näkymä sieltä',
    imageUrl: kuva1,
    description: 'Lorem . . . taas tätä',
  },
  {
    id: '2',
    title: 'Näkymä tuolta',
    imageUrl: kuva2,
    description: 'Lorem ipsum . . .',
  },
  {
    id: '3',
    title: 'Näkymä täältä',
    imageUrl: kuva3,
    description: 'Lorem . . .',
  },
]
