import { Story, Meta } from '@storybook/react/types-6-0'
import RegisterForm from '.'

export default {
  title: 'Form/RegisterForm',
  component: RegisterForm
} as Meta

export const Default: Story = () => <RegisterForm />
