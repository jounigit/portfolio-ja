/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import React, { FC } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Form, FormContainer, Input } from '../../styles/styles'
import { useCreateAlbum } from '../../hooks/useAlbums'

const schema = yup.object().shape({
  title: yup.string().required(),
  year: yup.number().required(),
})

type Inputs = {
    title: string;
    year: number;
    content: string;
}

export const CreateAlbum: FC = () => {
  const {
    register, handleSubmit, watch, formState: { errors }, reset,
  } = useForm<Inputs>({ resolver: yupResolver(schema) })

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const { mutate } = useCreateAlbum()

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log({ data })

    const newAlbum = {
      title: data.title,
      info: '',
      year: data.year,
      content: data.content,
    }

    mutate(newAlbum)
    reset()
  }

  console.log(watch('title'))

  return (
    <FormContainer>
      <p>LOMAKE</p>
      <Form onSubmit={handleSubmit(onSubmit)}>

        <label>Title</label>
        <Input {...register('title')} required />
        {errors.title?.message}

        <label>Year</label>
        <Input {...register('year')} required />
        {errors.year?.message}

        <label>Content</label>
        <Input {...register('content')} />

        <button type="submit">Lähetä</button>
      </Form>
    </FormContainer>
  )
}
