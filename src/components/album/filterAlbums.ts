import { IAlbum, hasPropertyArrObj, isArray } from '../../types'

export function filterAlbums(albums: IAlbum[]): IAlbum[] {
  if (isArray(albums) && hasPropertyArrObj(albums)) {
    return albums.sort((a, b) => b.year - a.year)
  }

  return albums
}
