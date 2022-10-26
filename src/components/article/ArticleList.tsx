import React from 'react'
import { AlbumListContainer } from '../album/AlbumList.styles'
import { ArticleListContainer, Title } from './ArticleList.styles'
import { ArticleListItem } from './ArticleListItem'
import { useArticles } from '../../hooks/useArticles'

export const ArticleList = (): JSX.Element => {
  const articleQuery = useArticles()
  let articles

  if (articleQuery.isError) {
    throw new Error('Error fetching data.')
  }

  if (articleQuery.isSuccess) {
    articles = articleQuery.data
  }

  const mappedData = articles?.map((a) => (
    <ArticleListItem
      key={a.id}
      title={a.title}
      media={a.media}
      journalist={a.journalist}
      file={a.file}
    />
  ))

  return (
    <AlbumListContainer>
      <ArticleListContainer>
        <Title>
          <h3>Artikkelit</h3>
        </Title>

        {mappedData && mappedData}
      </ArticleListContainer>
    </AlbumListContainer>
  )
}
