import axios, { AxiosResponse } from 'axios'

const apiUrl = 'http://localhost:3001/api'

const getAll = async (url: string): Promise<AxiosResponse> => {
  const response = await axios.get(`${apiUrl}/${url}`)
  return response
}

export default { getAll }
