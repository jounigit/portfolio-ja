import axios, { AxiosResponse } from 'axios'
import { useMutation, UseMutationResult } from 'react-query'
import { api } from '../config/axiosConfig'

export const apiUrl = 'https://ja-api-ts.fly.dev/api'

export const getAll = async (url: string): Promise<AxiosResponse> => {
  const response = await axios.get(`${apiUrl}/${url}`)
  return response
}

export type IdUrlParams = {
  id: string
  url: string
}

export async function getOne<T>({ id, url }: IdUrlParams): Promise<T> {
  const { data } = await api.get(`/${url}/${id}`)
  return data
}

interface Params {
  email: string;
  password: string;
}

interface ILoginResponse {
  token: string;
  user: string;
  email: string;
  id: string;
  role: string;
}

export const login = async (payload: Params): Promise<ILoginResponse> => {
  const response = await api.post(
    '/login',
    {
      email: payload.email,
      password: payload.password,
    },
  )
  console.log('-Login: ', response.data)
  return response.data
}

export function useLogin():
UseMutationResult<unknown, unknown, Params, unknown> {
  return useMutation(
    login,
    {
      onSuccess: (data) => {
        console.log('-UseLogin: ', data)
        localStorage.setItem('user', JSON.stringify(data.user))
        localStorage.setItem('token', JSON.stringify(data.token))
      },
    },
  )
}

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

interface ParamsCreate {
  username: string;
  email: string;
  password: string;
  role: string;
}

interface ICreateUserResponse {
  token: string;
  user: string;
  email: string;
  id: string;
  role: string;
}

export const createUser = async (
  payload: ParamsCreate,
): Promise<ICreateUserResponse> => {
  const response = await api.post(
    '/user',
    {
      username: payload.username,
      email: payload.email,
      password: payload.password,
      role: payload.role,
    },
  )
  console.log('-Create user: ', response.data)
  return response.data
}

export function useCreateUser():
UseMutationResult<unknown, unknown, ParamsCreate, unknown> {
  return useMutation(
    createUser,
    {
      onSuccess: (data) => {
        console.log('-Created user: ', data)
      },
    },
  )
}
