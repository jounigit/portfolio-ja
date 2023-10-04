/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable no-unused-expressions */
import React from 'react'
import { Link } from 'react-router-dom'
import { SmallButton } from '../atoms/Button'

interface Props {
  id: string;
  path: string;
  slug?: string;
  toggle?: () => void;
}

export function ActionLinks({
  id, path, slug, toggle,
}: Props) {
  /** ************ handle remove mutation ********************** */
  const remove = (): void => {
    toggle && toggle()
  }

  /** ************ links ************************ */
  const idSlug = slug || id
  const link = (
    <Link to={`/admin/${path}/${idSlug}`}>
      <SmallButton color="blue">
        Katso
      </SmallButton>
    </Link>
  )

  const linkUpdate = (
    <Link to={`/admin/${path}/update/${id}`}>
      <SmallButton color="green">
        Edit
      </SmallButton>
    </Link>
  )

  const linkRemove = (
    <SmallButton
      color="red"
      onClick={() => remove()}
    >
      Poista
    </SmallButton>
  )
  return { link, linkUpdate, linkRemove }
}
