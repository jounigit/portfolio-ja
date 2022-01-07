import React from 'react'
import { AlbumListItem } from './AlbumListItem'
import { AlbumListContainer } from './AlbumList.styles'
import { useAlbums } from './useAlbums'
// import { usePictures } from '../picture/usePicture'

export const AlbumsList = (): JSX.Element => {
  const albumsQuery = useAlbums()
  // const picturesQuery = usePictures()
  let albums

  // if (picturesQuery.isSuccess) {
  //   console.log('# Pictures form albumList: ', picturesQuery.data)
  // }

  // if (albums.status === 'loading') {
  //   return <div>loading...</div>
  // }

  // if (albums.error instanceof Error) {
  //   return (
  //     <div>
  //       An error occurred:
  //       {albums.error.message}
  //     </div>
  //   )
  // }

  if (albumsQuery.isSuccess) {
    albums = albumsQuery.data
  }

  console.log('# AlbumList page: ', albums)

  const mappedData = albums?.map((a) => (
    <AlbumListItem
      key={a.id}
      id={a.id}
      title={a.title}
      slug={a.slug}
      content={a.content}
      pictures={a.pictures}
    />
  ))

  return (
    <AlbumListContainer>
      <h3>Albumit</h3>
      { mappedData && mappedData }
    </AlbumListContainer>
  )
}
