/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useState } from 'react'

export const useModal = () => {
  const [isShown, setIsShown] = useState<boolean>(false)
  const toggle = () => setIsShown(!isShown)
  return {
    isShown,
    toggle,
  }
}
