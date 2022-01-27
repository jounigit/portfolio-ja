import { hasArrOfObjWithProperty, IAlbum, isArray } from '../../types'

export function filterAlbums(albums: IAlbum[]): IAlbum[] {
  if (isArray(albums) && hasArrOfObjWithProperty(albums)) {
    return albums.sort((a, b) => b.year - a.year)
  }

  return albums
}
