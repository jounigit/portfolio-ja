/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useQuery } from 'react-query'
import api from '../../clientProvider/axiosConfig'
import { ICategory } from './categoryTypes'

const getCategories = async (): Promise<ICategory[]> => {
  const { data } = await api.get('/categories')
  console.log('# use CATEGORIES 1: ', data)
  return data
}

// eslint-disable-next-line
export const useCategories = () => useQuery(
  ['categories'],
  getCategories,
)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useCategoriesQuery = (select: any) => useQuery(['categories'], getCategories, { select })

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useCategory = (id: any) => useCategoriesQuery((data: any[]) => data.find((todo) => todo.id === id))

// #############################################################
// eslint-disable-next-line @typescript-eslint/no-explicit-any
// function isCategory(category: any): category is ICategory {
//   return 'id' in category && 'title' in category && 'slug' in category && 'content' in category
// }

// async function getData(path: string): Promise<unknown> {
//   const response = await fetch(path)
//   // eslint-disable-next-line no-return-await
//   return await response.json()
// }

// export const getCategory = async (id: string): Promise<ICategory | null> => {
//   const category = await getData(`http://localhost:8000/api/categories/${id}`)
//   if (category && isCategory(category)) {
//     console.log('# use CATEGORIES get: ', category)
//     return category
//   }
//   return null
// }
