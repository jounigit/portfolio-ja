import React from 'react'
import { useDeleteAlbum } from '../../../hooks/useAlbums'
import { ErrorHandler } from '../../handlers'
import { RedButton } from '../../atoms/Button'

type Props = {
  id: string,
  title: string
}

export const AlbumDelete = ({ id, title }: Props): JSX.Element => {
  const { status, error, mutate: DeleteAlbum } = useDeleteAlbum()

  if (status === 'error') {
    return <ErrorHandler error={(error as Error)} />
  }
  /** ************ handle remove mutation ********************** */
  function remove(): void {
    DeleteAlbum(id)
  }

  return (
    <>
      <h3>
        Haluatko poistaa albumin -
        {' '}
        {title}
      </h3>
      <RedButton
        size={0.5}
        onClick={() => remove()}
      >
        Poista album
      </RedButton>
    </>
  )
}
