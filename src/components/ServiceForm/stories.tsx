import { Story, Meta } from '@storybook/react/types-6-0'
import ServiceForm from '.'

export default {
  title: 'ServiceForm',
  component: ServiceForm
} as Meta

export const Default: Story = () => <ServiceForm />
