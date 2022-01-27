import React from 'react'
import Spacer from 'react-spacer'
import { Cv } from '../components/cv/Cv'
import { useCv } from '../hooks/useCv'
import { FadeDiv } from './FadeIn.styles'

const CvPage: React.FC = () => {
  const cvQuery = useCv()

  const isLoaded = cvQuery.isSuccess

  return (
    <>
      <Spacer height={80} />
      <div className="headerMiddle">
        CV
      </div>
      {
            isLoaded
            && (
            <FadeDiv timein="0.3s">
              <Cv />
            </FadeDiv>
            )
        }
    </>
  )
}

export default CvPage
