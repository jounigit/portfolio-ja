import { useQuery, UseQueryResult } from 'react-query'
import api from '../config/axiosConfig'
import { ICv } from '../types'

const getCv = async (): Promise<ICv[]> => {
  const { data } = await api.get('/cv')
  return data
}

export function useCv(): UseQueryResult<ICv[], unknown> {
  return useQuery('cv', getCv)
}
