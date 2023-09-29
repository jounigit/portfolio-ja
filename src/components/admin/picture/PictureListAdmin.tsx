import React from 'react'
import styled from 'styled-components'
import { PictureListItemAdmin } from './PictureListItemAdmin'
import { colors } from '../../../styles/theme'
import { ErrorHandler, LoadingHandler } from '../../handlers'
import { usePicturesQuery } from '../../../hooks/usePicture'
import { ChooseGrid } from '../Choose.styles'
import { MainContainer } from '../Admin.styles'

const Wrapper = styled(MainContainer)`
  max-width: 95%;
  background: ${colors.grey3};
  padding-left: 1rem;
  padding-top: 1rem;
  padding-bottom: 4rem;
`

export const PictureListAdmin = (): JSX.Element => {
  const pictureQuery = usePicturesQuery()

  if (pictureQuery.isLoading) return <LoadingHandler />

  if (pictureQuery.isError) {
    return <ErrorHandler error={(pictureQuery.error as Error)} />
  }

  console.log('Pictures: ', pictureQuery.data)

  const showdata = pictureQuery.data?.map(
    (p) => <PictureListItemAdmin key={p.id} picture={p} />,
  )

  // ###################################################################
  return (
    <Wrapper>
      <ChooseGrid>
        {showdata && showdata}
      </ChooseGrid>
    </Wrapper>
  )
}
