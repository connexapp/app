import { Story, Meta } from '@storybook/react/types-6-0'
import CardSlider, { CardSliderProps } from '.'

const items = [
  {
    img: 'https://img-c.udemycdn.com/course/240x135/1879018_95b6_3.jpg',
    title: 'NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)',
    authorName: 'NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)',
    price: 'R$ 219,90'
  },
  {
    img: 'https://img-c.udemycdn.com/course/240x135/1383810_0c42.jpg',
    title: 'NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)',
    authorName: 'NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)',
    price: 'R$ 219,90',
    promotionPrice: 'R$ 500'
  },
  {
    img: 'https://img-c.udemycdn.com/course/240x135/775066_a5bb_5.jpg',
    title: 'NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)',
    authorName: 'NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)',
    price: 'R$ 219,90',
    promotionPrice: 'R$ 500'
  },
  {
    img: 'https://img-c.udemycdn.com/course/240x135/3003490_50a2_4.jpg',
    title: 'NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)',
    authorName: 'NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)',
    price: 'R$ 219,90',
    promotionPrice: 'R$ 500'
  },
  {
    img: 'https://img-c.udemycdn.com/course/240x135/1879018_95b6_3.jpg',
    title: 'NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)',
    authorName: 'NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)',
    price: 'R$ 219,90',
    promotionPrice: 'R$ 500'
  },
  {
    img: 'https://img-c.udemycdn.com/course/240x135/1879018_95b6_3.jpg',
    title: 'NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)',
    authorName: 'NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)',
    price: 'R$ 219,90',
    promotionPrice: 'R$ 500'
  }
]

export default {
  title: 'CardSlider',
  component: CardSlider,
  args: { items },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: Story<CardSliderProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <CardSlider {...args} />
  </div>
)
