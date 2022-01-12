import { Story, Meta } from '@storybook/react/types-6-0'
import Button, { ButtonProps } from '.'

export default {
  title: 'Button',
  component: Button
} as Meta

export const Default: Story<ButtonProps> = (args) => <Button {...args} />

Default.args = {
  children: 'Entrar'
}

export const WithLink: Story<ButtonProps> = (args) => <Button {...args} />

WithLink.args = {
  children: 'Entrar',
  as: 'a',
  href: '/#'
}
