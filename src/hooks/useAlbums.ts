import { useQuery, UseQueryResult } from 'react-query'
import api from '../config/axiosConfig'
import { IAlbum } from '../types'

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

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

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
