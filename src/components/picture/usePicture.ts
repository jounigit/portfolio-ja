import {
//   QueryObserverSuccessResult,
  useQuery,
//   UseQueryResult,
} from 'react-query'
import api from '../../clientProvider/axiosConfig'
import { IPicture } from '../../types'

const getPictures = async (): Promise<IPicture[]> => {
  const { data } = await api.get('/pictures')
  console.log('# Use Pictures: ', data)
  return data
}

// const isFetchedWithSuccess = <TData, TError = unknown>(
//   query: UseQueryResult<TData, TError>,
// ): query is QueryObserverSuccessResult
// <TData, TError> => !query.isError
// && !query.isLoading && query.data !== undefined

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function usePictures() {
  const { data } = useQuery('pictures', getPictures)

  if (data !== undefined) {
    return data
  }
  const dataE = new Array<IPicture>()
  return dataE
}
