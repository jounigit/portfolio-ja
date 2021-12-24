import React, { FC } from 'react'
import {
  CategoryContainer, Title, Text,
} from './Category.styles'
import { ICategory } from './categoryTypes'

export const Category: FC<ICategory> = ({
  title, content,
}) => (
  <>

    <CategoryContainer>

      <Title>
        <h2>
          {title}
        </h2>
      </Title>

      <Text>
        <p>
          {content}
        </p>
      </Text>

    </CategoryContainer>

  </>
)
