import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { AlbumListItem } from './AlbumListItem'
import { AlbumListContainer } from './AlbumList.styles'
import { useAlbums } from './useAlbums'

type Params = {
    categoryID: string;
  };

const AlbumsCategoryContainer = styled(AlbumListContainer)`
    margin-top: 130px;
`

export const AlbumListCategory = (): JSX.Element => {
  const { categoryID } = useParams<Params>()
  const albumsQuery = useAlbums()
  let albums

  if (albumsQuery.isSuccess) {
    albums = albumsQuery.data
  }

  const filtered = albums?.filter((a) => a.category === categoryID)

  console.log('## ALBUMS IN CAT::', filtered && filtered)
  const mappedData = filtered?.map((a) => (
    <AlbumListItem
      key={a.id}
      id={a.id}
      title={a.title}
      slug={a.slug}
      info={a.info}
      pictures={a.pictures}
      // width={100}
      // height={100}
    />
  ))

  return (
    <AlbumsCategoryContainer>
      { mappedData && mappedData }
    </AlbumsCategoryContainer>
  )
}
