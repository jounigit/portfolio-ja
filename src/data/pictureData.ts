import kuva1 from '../assets/kuva-1.jpg'
import kuva2 from '../assets/kuva-2.jpg'
import kuva3 from '../assets/talvi-1.jpg'
import kuva4 from '../assets/kuva-4.jpg'
import kuva5 from '../assets/kuva-3.jpg'

export interface IImage {
  id: string;
  title: string;
  imageUrl: string;
  description: string;
}

export const pictureData: IImage[] = [
  {
    id: '1',
    title: 'Näkymä sieltä',
    imageUrl: kuva1,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: '2',
    title: 'Kuvio',
    imageUrl: kuva2,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: '3',
    title: 'Melkein Jynkänlahti',
    imageUrl: kuva3,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: '4',
    title: 'Baby ja kirkko',
    imageUrl: kuva4,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: '5',
    title: 'Laokoon',
    imageUrl: kuva5,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
]
