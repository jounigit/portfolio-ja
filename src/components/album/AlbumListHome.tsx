import React, { FC } from 'react'
import { useAlbumsByCategory } from './useAlbums'
import { AlbumListHomeItem } from './AlbumListHomeItem'
import { AlbumHomePageContainer } from './AlbumHomePage.styles'

interface Props {
  category: string,
  columns: number
}

export const AlbumListHome: FC<Props> = (
  { category, columns },
): JSX.Element => {
  const { isLoading, albumsByCategory } = useAlbumsByCategory(category)

  if (isLoading) return <h3>Loading ...</h3>

  if (albumsByCategory === undefined) return <h3>No albums ...</h3>

  const mappedData = albumsByCategory.slice(0, 6).map((a) => (
    <AlbumListHomeItem
      key={a.id}
      title={a.title}
      slug={a.slug}
      info={a.info}
      pictures={a.pictures}
    />
  ))

  return (
    <AlbumHomePageContainer columns={columns}>
      { mappedData && mappedData }
    </AlbumHomePageContainer>
  )
}
