import React from 'react'
// import styled from 'styled-components'
import { useAlbums } from '../../../hooks/useAlbums'
import { AlbumListItemAdmin } from './AlbumListItemAdmin'

// const Container = styled.div`
//   display: grid;
//   grid-template-rows: 1fr;
// `

export const AlbumListAdmin = (): JSX.Element => {
  const albumsQuery = useAlbums()
  let albums

  if (albumsQuery.isSuccess) {
    albums = albumsQuery.data
  }

  const mappedData = albums?.map((a) => (
    <AlbumListItemAdmin
      key={a.id}
      album={a}
    />
  ))

  return (
    <>
      { mappedData && mappedData }
    </>
  )
}
