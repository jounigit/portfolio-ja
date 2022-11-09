/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import { yupResolver } from '@hookform/resolvers/yup'
import React, { FC } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import * as yup from 'yup'
import { Form, FormContainer, Input } from '../../../styles/styles'

const schema = yup.object().shape({
  title: yup.string().required(),
  year: yup.number().required(),
  info: yup.string(),
})

  type Inputs = {
      title: string;
      year: number;
      info: string;
      content: string;
  }

export const UpdateAlbum: FC = () => {
  const {
    register, handleSubmit, watch, formState: { errors }, reset,
  } = useForm<Inputs>({ resolver: yupResolver(schema) })

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log({ data })

    // const newAlbum = {
    //   title: data.title,
    //   info: data.info,
    //   year: data.year,
    //   content: data.content,
    // }

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

        <label>Info</label>
        <Input {...register('info')} />

        <label>Content</label>
        <Input {...register('content')} />

        <button type="submit">Lähetä</button>
      </Form>
    </FormContainer>
  )
}
