/* eslint-disable react/no-danger */
import React from 'react'

export function htmlText(text?: string): JSX.Element | '' {
  if (text) {
    return <div dangerouslySetInnerHTML={{ __html: text }} />
  }
  return ''
}
