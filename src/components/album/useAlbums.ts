import { useQuery } from 'react-query'
import api from '../../clientProvider/axiosConfig'
import { IAlbum } from '../../types'

const getAlbums = async (): Promise<IAlbum[]> => {
  const { data } = await api.get('/albums')
  return data
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const getAlbum = async (id: string | undefined) => {
  if (typeof id === 'undefined') {
    Promise.reject(new Error('Invalid id'))
  }
  const { data } = await api.get(`/albums/${id}`)
  console.log('# use Album: ', data)
  return data
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function useAlbums() {
  return useQuery('albums', getAlbums)
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function useAlbum(id: string | undefined) {
  return useQuery(['album', id], () => getAlbum(id), {
    enabled: Boolean(id),
  })
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function useAlbumsData() {
  const { data } = useQuery('albums', getAlbums)

  if (data !== undefined) {
    return data
  }
  const dataE = new Array<IAlbum>()
  return dataE
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const fetchAlbum = async (id: string) => {
  const response = await fetch(`http://localhost:3001/albums/${id}`)

  if (!response.ok) {
    throw new Error(response.statusText)
  }

  return response.json()
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function useAlbumFetch(id: string) {
  return useQuery(['album', { id }], () => fetchAlbum(id))
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
// export function useAlbum(id: string | undefined) {
//   return useQuery(['album', id], () => getAlbum(id))
// }

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
// export function useAlbum(id: string | undefined) {
//   const { data } = useQuery(['album', id], () => getAlbum(id), {
//     enabled: Boolean(id),
//   })

//   if (data !== undefined) {
//     return data
//   }

//   const emptyAlbum: IAlbum = {
//     id: '',
//     title: '',
//     slug: '',
//     content: '',
//     pictures: [],
//     user: '',
//   }
//   return emptyAlbum
// }
