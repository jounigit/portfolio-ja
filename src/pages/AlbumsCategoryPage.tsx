import React from 'react'
import { useParams } from 'react-router-dom'
import { TailSpin } from 'react-loader-spinner'
import Spacer from 'react-spacer'
import { Helmet } from 'react-helmet-async'
import { AlbumListCategory } from '../components/album/AlbumListCategory'
import { useAlbumsByCategory } from '../hooks/useAlbums'
// import { usePicturesQuery } from '../hooks/usePicture'
import { Spinner } from '../styles/styles'
import { FadeDiv } from './FadeIn.styles'

const AlbumsCategoryPage: React.FC = () => {
  const { categorySlug } = useParams<{categorySlug: string}>()

  const { isLoading, albumsByCategory } = useAlbumsByCategory(categorySlug)

  const metaname = categorySlug === 'nayttelyt'
    ? 'art exhibitions, taidenäyttelyt' : categorySlug

  const metacontent = categorySlug === 'nayttelyt'
    ? 'art exhibitions by Jouni Airaksinen'
    : `${categorySlug}, Jouni Airaksinen`

  if (isLoading) {
    return (
      <Spinner marginTop={120}>
        <TailSpin
          color="white"
          height="80"
          width="80"
        />
      </Spinner>
    )
  }

  if (albumsByCategory === undefined) return <div>No albums found.</div>

  const category = categorySlug === 'nayttelyt' ? 'NÄYTTELYT' : 'TEOKSET'

  // console.log('## Albums: ', albumsByCategory)
  // const categoryLoaded = isLoaded && <AlbumListCategory  />

  return (
    <>
      <Helmet>
        <title>
          Jouni Airaksinen -
          {categorySlug}
        </title>
        <meta
          name={metaname}
          content={metacontent}
        />
      </Helmet>
      <Spacer height={80} />
      <div className="headerMiddle">
        { category }
      </div>

      {
      !isLoading
      && (
      <FadeDiv timein="0.3s">
        <AlbumListCategory albumsByCategory={albumsByCategory} />
      </FadeDiv>
      )
      }
    </>
  )
}

export default AlbumsCategoryPage
