import { FC } from 'react'
import {
  IAlbumCatProps, useDeleteAlbumCategory,
} from '../../../hooks/useAlbums'
import { SmallButton } from '../../atoms/Button'

export const DeleteAlbumCategory: FC<IAlbumCatProps> = ({ id, catID })
: JSX.Element => {
  const { mutate } = useDeleteAlbumCategory()

  const handleClick = (): void => {
    const ids: IAlbumCatProps = {
      id,
      catID,
    }
    mutate(ids)
  }

  // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  return (
    <SmallButton
      onClick={handleClick}
      color="green"
    >
      poista nykyinen
    </SmallButton>
  )
}
