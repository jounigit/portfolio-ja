import React, { FC, useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import toast from 'react-hot-toast'
import {
  IAlbumCatProps,
  useUpdateAlbumCategory,
} from '../../../hooks/useAlbums'
import { useCategoriesData } from '../../../hooks/useCategories'
import { IAlbum } from '../../../types'
import { SmallButton } from '../../atoms/Button'
import { useGoBack } from '../../../hooks/useGoBack'

const SelectForm = styled.form`
  max-width: 400px;
  height: 150px;
    border-radius: 5px;
    padding: 1.5rem;
`

type Props = {
  album: IAlbum
}

export const SelectAlbumCategory: FC<Props> = ({ album }): JSX.Element => {
  const categoryData = useCategoriesData()
  const { status: MutateStatus, mutate } = useUpdateAlbumCategory()
  const goBack = useGoBack()
  const [selectedOption, setSelectedOption] = useState<string>('')

  useEffect(() => {
    if (MutateStatus === 'success') {
      toast.success('Album category updated successfully.')
      goBack()
    }
  }, [MutateStatus, goBack])

  /** ************ handle change ************************ */
  const selectChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    const { value } = event.target
    setSelectedOption(value)
  }

  /** ************ handle submit ************************ */
  console.log('-select cat: ', selectedOption)
  const handleSubmit = (): void => {
    const ids: IAlbumCatProps = {
      id: album.id,
      catID: selectedOption,
    }
    mutate(ids)
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
