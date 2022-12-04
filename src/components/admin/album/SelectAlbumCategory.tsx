/* eslint-disable react/jsx-props-no-spreading */
import React, { FC, useState } from 'react'
import { useCategoriesData } from '../../../hooks/useCategories'
import { IAlbum } from '../../../types'

type Props = {
  album: IAlbum
}

export const SelectAlbumCategory: FC<Props> = (
  { album },
): JSX.Element => {
  const categoryData = useCategoriesData()
  const [selectedOption, setSelectedOption] = useState<string>()

  // const categoryOptions = categoryData.map(
  //   (c) => <option key={c.id} value={c.id}>{c.title}</option>,
  // )

  if (categoryData.length === 0) {
    return <h3>no categories yet.</h3>
  }

  let categoryNow

  if (album
    && album.category !== undefined && album.category.id !== undefined) {
    categoryNow = categoryData.find((c) => c.id === album.category?.id)
  }

  // console.log('-ID: ', albumId, ' ### ', categoryData)
  console.log(' ### ', categoryNow && categoryNow.title)

  // categoryOptions.concat({ id: '', title: 'choose category...' })

  const selectChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    const { value } = event.target
    setSelectedOption(value)
  }

  // console.log('-Select Category: ', categoryOptions)
  // console.log(category, '-Select Category: ', categoryData)

  return (
    <div>
      <h3>Category</h3>
      <p>{categoryNow && categoryNow.title}</p>
      <select
        defaultValue="DEFAULT"
        onChange={selectChange}
      >
        <option value="DEFAULT" disabled>
          Choose one
        </option>
        <option value="blue">Blue</option>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
        <option value="kindacode.com">Kindacode.com</option>
      </select>
      {selectedOption && <h2>{selectedOption}</h2>}
    </div>
  )
}
