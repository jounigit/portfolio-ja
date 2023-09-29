/* eslint-disable react/jsx-props-no-spreading */
import React, { FC, useState } from 'react'
import {
  IUpdateCatProps,
  useUpdateAlbumCategory,
} from '../../../hooks/useAlbums'
import { useCategoriesData } from '../../../hooks/useCategories'
import { Form } from '../../../styles/styles'
import { IAlbum } from '../../../types'
import { GreenButton } from '../../atoms/Button'

type Props = {
  album: IAlbum
}

export const SelectAlbumCategory: FC<Props> = (
  { album },
): JSX.Element => {
  const categoryData = useCategoriesData()
  const { mutate } = useUpdateAlbumCategory()
  const [selectedOption, setSelectedOption] = useState<string>()

  const selectChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    const { value } = event.target
    setSelectedOption(value)
  }

  const handleSubmit = (): void => {
    // const albumID = album.id as string
    const ids: IUpdateCatProps = {
      id: album.id,
      catID: selectedOption || '',
    }
    mutate(ids)
  }

  // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  if (categoryData.length === 0) { return <h3>no categories yet.</h3> }

  let categoryNow

  if (album
    && album.category !== undefined && album.category.id !== undefined) {
    categoryNow = categoryData.find((c) => c.id === album.category?.id)
  }

  const categoryOptions = categoryData.map((c) => (
    <option key={c.id} value={c.id}>{c.title}</option>
  ))

  return (
    <div>
      <h3>Category</h3>
      <p>{categoryNow && categoryNow.title}</p>

      <Form onSubmit={handleSubmit}>
        <select
          defaultValue="DEFAULT"
          onChange={selectChange}
        >
          <option value="DEFAULT" disabled>
            Choose one
          </option>
          {categoryOptions}
        </select>
        <GreenButton size={0.5} type="submit">Lähetä</GreenButton>
      </Form>

      {/* {selectedOption && <h3>{selectedOption}</h3>} */}
    </div>
  )
}

// eslint-disable-next-line no-lone-blocks
{ /* <option value="nayttelyt">Näyttelyt</option>
        <option value="galleria">Galleria</option> */ }
