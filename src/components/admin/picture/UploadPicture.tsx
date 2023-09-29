/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react'
import { useQuery } from 'react-query'
import { useHistory } from 'react-router-dom'
import FileUploader from './FileUploader'
import { IPicture } from '../../../types'
import api from '../../../config/axiosConfig'

export const UploadPicture = (): JSX.Element => {
  const { refetch } = useQuery<IPicture[]>({ queryKey: ['/pictures'] })
  const history = useHistory()

  // const baseURL = config.API_URL

  const handleFile = async (file: File) => {
    console.log({ file })
    const formData = new FormData()
    formData.append('image', file)

    try {
      const { data } = await api.post('upload', formData)
      console.log('UPLOAD RSEPONSE: ', data.data)
      refetch()
      history.push(`/dashboard/pictures/update/${data.data.id}`)
      // navigate(`/dashboard/pictures/update/${data.data.id}`)
    } catch (error) {
      console.error()
    }
  }

  // const handleData = (data: INewAlbum) => {
  //   mutate(data)
  // }

  /** ************ return ************************ */
  return (
    <FileUploader handleFile={handleFile} />
  )
}
