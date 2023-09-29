import React from 'react'
import { TailSpin } from 'react-loader-spinner'
import Spacer from 'react-spacer'
import { Helmet } from 'react-helmet-async'
import { AlbumListCategory } from '../components/album/AlbumListCategory'
import { useAlbumsByCategory } from '../hooks/useAlbums'
import { Spinner } from '../styles/styles'
import { FadeDiv } from './FadeIn.styles'
import { useCategoryBySlug } from '../hooks/useCategories'

const ExhibitionPage: React.FC = () => {
  const category = useCategoryBySlug('nayttelyt')
  const { isLoading, albumsByCategory } = useAlbumsByCategory(category.id)

  const metaname = 'art exhibitions, taidenäyttelyt'

  const metacontent = 'art exhibitions by Jouni Airaksinen'

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

  return (
    <>
      <Helmet>
        <title>
          Jouni Airaksinen - exhibitions
        </title>
        <meta
          name={metaname}
          content={metacontent}
        />
      </Helmet>
      <Spacer height={80} />
      <div className="headerMiddle">
        NÄYTTELYT
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

export default ExhibitionPage
