import { IPicture, isPictureArray } from '../../types'
import { getPicsByIds } from './sharePictures'

type Props = {
    picIds: string[]
    pictures: IPicture[]
}

export const AlbumPicturesById = ({ picIds, pictures }: Props): IPicture[] => {
  const albumPicsArr = getPicsByIds(picIds, pictures)

  return isPictureArray(albumPicsArr)
    ? albumPicsArr : new Array<IPicture>()
}
