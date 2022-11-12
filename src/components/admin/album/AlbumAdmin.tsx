import React, { FC } from 'react'
import { useParams } from 'react-router-dom'
import { useAlbumById } from '../../../hooks/useAlbums'
import { AlbumDetailsAdmin } from './AlbumDetailsAdmin'

type AlbumParams = {
    id: string;
  }

export const AlbumAdmin: FC = () => {
  const { id } = useParams<AlbumParams>()
  const { isLoading, albumById } = useAlbumById(id)

  if (isLoading) return <h3>Loading ...</h3>

  if (albumById === undefined) return <h3>No album ...</h3>

  return (
    <AlbumDetailsAdmin
      album={albumById}
    />
  )
}
