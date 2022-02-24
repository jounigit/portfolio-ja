import React from 'react'
import { Helmet } from 'react-helmet-async'
import Spacer from 'react-spacer'
import { ArticleList } from '../components/article/ArticleList'
import { useArticles } from '../hooks/useArticles'
import { FadeDiv } from './FadeIn.styles'

const ArticlesPage: React.FC = () => {
  const articlesQuery = useArticles()

  const isLoaded = articlesQuery.isSuccess

  return (
    <>
      <Helmet>
        <title>Jouni Airaksinen - articles</title>
        <meta
          name="artikkelit"
          content="articles and critics of artworks"
        />
      </Helmet>
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
