/* eslint-disable object-curly-newline */
import styled from 'styled-components/macro'
// import { ErrorHandler, LoadingHandler } from '../../handlers'
import { AlbumListItemAdmin } from './AlbumListItemAdmin'
import { AlbumListContainer } from '../../album/AlbumList.styles'
import { useAlbums } from '../../../hooks/useAlbums'
import { TABLET } from '../../../styles/theme/breakpoints'

const Container = styled(AlbumListContainer)`
   margin-right: 4rem;
   margin-bottom: 2rem;
    @media ${TABLET} {
    max-width: 100%;
  }
`

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
    <Container>
      { mappedData && mappedData }
    </Container>
  )
}

// const { isLoading, data, isError, error } = useAlbums()

// if (isError) return <ErrorHandler error={(error as Error)} />
// if (isLoading) return <LoadingHandler />
// if (!data) return <p>no albums yet.</p>

// const showAlbums = data.map(
//   (a) => <AlbumListItemAdmin key={a.id} album={a} />,
// )

// return (
//   <Container>
//     {showAlbums}
//   </Container>
// )
