import {
  useMutation,
  UseMutationResult,
  useQuery,
  UseQueryResult,
} from 'react-query'
import { INewAlbum, IAlbum } from '../types'
import api
// { apiAuth }
  from '../config/axiosConfig'
// import { authHeader } from '../services/apiService'
// import { queryClient } from '../clientProvider'

const getAlbums = async (): Promise<IAlbum[]> => {
  const { data } = await api.get('/albums')
  return data
}

export const getAlbum = async (id: string | undefined): Promise<IAlbum> => {
  if (typeof id === 'undefined') {
    Promise.reject(new Error('Invalid id'))
  }
  const { data } = await api.get(`/albums/${id}`)
  // console.log('# use Album: ', data)
  return data
}

// export const createAlbum = async ({ title, year, content }: INewAlbum) => {

export const createAlbum = async (newAlbum: INewAlbum): Promise<unknown> => {
  // eslint-disable-next-line max-len
  const response = await api.post<unknown>('/albums', newAlbum)
  console.log('-Create album: ', response.data)

  return response.data
}

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// TÄMÄ ON KESKEN !!!!!!!!!!!!!!!!!!!!!!!!!!!!!

export function useCreateAlbum():
UseMutationResult<unknown, unknown, INewAlbum, unknown> {
  return useMutation(createAlbum)
}

export function useAlbums(): UseQueryResult<IAlbum[], unknown> {
  return useQuery(['albums'], getAlbums)
}

export function useAlbum(id: string | undefined)
: UseQueryResult<IAlbum, unknown> {
  return useQuery(['album', id], () => getAlbum(id), {
    enabled: Boolean(id),
  })
}

export function useAlbumsData(): IAlbum[] {
  const { isError, data } = useQuery('albums', getAlbums)

  if (isError) {
    throw new Error('Error fetching data.')
  }

  if (data !== undefined) {
    return data
  }
  const emptyData = new Array<IAlbum>()
  return emptyData
}

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
export const useAlbumsByCategory = (slug: string): {
  isLoading: boolean;
  albumsByCategory: IAlbum[] | undefined;
} => {
  const {
    isLoading, isError, isSuccess, data,
  } = useAlbums()

  let albumsByCategory

  if (isError) {
    throw new Error('Error fetching data.')
  }

  if (isSuccess && data !== undefined) {
    albumsByCategory = data
      .filter((a) => (a.category?.slug === slug))
  }

  return {
    isLoading,
    albumsByCategory,
  }
}

// export function useCreateAlbum(newAlbum: INewAlbum):
// UseMutationResult<unknown, unknown, void, unknown> {
//   return useMutation(
//     () => createAlbum(newAlbum),
//     {
//       onSuccess: () => {
//         queryClient.invalidateQueries(['albums'])
//       },
//     },
//   )
// }

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
// export const useCreateAlbum1 = () => useMutation(
//   (newAlbum) => axios.post(`/posts/${id}/comments`, newAlbum),
//   {
//     onSuccess: () => {
//       // ✅ refetch the comments list for our blog post
//       queryClient.invalidateQueries(['posts', id, 'comments'])
//     },
//   },
// )
