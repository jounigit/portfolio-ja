/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import styled from 'styled-components'
import { IPicture, IUpdatePicture } from '../../../types'
import {
  Form, FormContainer, Input, InputWrapper, Label, TextArea,
} from '../../../styles/styles'
import { GreenButton } from '../../atoms/Button'

export const ImageDiv = styled.div`
    display: block;
    height: 150px;
    width: auto;
    margin-bottom: 20px;
    border: 1px solid red;
`

const schema = yup.object().shape({
  title: yup.string().required(),
  year: yup.number().required(),
})

type Inputs = {
    title: string;
    year: number;
    content?: string;
}

type Props = {
    handleData: (data: IUpdatePicture) => void
    picture?: IPicture
    formName: string;
  }

const PictureForm = ({ handleData, picture, formName }: Props): JSX.Element => {
  const {
    register, handleSubmit, formState: { errors }, reset,
  } = useForm<Inputs>({ resolver: yupResolver(schema) })

  const showPic = picture
    && <img src={picture.thumb} alt="" />
  //* ************ handle submit *************/
  console.log('FORM: ', picture && picture.title)

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const newPicture = {
      title: data.title,
      year: data.year,
      content: data.content,
    }

    handleData(newPicture)
    reset()
  }

  //* ************ return *******************/
  return (
    <FormContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {/* <ImageDiv> */}
        {showPic}
        {/* </ImageDiv> */}
        <h3 style={{ color: 'white', marginTop: '20px' }}>{formName}</h3>
        <InputWrapper>

          {/* ...................... */}
          <Label htmlFor="title">Title</Label>
          <Input
            {...register('title')}
            required
            defaultValue={picture?.title}
          />
          {errors.title?.message}

          {/* ...................... */}
          <Label htmlFor="year">Year</Label>
          <Input
            {...register('year')}
            defaultValue={picture?.year}
            required
          />
          {errors.year?.message}

          {/* ...................... */}
          <Label>Content</Label>
          <TextArea
            {...register('content')}
            defaultValue={picture?.content}
          />

          {/* ...................... */}
          <GreenButton type="submit" size={0.5}>Lähetä</GreenButton>

          {/* ...................... */}
        </InputWrapper>
      </Form>
    </FormContainer>
  )
}

export default PictureForm
