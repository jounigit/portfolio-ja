import React from 'react'
import Spacer from 'react-spacer'
import { ArticleList } from '../components/article/ArticleList'
import { useArticles } from '../hooks/useArticles'
import { FadeDiv } from './FadeIn.styles'

const ArticlesPage: React.FC = () => {
  const articlesQuery = useArticles()

  const isLoaded = articlesQuery.isSuccess

  return (
    <>
      <Spacer height={80} />
      <div className="headerMiddle">
        ARTIKKELIT
      </div>
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
