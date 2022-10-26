import axios, { AxiosResponse } from 'axios'

// const apiUrl = 'http://localhost:3001/api'
export const apiUrl = 'https://ja-api-ts.herokuapp.com/api'

const getAll = async (url: string): Promise<AxiosResponse> => {
  const response = await axios.get(`${apiUrl}/${url}`)
  return response
}

export default { getAll }
