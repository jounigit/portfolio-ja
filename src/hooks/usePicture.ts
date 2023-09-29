/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {
  useMutation,
  UseMutationResult,
  useQuery, useQueryClient, UseQueryResult,
} from 'react-query'
import api from '../config/axiosConfig'
import { IPicture, IUpdatePicture } from '../types'

const getPictures = async (): Promise<IPicture[]> => {
  const { data } = await api.get('/pictures')
  return data
}

export const getPicture = async (id: string | undefined): Promise<IPicture> => {
  if (typeof id === 'undefined') {
    Promise.reject(new Error('Invalid id'))
  }
  const { data } = await api.get(`/pictures/${id}`)
  // console.log('# use Album: ', data)
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

export function usePicture(id: string | undefined)
: UseQueryResult<IPicture, unknown> {
  return useQuery(['picture', id], () => getPicture(id), {
    enabled: Boolean(id),
  })
}

export function usePicturesQuery(): UseQueryResult<IPicture[], unknown> {
  return useQuery('pictures', getPictures)
}

// ###################### services #########################################
//* *  Create */
type CreateProps = {
  image: File
}

interface IUpdateProps {
  id: string;
  newPicture: IUpdatePicture;
}

export const createPicture = async (newPic: CreateProps) => {
  try {
    const response = await api.post<unknown>('/upload', newPic)
    return response.data
  } catch (error) {
    throw new Error('Can not create picture.')
  }
}

//* *  Update */
export const updatePicture = async ({ id, newPicture }: IUpdateProps)
: Promise<IPicture> => {
  try {
    const response = await api.put(`/pictures/${id}`, newPicture)
    console.table([response.data])
    return response.data
  } catch (error) {
    throw new Error('Can not update picture')
  }
}

//* *  delete */
export const deletePicture = async (id: string) => {
  try {
    const response = await api.delete(`/pictures/${id}`)
    return response.data
  } catch (error) {
    console.log('- DELETE CV', error)
    throw new Error('Can not delete cv')
  }
}

// ####################### query hooks ########################################

// ####################### mutations ########################################
export const useCreatePicture = () => useMutation({
  mutationFn: createPicture,
  onSuccess: (data, variables) => {
    console.log({ data })
    console.log({ variables })
  },
  onError: (error, variables) => {
    console.log({ error })
    console.log({ variables })
  },
})

export function useUpdatePicture():
  UseMutationResult<unknown, unknown, IUpdateProps, unknown> {
  const useClient = useQueryClient()
  return useMutation({
    mutationFn: updatePicture,
    onSuccess: () => {
      useClient.invalidateQueries({ queryKey: ['pictures'] })
    },
  })
}

export function useDeletePicture():
  UseMutationResult<unknown, unknown, string, unknown> {
  const useClient = useQueryClient()
  return useMutation({
    mutationFn: deletePicture,
    onSuccess: () => {
      console.log('- Use delete success')
      useClient.invalidateQueries()
    },
    onError: () => {
      console.log('- Use delete error')
    },
  })
}
