import React, { useEffect } from 'react'
import toast from 'react-hot-toast'
import { useParams } from 'react-router-dom'
import { useAlbum, useUpdateAlbum } from '../../../hooks/useAlbums'
import { Button } from '../../atoms/Button'
import { useGoBack } from '../../../hooks/useGoBack'
import { ErrorHandler, LoadingHandler } from '../../handlers'
import { INewAlbum } from '../../../types'
import AlbumForm from './AlbumForm'

type AlbumParams = {
  id: string;
}

export const UpdateAlbum = (): JSX.Element => {
  const { id } = useParams<AlbumParams>()
  const {
    isLoading, data: CurrentAlbum, isError, error,
  } = useAlbum(id) // current album

  const { status: UpdateStatus, error: UpdateError, mutate } = useUpdateAlbum()
  const goBack = useGoBack()

  useEffect(() => {
    if (UpdateStatus === 'success') {
      toast.success('Album updated successfully.')
    }
  }, [UpdateStatus])

  /** ************ check current album  ******************* */
  if (isLoading) return <LoadingHandler />
  if (isError) return <ErrorHandler error={(error as Error)} />
  if (!CurrentAlbum) return <h3>No album.</h3>

  /** ************ handle update ************************ */
  if (UpdateStatus === 'error') {
    return <ErrorHandler error={(UpdateError as Error)} />
  }

  const handleData = (data: INewAlbum): void => {
    console.table([data])
    const newAlbum = data
    mutate({ id, newAlbum })
  }

  /** ************ return ************************ */
  return (
    <>
      <Button onClick={goBack}>...takaisin</Button>
      <AlbumForm
        handleData={handleData}
        album={CurrentAlbum}
        formName="PÄIVITÄ ALBUM"
      />
    </>
  )
}
