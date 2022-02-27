import React from 'react'
import { Helmet } from 'react-helmet-async'
import Spacer from 'react-spacer'
import { Cv } from '../components/cv/Cv'
import { useCv } from '../hooks/useCv'
import { FadeDiv } from './FadeIn.styles'

const CvPage: React.FC = () => {
  const cvQuery = useCv()

  const isLoaded = cvQuery.isSuccess

  return (
    <>
      <Helmet>
        <title>Jouni Airaksinen - cv</title>
        <meta
          name="cv of jouni airaksinen"
          content="cv, curriculum vitae"
        />
      </Helmet>
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
