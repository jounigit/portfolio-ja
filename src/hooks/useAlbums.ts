/* eslint-disable no-return-await */
import {
  useMutation,
  UseMutationResult,
  useQuery,
  useQueryClient,
  UseQueryResult,
} from 'react-query'
import { INewAlbum, IAlbum } from '../types'
import api, { apiAuth } from '../config/axiosConfig'
import { getOne } from '../services/apiService'

// ###################### services #########################################
//* *  Get all */
export const fetchAlbumList = async (): Promise<IAlbum[]> => {
  const response = await api.get('albums')
  return response.data
}
const getAlbums = async (): Promise<IAlbum[]> => {
  try {
    const response = await api.get('/albums')
    return response.data
  } catch (error) {
    throw new Error('Can not get albums.')
  }
}

//* *  Get one */
export const getAlbum = async (id: string): Promise<IAlbum> => {
  try {
    const { data } = await api.get(`/albums/${id}`)
    return data
  } catch (error) {
    throw new Error(`Can not get album id: ${id}`)
  }
}

//* *  Create */
export const createAlbum = async (newAlbum: INewAlbum): Promise<unknown> => {
  const response = await apiAuth.post<unknown>('/albums', newAlbum)
  console.log('-Create album: ', response.data)

  return response.data
}

interface IUpdateProps{
  id: string;
  newAlbum: INewAlbum;
}

//* *  Update */
export const updateAlbum = async ({ id, newAlbum }: IUpdateProps)
: Promise<IAlbum> => {
  const response = await apiAuth.put(`/albums/${id}`, newAlbum)
  console.log('-Update album: ', response.data)

  return response.data
}

//* *  Delete */
export const deleteAlbum = async (id: string): Promise<unknown> => {
  const response = await apiAuth.delete(`/albums/${id}`)
  console.log('-Delete album: ', response)
  return response
}

export interface IAlbumCatProps{
  id: string;
  catID: string;
}

//* *  Update albumCategory */
export const updateAlbumCategory = async ({ id, catID }: IAlbumCatProps)
: Promise<IAlbum> => {
  const response = await apiAuth.put(`/albums/${id}/category/${catID}`)
  console.log('-Update cat album: ', response.data)

  return response.data
}

//* *  Update albumCategory */
export const deleteAlbumCategory = async ({ id, catID }: IAlbumCatProps)
: Promise<IAlbum> => {
  const response = await apiAuth.delete(`/albums/${id}/category/${catID}`)
  console.log('-Delete cat album: ', response.data)

  return response.data
}
// ####################### query hooks ########################################
export function useAlbums(): UseQueryResult<IAlbum[], unknown> {
  return useQuery({
    queryKey: ['albums'],
    queryFn: fetchAlbumList,
  })
}

export function useAlbum(id:string): UseQueryResult<IAlbum, unknown> {
  return useQuery({
    queryKey: ['albums', id],
    queryFn: async () => await getOne<IAlbum>({ id, url: 'albums' }),
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
// ####################### mutations ########################################

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

export function useUpdateAlbumCategory():
UseMutationResult<unknown, unknown, IAlbumCatProps, unknown> {
  const useClient = useQueryClient()
  return useMutation(
    updateAlbumCategory,
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

export function useDeleteAlbumCategory():
UseMutationResult<unknown, unknown, IAlbumCatProps, unknown> {
  const useClient = useQueryClient()
  return useMutation(
    deleteAlbumCategory,
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
