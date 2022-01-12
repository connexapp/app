import { Story, Meta } from '@storybook/react/types-6-0'
import React from 'react'
import Card, { CardProps } from '.'

export default {
  title: 'Card',
  component: Card,
  args: {
    thumbnailUrl:
      'https://img-c.udemycdn.com/course/240x135/1879018_95b6_3.jpg',
    title: 'NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)',
    authorName: 'Cezar patrizzi martin',
    price: 'R$ 219,90',
    promotionPrice: 'R$ 500'
  }
} as Meta

export const Desktop: Story<CardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <Card {...args} />
  </div>
)

export const Mobile: Story<CardProps> = (args) => (
  <div style={{ width: '100%' }}>
    <Card {...args} />
  </div>
)

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  }
}
