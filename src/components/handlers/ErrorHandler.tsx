/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/require-default-props */
/* eslint-disable react/function-component-definition */
import React from 'react'
import { Link } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'
import { HandlingWrapper } from '../../styles/styles'

interface Props {
    error?: Error;
}

export function ErrorHandler({ error }: Props) {
  return (
    <HandlingWrapper brColor="red">
      <FaTimes color="red" />
      <h4>An error occurred:</h4>
      <p>{error && error.message}</p>

      <p>{error && error.name}</p>
      <Link to="/">Go back to the homepage</Link>
    </HandlingWrapper>
  )
}
