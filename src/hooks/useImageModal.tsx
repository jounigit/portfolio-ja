import { useState } from 'react'

interface ImageModalState {
  imageUrl: string;
  changeImage: (source:string) => void;
}

export const useImageModal = (): ImageModalState => {
  const [imageUrl, setImageUrl] = useState('')

  const changeImage = (source: string): void => setImageUrl(source)
  return {
    imageUrl,
    changeImage,
  }
}
