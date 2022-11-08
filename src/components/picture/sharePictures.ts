import { IPicture } from '../../types'

export function getPicsByIds(ids: string[], pics: IPicture[])
: (IPicture | undefined)[] {
  return ids.map(
    (id) => (pics.find((p) => p.id === id)),
  )
}

export function getPicById(id: string, pics: IPicture[])
: (IPicture | undefined) {
  return pics.find((p) => p.id === id)
}
