/* eslint-disable @typescript-eslint/no-use-before-define */
import { useParams } from 'react-router-dom'
import React, { Fragment, useEffect } from 'react'
import toast from 'react-hot-toast'
import PictureForm from './PictureForm'
import { usePicture, useUpdatePicture } from '../../../hooks/usePicture'
import { useGoBack } from '../../../hooks/useGoBack'
import { ErrorHandler, LoadingHandler } from '../../handlers'
import { IUpdatePicture } from '../../../types'
import { Button } from '../../atoms/Button'

// type = PicId {
//   id: string;
// }

export const PictureUpdate = (): JSX.Element => {
  const { id } = useParams() as { id: string }
  // const id = params.id as string
  const {
    isLoading, data: CurrentPic, isError, error,
  } = usePicture(id) // current picture
  const { status, error: UpdateError, mutate } = useUpdatePicture()
  const goBack = useGoBack()

  useEffect(() => {
    if (status === 'success') {
      toast.success('Picture updated successfully.')
      goBack()
    }
  }, [goBack, status])

  /** ************ get current  ************************ */

  if (isLoading) return <LoadingHandler />
  if (isError) return <ErrorHandler error={(error as Error)} />

  const currentPicture = CurrentPic

  /** ************ handle update ************************ */
  if (status === 'error') {
    return <ErrorHandler error={(UpdateError as Error)} />
  }

  const handleData = (data: IUpdatePicture): void => {
    console.table([data])
    const newPicture = data
    mutate({ id, newPicture })
  }

  /** ************ return ************************ */
  return (
    <>
      <Button onClick={goBack}>...takaisin</Button>
      <PictureForm
        handleData={handleData}
        picture={currentPicture}
        formName="PÄIVITÄ KUVATIEDOT"
      />
    </>
  )
}
