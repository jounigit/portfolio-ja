import React, { FC } from 'react'
import { useParams } from 'react-router-dom'
import { useAlbumsData } from '../../../hooks/useAlbums'
import { AlbumDetailsAdmin } from './AlbumDetailsAdmin'

type AlbumParams = {
    id: string;
  }

export const AlbumAdmin: FC = () => {
  const { id } = useParams<AlbumParams>()
  const albumsData = useAlbumsData()

  const album = albumsData.find((a) => a.id === id)

  if (album === undefined) {
    return <div>Album is undefined.</div>
  }
  console.log('-Album admin: ', album)
  return (
    <AlbumDetailsAdmin
      album={album}
    />
  )
}
