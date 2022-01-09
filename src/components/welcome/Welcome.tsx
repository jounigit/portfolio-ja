import React, { FC } from 'react'
import { Text } from '../atoms'
import { StyledWelcome, Item } from './Welcome.styles'

export const Welcome: FC = () => (

  <StyledWelcome>
    <Item>
      <Text muted>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur
        voluptatum laborum numquam blanditiis harum quisquam eius
        sed odit fugiat iusto fuga praesentium optio, eaque rerum!
        Provident similique accusantium nemo autem.
        Veritatis obcaecati tenetur iure eius earum ut molestias architecto
        voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit
        sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis
        quas aliquid.
      </Text>
    </Item>
    <Item>
      <h3>Awards</h3>
    </Item>
  </StyledWelcome>

)