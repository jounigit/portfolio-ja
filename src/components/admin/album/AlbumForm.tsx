import React, { useState } from 'react'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import ReactQuill from 'react-quill'
import { IAlbum, INewAlbum } from '../../../types'
import {
  Form, FormContainer, Input, Label,
} from '../../../styles/styles'
import { GreenButton } from '../../atoms/Button'
import 'react-quill/dist/quill.snow.css'

const schema = yup.object().shape({
  title: yup.string().required(),
  year: yup.number().required(),
  info: yup.string(),
  content: yup.string(),
  category: yup.string(),
})

    interface Inputs {
        title: string;
        year: number;
        info: string;
        content: string;
        category: string;
    }

    type Props = {
        handleData: (data: INewAlbum) => void
        album?: IAlbum
        formName: string;
    }

const AlbumForm = ({ handleData, album, formName }: Props): JSX.Element => {
  const [content, setContent] = useState(album?.content)
  const {
    register, handleSubmit, formState: { errors }, reset,
  } = useForm<Inputs>({ resolver: yupResolver(schema) })

  //* ************ handle submit *************/
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const cnt = content
    // console.log('FORM: ', data)
    // console.log('FORM quill state: ', cnt)
    // console.log({ data })

    const newAlbum = {
      title: data.title,
      info: data.info,
      year: data.year,
      content: cnt,
    }

    handleData(newAlbum)
    reset()
  }

  //* ************ handle content *************/
  const onChange = (value: string): void => {
    setContent(value)
  }

  //* ************ return *******************/
  return (
    <FormContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h3 style={{ color: 'white', marginTop: '20px' }}>{formName}</h3>

        {/* .................. */}
        <Label>Title</Label>
        <Input
          {...register('title')}
          required
          defaultValue={album?.title}
        />
        {errors.title?.message}

        {/* .................. */}
        <Label>Year</Label>
        <Input
          {...register('year')}
          defaultValue={album?.year}
          required
        />
        {errors.year?.message}

        {/* .................. */}
        <Label>Info</Label>
        <Input
          {...register('info')}
          defaultValue={album?.info}
        />

        {/* .................. */}
        <Label>Content</Label>
        <div style={{ background: 'white' }}>
          <ReactQuill
            theme="snow"
            value={content}
            onChange={onChange}
          />
        </div>

        <GreenButton type="submit">Lähetä</GreenButton>
      </Form>
    </FormContainer>
  )
}

export default AlbumForm
