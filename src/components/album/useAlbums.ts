import { useQuery } from 'react-query'
import api from '../../clientProvider/axiosConfig'
import { IAlbum } from '../../types'

const getAlbums = async (): Promise<IAlbum[]> => {
  const { data } = await api.get('/albums')
  console.log('# use Albums: ', data)
  return data
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function useAlbums() {
  return useQuery('albums', getAlbums)
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
// export const useAlbums = () => useQuery(
//   'albums',
//   getAlbums,
// )
