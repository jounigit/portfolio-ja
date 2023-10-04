import { FC } from 'react'
import { AlbumListItem } from './AlbumListItem'
import { AlbumListContainer } from './AlbumList.styles'
import { filterAlbums } from './filterAlbums'
import { IAlbum } from '../../types'

interface Props {
  albumsByCategory: IAlbum[]
}

export const AlbumListCategory: FC<Props> = ({ albumsByCategory })
: JSX.Element => {
  const filtered = filterAlbums(albumsByCategory && albumsByCategory)

  const mappedData = filtered.map((a) => (
    <AlbumListItem
      key={a.id}
      album={a}
    />
  ))

  return (
    <AlbumListContainer>
      { mappedData && mappedData }
    </AlbumListContainer>
  )
}
