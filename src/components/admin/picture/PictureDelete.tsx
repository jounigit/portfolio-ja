/* eslint-disable react/require-default-props */
/* eslint-disable no-unused-expressions */
import React, { useEffect } from 'react'
import toast from 'react-hot-toast'
import { useHistory } from 'react-router-dom'
import { useDeletePicture } from '../../../hooks/usePicture'
import { ErrorHandler } from '../../handlers'
import { SmallButton } from '../../atoms/Button'

type Props = {
  id: string,
  title: string,
  toggle?: () => void,
}

export const PictureDelete = ({ id, title, toggle }: Props): JSX.Element => {
  const { status, error, mutate: DeletePicture } = useDeletePicture()
  const history = useHistory()

  useEffect(() => {
    if (status === 'success') {
      toast.success('Picture deleted successfully.')
      toggle && toggle()
      history.push('/dashboard/pictures')
    }
  }, [history, status, toggle])

  if (status === 'error') {
    return <ErrorHandler error={(error as Error)} />
  }

  /** ************ handle remove mutation ********************** */
  const remove = (): void => {
    DeletePicture(id)
  }

  return (
    <>
      <h4>
        Haluatko poistaa kuvan -
        {' '}
        {title}
      </h4>
      <SmallButton
        color="red"
        onClick={() => remove()}
      >
        Poista kuva
      </SmallButton>
    </>
  )
}
