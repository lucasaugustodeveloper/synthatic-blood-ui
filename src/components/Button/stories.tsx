import { Meta, StoryObj } from '@storybook/react'

import Button from '.'

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button
}

type Story = StoryObj<typeof Button>

export const Basic: Story = {
  render: () => <Button text="Button" fullWidth />
}

export default meta
