import { FC } from 'react'
import { useAlbumsByCategory } from '../../hooks/useAlbums'
import { AlbumListHomeItem } from './AlbumListHomeItem'
import { AlbumHomePageContainer } from './AlbumHomePage.styles'
import { filterAlbums } from './filterAlbums'

interface Props {
  categoryId: string,
  columns: number
}

export const AlbumListHome: FC<Props> = (
  { categoryId, columns },
): JSX.Element => {
  const { isLoading, albumsByCategory } = useAlbumsByCategory(categoryId)

  if (isLoading) return <h3>Loading ...</h3>

  if (albumsByCategory === undefined) return <h3>No albums this category...</h3>

  const orderByYear = filterAlbums(albumsByCategory)

  const mappedData = orderByYear.slice(0, 6).map((a) => (
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
