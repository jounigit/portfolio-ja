import React, { FC } from 'react'
import { useParams } from 'react-router-dom'
import { useAlbum } from '../../../hooks/useAlbums'
import { AlbumDetailsAdmin } from './AlbumDetailsAdmin'
import { useGoBack } from '../../../hooks/useGoBack'
import { ErrorHandler, LoadingHandler } from '../../handlers'
import { Button } from '../../atoms/Button'
import { AlbumPicturesById } from '../../picture/AlbumPicturesById'
import { usePictures } from '../../../hooks/usePicture'

type AlbumParams = {
    id: string;
}

export const AlbumAdmin: FC = () => {
  const { id } = useParams<AlbumParams>()
  const goBack = useGoBack()
  const pictures = usePictures()
  const {
    isLoading, isError, data: album, error,
  } = useAlbum(id)

  // :::::::::::::::::::::::::::::::::::::: //
  if (isError) return <ErrorHandler error={(error as Error)} />
  if (isLoading) return <LoadingHandler />
  if (!album) return <LoadingHandler />

  // :::::::::::: album pictures ::::::::::::::::: //
  const picIds = album.pictures as string[]
  const albumPics = AlbumPicturesById({ picIds, pictures })

  // :::::::::::::::::::::::::::::::::::::: //
  const showData = album
  && <AlbumDetailsAdmin album={album} pictures={albumPics} />

  return (
    <>
      <Button onClick={goBack}>...takaisin</Button>
      {showData && showData}
      { !showData && <p>No data yet.</p>}
    </>
  )
}
