import React from 'react'
import { ArticleList } from '../components/article/ArticleList'
import { useArticles } from '../components/article/useArticles'
import { FadeDiv } from './FadeIn.styles'

const ArticlesPage: React.FC = () => {
  const articlesQuery = useArticles()

  const isLoaded = articlesQuery.isSuccess

  return (
    <>
      {
            isLoaded
            && (
            <FadeDiv timein="0.3s">
              <ArticleList />
            </FadeDiv>
            )
        }
    </>
  )
}

export default ArticlesPage
