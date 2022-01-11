import { useQuery, UseQueryResult } from 'react-query'
import api from '../../clientProvider/axiosConfig'
import { IAlbum } from '../../types'

const getAlbums = async (): Promise<IAlbum[]> => {
  const { data } = await api.get('/albums')
  return data
}

export const getAlbum = async (id: string | undefined): Promise<IAlbum> => {
  if (typeof id === 'undefined') {
    Promise.reject(new Error('Invalid id'))
  }
  const { data } = await api.get(`/albums/${id}`)
  console.log('# use Album: ', data)
  return data
}

export function useAlbums(): UseQueryResult<IAlbum[], unknown> {
  return useQuery('albums', getAlbums)
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

// const fetchAlbum = async (id: string): Promise<unknown> => {
//   const response = await fetch(`http://localhost:3001/albums/${id}`)

//   if (!response.ok) {
//     throw new Error(response.statusText)
//   }

//   return response.json()
// }

// // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
// export function useAlbumFetch(id: string) {
//   return useQuery(['album', { id }], () => fetchAlbum(id))
// }
