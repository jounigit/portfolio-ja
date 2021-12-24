import React from 'react'
import { Link } from 'react-router-dom'
import { CategoryContainer, LinkText, TitleListItem } from './Category.styles'
import { ICategoryListItem } from './categoryTypes'

export const CategoryListItem: React.FC<ICategoryListItem> = ({
  id, title, slug,
}) => (
  <CategoryContainer>
    {console.log(slug)}
    <TitleListItem>
      <h3>
        {title}
      </h3>
    </TitleListItem>
    <LinkText>
      <Link to={`/category/${id}`}>
        Katso tiedot
      </Link>

    </LinkText>
  </CategoryContainer>
)
