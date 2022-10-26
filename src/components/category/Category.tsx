import React, { FC } from 'react'
import { ICategory } from '../../types'
import {
  CategoryContainer, Title, Text,
} from './Category.styles'

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
