/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useHistory } from 'react-router-dom'

export const useGoBack = () => {
  const history = useHistory()

  const goBack = (): void => {
    history.goBack()
  }
  return goBack
}
