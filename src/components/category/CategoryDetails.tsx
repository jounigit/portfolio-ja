/* eslint-disable max-len */
import React, { FC } from 'react'
import { useParams } from 'react-router-dom'
import { Category } from './Category'
// import { Category } from './Category'
import { useCategoriesData } from './useCategories'

type CParams = {
  id: string;
};

export const CategoryDetails: FC = (): JSX.Element => {
  const { id } = useParams<CParams>()
  const categoriesData = useCategoriesData()

  const category = categoriesData.find((c) => c.id === id)

  if (category === undefined) {
    return <div>Category is undefined.</div>
  }

  console.log('# CATEGORY data: ', categoriesData[0], ' ====', id)

  return (
    <div>
      <Category
        id={category.id}
        title={category.title}
        slug={category.slug}
        content={category.content}
        albums={category.albums}
        user={category.user}
      />
    </div>
  )
}

// return (
//   <>
//     {`View Account ID "${id}"`}
//     {/* { categoryData} */}

//   </>
// )
