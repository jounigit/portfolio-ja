import axios, { AxiosResponse } from 'axios'
import { useMutation, UseMutationResult } from 'react-query'
import { api } from '../config/axiosConfig'

// const apiUrl = 'http://localhost:3001/api'
export const apiUrl = 'https://ja-api-ts.herokuapp.com/api'

// let token = null
// let config = Array<string>

// function setToken(newToken: string): void {
//   token = `Bearer ${newToken}`
// config = {
//   headers: { Authorization: token },
// }
// }

export const getAll = async (url: string): Promise<AxiosResponse> => {
  const response = await axios.get(`${apiUrl}/${url}`)
  return response
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

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
// export function authHeader() {
//   const user = JSON.parse(localStorage.getItem('user') || '')
//   const token = JSON.parse(localStorage.getItem('token') || '')
//   console.log('--- auth headers', user, ' token: ', token)

//   if (user && token) {
//     return { Authorization: `Bearer ${token}` }
//   }
//   return {}
// }
