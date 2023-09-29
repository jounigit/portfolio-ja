/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import React, { FC } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Form, FormContainer, Input } from '../../styles/styles'
import { useCreateUser } from '../../services/apiService'

const schema = yup.object().shape({
  username: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
  role: yup.string().required(),
})

type Inputs = {
  username: string;
  email: string;
  password: string;
  role: string;
}

export const CreateUser: FC = () => {
  const {
    register, handleSubmit, watch, formState: { errors }, reset,
  } = useForm<Inputs>({ resolver: yupResolver(schema) })

  const { mutate, isSuccess } = useCreateUser()

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
      <h3>Create user </h3>
      <Form onSubmit={handleSubmit(onSubmit)}>

        {/* ............................................... */}
        <label>Username</label>
        <Input {...register('username')} required />
        {errors.username?.message}

        {/* ............................................... */}
        <label>Email</label>
        <Input {...register('email')} required />
        {errors.email?.message}

        {/* ............................................... */}
        <label>Password</label>
        <Input {...register('password')} required />
        {errors.password?.message}

        {/* ............................................... */}
        <label>Role</label>
        <Input {...register('role')} required />
        {errors.role?.message}

        <button type="submit">Lähetä</button>
      </Form>
    </FormContainer>
  )
}
