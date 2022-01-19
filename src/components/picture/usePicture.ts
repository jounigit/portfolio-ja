import {
  useQuery, UseQueryResult,
} from 'react-query'
import api from '../../clientProvider/axiosConfig'
import { IPicture } from '../../types'

const getPictures = async (): Promise<IPicture[]> => {
  const { data } = await api.get('/pictures')
  return data
}

export function usePictures(): IPicture[] {
  const { isError, data } = useQuery('pictures', getPictures)

  if (isError) {
    throw new Error('Error fetching data.')
  }

  if (data !== undefined) {
    return data
  }
  const dataE = new Array<IPicture>()
  return dataE
}

export function usePicturesQuery(): UseQueryResult<IPicture[], unknown> {
  return useQuery('pictures', getPictures)
}
