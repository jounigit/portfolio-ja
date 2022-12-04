import React from 'react'
import { TailSpin } from 'react-loader-spinner'
import { useAlbums } from '../hooks/useAlbums'
import { usePicturesQuery } from '../hooks/usePicture'
import { Welcome } from '../components/welcome/Welcome'
import { Spinner } from '../styles/styles'
import { FadeDiv } from './FadeIn.styles'
import { useCategories } from '../hooks/useCategories'
import { HomePageDetails } from './HomePageDetails'

const Home: React.FC = () => {
  const albumsQuery = useAlbums()
  const picturesQuery = usePicturesQuery()
  const { isSuccess: catOK, data: categories } = useCategories()

  const isLoaded = albumsQuery.isSuccess
  && picturesQuery.isSuccess && catOK
  const token = localStorage.getItem('token')

  if (token) {
    console.log('-- Home token: ', token)
  }

  return (
    <>
      <FadeDiv timein="0.3s">
        <Welcome />
      </FadeDiv>
      { !isLoaded
      && (
        <Spinner marginTop={50}>
          <TailSpin
            color="white"
            height="80"
            width="80"
          />
        </Spinner>
      )}
      {
        isLoaded && categories
        && (
        <>
          <HomePageDetails
            slug="galleria"
            columns={2}
            categories={categories}
          />
          <HomePageDetails
            slug="nayttelyt"
            columns={3}
            categories={categories}
          />
        </>
        )
      }
    </>
  )
}

export default Home
