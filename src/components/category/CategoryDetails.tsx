/* eslint-disable max-len */
import React, { FC } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { Category } from './Category'
import { ICategory } from './categoryTypes'
import { useCategory } from './useCategories'

interface MatchParams {
  id: string
}

type Props = RouteComponentProps<MatchParams>

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isCategory(category: any): category is ICategory {
  return 'id' in category && 'title' in category && 'slug' in category && 'content' in category
}

export const CategoryDetails: FC<Props> = ({ match }: Props): JSX.Element => {
  const { params } = match
  const { id } = params
  const response = useCategory(Number(id))
  const categoryData = response.data
  console.log('## Category 1: ', response)

  if (response.status === 'loading') {
    return <div>loading...</div>
  }

  if (response.status === 'success' && response.data) {
    console.log('## Category 2: ', response.data)
  }

  if (categoryData && isCategory(categoryData)) {
    console.log('## Category 2 data: ', categoryData)
    return (
      <div>
        Data:
        {categoryData.title}
        <Category
          id={categoryData.id}
          title={categoryData.title}
          slug={categoryData.slug}
          content={categoryData.content}
        />
      </div>
    )
  }

  return (
    <>
      {`View Account ID "${id}"`}
      {/* { categoryData} */}

    </>
  )
}
