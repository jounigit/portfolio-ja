/* eslint-disable react/no-danger */
import React, { FC } from 'react'
import {
  CvContainer,
  Title,
  Text,
} from './Cv.styles'

interface Props {
  title: string,
  content: string
}

export const CvDetails: FC<Props> = ({
  title, content,
}) => {
  const innerHtmlTxt = <div dangerouslySetInnerHTML={{ __html: content }} />

  return (
    <>

      <CvContainer>

        <Title>
          <h2>
            {title}
          </h2>
        </Title>
        <Text>
          { innerHtmlTxt }
        </Text>

      </CvContainer>

    </>
  )
}
