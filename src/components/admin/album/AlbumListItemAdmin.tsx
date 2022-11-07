import React, { FC } from 'react'
import styled from 'styled-components'

const StyledTable = styled.table`
  width: 100%;
  border: none;
  /* border-collapse: collapse; */
  /* border-collapse: separate; */
  /* border-spacing: 5px 10px; */

  td,
  th {
    border: none;
  }
  /* td,
  th {
    border: 1px solid;
  } */

  td {
    padding: 5px 10px;
  }

  tbody tr {
    :nth-of-type(odd) {
      background-color: #efefef;
    }
    :hover {
      background-color: lightpink;
    }
  }
  thead > tr {
    background-color: #c2c2c2;
  }
`

interface ItemProps {
    id: string,
    title: string,
    info: string | undefined,
    // pictures: string[]
}

export const AlbumListItemAdmin:
FC<ItemProps> = ({
  id, title, info,
}) => (
  <StyledTable>
    <thead>
      <tr>
        <th colSpan={2}>{title}</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{id}</td>
        <td>{info}</td>
      </tr>
    </tbody>
  </StyledTable>
)
