import { hasPropertyArrObj, IPicture, isArray } from '../../types'

export function filterPictures(pictures: IPicture[]): IPicture[] {
  if (isArray(pictures) && hasPropertyArrObj(pictures)) {
    return pictures.sort((a, b) => b.year - a.year)
  }

  return pictures
}
