import { useQuery, UseQueryResult } from 'react-query'
import api from '../../clientProvider/axiosConfig'
import { ICategory } from '../../types'

const getCategories = async (): Promise<ICategory[]> => {
  const { data } = await api.get('/categories')
  console.log('# use CATEGORIES 1: ', data)
  return data
}

export function useCategories(): UseQueryResult<ICategory[], unknown> {
  return useQuery('categories', getCategories)
}

export function useCategoriesData(): ICategory[] {
  const { isError, data } = useQuery('albums', getCategories)

  if (isError) {
    throw new Error('Error fetching data.')
  }

  if (data !== undefined) {
    return data
  }
  const emptyData = new Array<ICategory>()
  return emptyData
}

// #############################################################
// eslint-disable-next-line @typescript-eslint/no-explicit-any
// function isCategory(category: any): category is ICategory {
//   return 'id' in category && 'title' in category
// && 'slug' in category && 'content' in category
// }

// async function getData(path: string): Promise<unknown> {
//   const response = await fetch(path)
//   // eslint-disable-next-line no-return-await
//   return await response.json()
// }

// export const getCategory = async (id: string): Promise<ICategory | null> => {
//   const category =
// await getData(`http://localhost:8000/api/categories/${id}`)
//   if (category && isCategory(category)) {
//     console.log('# use CATEGORIES get: ', category)
//     return category
//   }
//   return null
// }
