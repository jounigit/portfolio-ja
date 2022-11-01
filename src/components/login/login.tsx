/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import React, { FC } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Form, FormContainer, Input } from '../../styles/styles'
import { useLogin } from '../../services/apiService'

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
})

type Inputs = {
    email: string;
    password: string;
}

export const Login: FC = () => {
  const {
    register, handleSubmit, watch, formState: { errors }, reset,
  } = useForm<Inputs>({ resolver: yupResolver(schema) })

  const { mutate, isSuccess } = useLogin()

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log({ data })

    const result = mutate(data)

    if (isSuccess) {
      console.log('- Mutate result: ', result)
    }
    reset()
  }

  console.log(watch('email'))

  return (
    <FormContainer>
      <p>LOGIN </p>
      <Form onSubmit={handleSubmit(onSubmit)}>

        <label>Email</label>
        <Input {...register('email')} required />
        {errors.email?.message}

        <label>Password</label>
        <Input {...register('password')} required />
        {errors.password?.message}

        <button type="submit">Lähetä</button>
      </Form>
    </FormContainer>
  )
}
