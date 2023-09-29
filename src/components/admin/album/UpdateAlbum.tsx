/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import { yupResolver } from '@hookform/resolvers/yup'
import React, { FC } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useHistory, useParams } from 'react-router-dom'
import * as yup from 'yup'
import { useAlbumById, useUpdateAlbum } from '../../../hooks/useAlbums'
import { Form, FormContainer, Input } from '../../../styles/styles'
import { GreenButton } from '../../atoms/Button'
// import { SelectAlbumCategory } from './SelectAlbumCategory'

const schema = yup.object().shape({
  title: yup.string().required(),
  year: yup.number().required(),
  info: yup.string(),
  content: yup.string(),
})

  interface Inputs {
      title: string;
      year: number;
      info: string;
      content: string;
  }

  interface InputProps {
    albumData: Inputs;
  }
  type AlbumParams = {
    id: string;
  }

export const UpdateAlbum: FC<InputProps> = () => {
  const {
    register, handleSubmit, watch, formState: { errors },
  } = useForm<Inputs>({ resolver: yupResolver(schema) })

  const { mutate } = useUpdateAlbum()
  const history = useHistory()

  const goBack = (): void => {
    history.goBack()
  }

  // ::::::: get album by id ::::::::::::::::::::::::::
  const { id } = useParams<AlbumParams>()
  const { isLoading, albumById } = useAlbumById(id)

  if (isLoading) return <h3>Loading ...</h3>

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log({ data })

    const newAlbum = {
      title: data.title,
      info: data.info,
      year: data.year,
      content: data.content,
    }

    mutate({ id, newAlbum })
    goBack()
  }

  console.log(watch('title'))

  return (
    <>
      <h2>Päivitä</h2>
      <FormContainer>
        <Form onSubmit={handleSubmit(onSubmit)}>

          <label htmlFor="title">Title</label>
          <Input
            {...register('title')}
            required
            defaultValue={albumById?.title}
          />
          {errors.title?.message}

          <label htmlFor="year">Year</label>
          <Input
            {...register('year')}
            defaultValue={albumById?.year}
            required
          />
          {errors.year?.message}

          <label htmlFor="info">Info</label>
          <Input
            {...register('info')}
            defaultValue={albumById?.info}
          />

          <label htmlFor="content">Content</label>
          <Input
            {...register('content')}
            defaultValue={albumById?.content}
          />

          <GreenButton type="submit">Lähetä</GreenButton>
        </Form>
      </FormContainer>
    </>
  )
}
