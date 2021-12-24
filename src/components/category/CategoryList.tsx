/* eslint-disable no-var */
/* eslint-disable vars-on-top */
import React from 'react'
import { CategoryListItem } from './CategoryListItem'
import { useCategories } from './useCategories'

export const CategoryList = (): JSX.Element => {
  const categories = useCategories()

  if (categories.error instanceof Error) {
    return (
      <div>
        An error occurred:
        {categories.error.message}
      </div>
    )
  }

  if (categories.status === 'loading') {
    return <div>loading...</div>
  }

  console.log('CATEGORIES 2: ', categories.data)

  const mappedData = categories.data?.map((c) => (
    <CategoryListItem key={c.id} id={c.id} title={c.title} slug={c.slug} />
  ))

  return (
    <>
      <p>kato konsoli</p>
      { mappedData && mappedData }
    </>
  )
}
