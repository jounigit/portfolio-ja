import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { AlbumListItem } from './AlbumListItem'
import { AlbumListContainer } from './AlbumList.styles'
import { filterAlbums } from './filterAlbums'
import { IAlbum } from '../../types'

interface Props {
  albumsByCategory: IAlbum[]
}

export const AlbumListCategory: FC<Props> = ({ albumsByCategory })
: JSX.Element => {
  console.log('## Albums: ', albumsByCategory && albumsByCategory)
  const filtered = filterAlbums(albumsByCategory && albumsByCategory)

  const mappedData = filtered?.map((a) => (
    <AlbumListItem
      key={a.id}
      id={a.id}
      title={a.title}
      slug={a.slug}
      info={a.info}
      pictures={a.pictures}
    />
  ))

  return (
    <AlbumListContainer>
      {/* <Link to="/admin/album/create-album">
        <h2>Uusi albumi</h2>
      </Link> */}
      { mappedData && mappedData }
    </AlbumListContainer>
  )
}
