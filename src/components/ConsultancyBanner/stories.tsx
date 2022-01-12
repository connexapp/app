import { Story, Meta } from '@storybook/react/types-6-0'
import ConsultancyBanner, { ConsultancyBannerProps } from '.'

export default {
  title: 'ConsultancyBanner',
  component: ConsultancyBanner,
  args: {
    img: 'https://img-c.udemycdn.com/course/240x135/1879018_95b6_3.jpg',
    title: 'NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)',
    subtitle:
      'Vue.js is an awesome JavaScript Framework for building Frontend Applications! VueJS mixes the Best of Angular + React!',
    authorName: 'Cezar pattrizzi martin',
    price: 'R$ 219,90',
    promotionPrice: 'R$ 500'
  }
} as Meta

export const Default: Story<ConsultancyBannerProps> = (args) => (
  <ConsultancyBanner {...args} />
)
