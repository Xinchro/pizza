import { h } from '@stencil/core'
import type { Meta, StoryObj } from '@stencil/storybook-plugin'
import { XncrButton } from './xncr-button'

const meta: Meta<XncrButton> = {
  title: 'XncrButton',
  component: XncrButton,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary'],
    },
    noiseAnim: {
      control: 'boolean',
    }
  },
  args: {
    variant: 'primary',
    noiseAnim: false,
  },
}

export default meta

type Story = StoryObj<XncrButton>

export const Primary: Story = {
  args: {
    variant: 'primary',
    noiseAnim: false,
  },
  render: (props) => <xncr-button {...props} >A button</xncr-button>,
}
