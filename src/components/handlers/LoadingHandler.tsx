/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/function-component-definition */

import React from 'react'
import { HandlingWrapper, Spinner } from '../../styles/styles'

interface Props {
    mt?: number;
}

export function LoadingHandler({ mt }: Props) {
  return (
    <HandlingWrapper brColor="green">
      <Spinner marginTop={mt} />
    </HandlingWrapper>
  )
}
