import styled from 'styled-components/macro'
import { useAlbums } from '../../../hooks/useAlbums'
// import { AlbumListItemAdmin } from './AlbumListItemAdmin'
import { AlbumListContainer } from '../../album/AlbumList.styles'
import { TABLET } from '../../../styles/theme/breakpoints'
import { ErrorHandler, LoadingHandler } from '../../handlers'

const Container = styled(AlbumListContainer)`
   margin-right: 4rem;
   margin-bottom: 2rem;
    @media ${TABLET} {
    max-width: 100%;
  }
`

export const AlbumListAdmin = (): JSX.Element => {
  const {
    isLoading, data, isError, error,
  } = useAlbums()

  if (isLoading) return <LoadingHandler />
  if (isError) return <ErrorHandler error={(error as Error)} />

  console.log({ data })

  // const mappedData = albums?.map((a) => (
  //   <AlbumListItemAdmin
  //     key={a.id}
  //     album={a}
  //   />
  // ))

  return (
    <Container>
      <p>Jeee</p>
      {/* { mappedData && mappedData } */}
    </Container>
  )
}
