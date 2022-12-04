import {
  useMutation,
  UseMutationResult,
  useQuery,
  useQueryClient,
  UseQueryResult,
} from 'react-query'
import { INewAlbum, IAlbum } from '../types'
import api, { apiAuth } from '../config/axiosConfig'

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

export const createAlbum = async (newAlbum: INewAlbum): Promise<unknown> => {
  const response = await apiAuth.post<unknown>('/albums', newAlbum)
  console.log('-Create album: ', response.data)

  return response.data
}

export interface IUpdateProps{
  id: string;
  newAlbum: INewAlbum;
}

export const updateAlbum = async ({ id, newAlbum }: IUpdateProps)
: Promise<IAlbum> => {
  const response = await apiAuth.put(`/albums/${id}`, newAlbum)
  console.log('-Update album: ', response.data)

  return response.data
}

export const deleteAlbum = async (id: string): Promise<unknown> => {
  const response = await apiAuth.delete(`/albums/${id}`)
  console.log('-Delete album: ', response)
  return response
}

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

export function useCreateAlbum():
UseMutationResult<unknown, unknown, INewAlbum, unknown> {
  return useMutation(createAlbum)
}

export function useUpdateAlbum():
UseMutationResult<unknown, unknown, IUpdateProps, unknown> {
  const useClient = useQueryClient()
  return useMutation(
    updateAlbum,
    {
      onSuccess: () => {
        useClient.invalidateQueries('albums')
      },
      onError: () => {
        console.log('- Use delete error')
      },
    },
  )
}

export function useDeleteAlbum():
UseMutationResult<unknown, unknown, string, unknown> {
  const useClient = useQueryClient()
  return useMutation(
    deleteAlbum,
    {
      onSuccess: () => {
        console.log('- Use delete success')
        useClient.invalidateQueries('albums')
      },
      onError: () => {
        console.log('- Use delete error')
      },
    },
  )
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

// ::::::::: Hieman kankea, kts. kommentoitu useAlbumData() ::::::::::::::::::::
export const useAlbumById = (id: string): {
  isLoading: boolean;
  albumById: IAlbum | undefined;
} => {
  const {
    isLoading, isError, isSuccess, data,
  } = useAlbums()

  let albumById

  if (isError) {
    throw new Error('Error fetching data.')
  }

  if (isSuccess && data !== undefined) {
    albumById = data.find((a) => a.id === id)
  }

  return {
    isLoading,
    albumById,
  }
}

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
export const useAlbumsByCategory = (categoryId: string): {
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
      .filter((a) => (a.category?.id === categoryId))
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
