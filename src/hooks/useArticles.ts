import { useQuery, UseQueryResult } from 'react-query'
import api from '../config/axiosConfig'
import { IArticle } from '../types'

const getArticles = async (): Promise<IArticle[]> => {
  const { data } = await api.get('/articles')
  return data
}

export function useArticles(): UseQueryResult<IArticle[], unknown> {
  return useQuery('articles', getArticles)
}
