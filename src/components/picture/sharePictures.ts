/* eslint-disable no-multiple-empty-lines */

import { IPicture } from '../../types'

export function getPicsByIds(ids: string[], pics: IPicture[])
: (IPicture | undefined)[] {
  return ids.map(
    (id) => (pics.find((p) => p.id === id)),
  )
}

