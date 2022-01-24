import React, { FC } from 'react'
import {
  ICv,
  // hasOwnProperty,
  isArray,
} from '../../types'
import { CvContainer } from './Cv.styles'
import { CvDetails } from './CvDetails'
import { useCv } from './useCv'

export const Cv: FC = () => {
  const cvQuery = useCv()
  // let cv = {}
  console.log('## CV query:: ', cvQuery.data)

  if (cvQuery.isSuccess
    && isArray(cvQuery.data)
    && typeof cvQuery.data[0] === 'object') {
    // eslint-disable-next-line prefer-destructuring
    // const cv = cvQuery.data[0] as ICv
    // console.log('## CV object:: ', cv)
    // console.log('## CV object 2:: ', cv.title)
  }

  const cv = cvQuery.isSuccess
  && isArray(cvQuery.data)
  && typeof cvQuery.data[0] === 'object'
  && cvQuery.data[0] as ICv

  console.log('## CV object:: ', cv)
  // const cvTitle = hasOwnProperty(cv, 'title') ? cv.title : ''

  // :::::::::::: JATKA TÄSTÄ!!!!!!!!!!!!
  return (
    <>
      { cv
    && <CvDetails title={cv.title} content={cv.content} />}
      <p>pooooo</p>
    </>
  )
}
