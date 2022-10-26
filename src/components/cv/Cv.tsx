import React, { FC } from 'react'
import {
  ICv,
  isArray,
} from '../../types'
import { CvDetails } from './CvDetails'
import { useCv } from '../../hooks/useCv'

export const Cv: FC = () => {
  const cvQuery = useCv()

  const cv = cvQuery.isSuccess
  && isArray(cvQuery.data)
  && typeof cvQuery.data[0] === 'object'
  && cvQuery.data[0] as ICv

  return (
    <>
      { cv
    && <CvDetails title={cv.title} content={cv.content} />}
    </>
  )
}
