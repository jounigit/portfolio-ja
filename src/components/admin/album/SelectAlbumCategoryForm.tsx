import { FC, useState } from 'react'
import styled from 'styled-components'
import { IAlbum } from '../../../types'
import { useCategoriesData } from '../../../hooks/useCategories'
import { SmallButton } from '../../atoms/Button'
import { IAlbumCatProps } from '../../../hooks/useAlbums'

const SelectForm = styled.form`
  max-width: 400px;
  height: 150px;
    border-radius: 5px;
    padding: 1.5rem;
`
type Props = {
    updateAlbumCat: (data: IAlbumCatProps) => void
    album: IAlbum
  }

export const SelectAlbumCategoryForm: FC<Props> = ({ updateAlbumCat, album })
: JSX.Element => {
  const categoryData = useCategoriesData()
  const [selectedOption, setSelectedOption] = useState<string>('')

  /** ************ handle change ************************ */
  const selectChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    const { value } = event.target
    setSelectedOption(value)
  }

  /** ************ handle submit ************************ */
  console.log('-Select cat form: ', selectedOption)
  const handleSubmit = (): void => {
    const ids: IAlbumCatProps = {
      id: album.id,
      catID: selectedOption,
    }
    updateAlbumCat(ids)
  }

  // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  const categoryNow = album.category

  const categoryOptions = categoryData.map((c) => (
    <option key={c.id} value={c.id}>{c.title}</option>
  ))
  return (
    <SelectForm onSubmit={handleSubmit}>
      <h4>Categoria:</h4>

      <h5>{categoryNow && categoryNow.slug}</h5>
      <select
        defaultValue="DEFAULT"
        onChange={selectChange}
      >
        <option value="DEFAULT" disabled>
          valitse
        </option>
        <option value="null">none</option>
        {categoryOptions}
      </select>
      <SmallButton color="green">Vahvista</SmallButton>
    </SelectForm>
  )
}
