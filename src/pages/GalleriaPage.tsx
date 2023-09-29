import React from 'react'
import { TailSpin } from 'react-loader-spinner'
import Spacer from 'react-spacer'
import { Helmet } from 'react-helmet-async'
import { AlbumListCategory } from '../components/album/AlbumListCategory'
import { useAlbumsByCategory } from '../hooks/useAlbums'
import { Spinner } from '../styles/styles'
import { FadeDiv } from './FadeIn.styles'
import { useCategoryBySlug } from '../hooks/useCategories'

const GalleriaPage: React.FC = () => {
  const category = useCategoryBySlug('galleria')
  const { isLoading, albumsByCategory } = useAlbumsByCategory(category.id)
  console.log('## G page: ', category)

  const metaname = 'art works'

  const metacontent = 'art works, fine art, sculptures,'
  + 'drawings by Jouni Airaksinen'

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

  console.log('## Albums: ', albumsByCategory && albumsByCategory)
  if (albumsByCategory === undefined) return <div>No albums found.</div>

  return (
    <>
      <Helmet>
        <title>
          Jouni Airaksinen - galleria
        </title>
        <meta
          name={metaname}
          content={metacontent}
        />
      </Helmet>
      <Spacer height={80} />
      <div className="headerMiddle">
        GALLERIA
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

export default GalleriaPage
