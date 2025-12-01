import { h, Host } from '@stencil/core'
import type { Meta, StoryObj } from '@stencil/storybook-plugin'
import { XncrInput } from './xncr-input'

const meta: Meta<JSX.IntrinsicElements['xncr-input']> = {
  title: 'XncrInput',
  component: XncrInput,
  parameters: {
    layout: 'centered',
  },
  argTypes: {

  },
  args: {
    idOverride: 'input-id'
  },
}

export default meta

type Story = StoryObj<JSX.IntrinsicElements['xncr-input']>

export const Primary: Story = {
  args: {

  },
  render: (props) => <xncr-input {...props} />,
}

export const WithButton: Story = {
  args: {
    button: 'A button'
  },
  argTypes: {
    onClicked: {
      control: false,
      action: 'button clicked'
    }
  },
  render: (props) => <xncr-input button={props.button} {...props} />,
}

export const WithLabel: Story = {
  args: {
    label: 'A label',
    labelPos: 'above'
  },
  argTypes: {
    labelPos: {
      control: 'select',
      options: ['above', 'side']
    }
  },
  render: (props) => <xncr-input label={props.label} labelPos={props.labelPos} {...props} />,
}

export const CombinedButtonLabel: Story = {
  args: {
    button: 'A button',
    label: 'A label',
    placeholder: 'A placeholder',
    value: 'A value',
  },
  argTypes: {
    onClicked: {
      control: false,
      action: 'button clicked'
    }
  },
  render: (props) => {
    return (
      <Host style={{
        maxWidth: '500px',
        display: 'flex',
        flexDirection: 'column',
        gap: '5px',
      }}>
        <div><span>Placeholder:</span>
          <xncr-input
            readOnly={true}
            placeholder={props.placeholder || 'A placeholder'}
            idOverride='input-1'
          /></div>
        <div><span>Value:</span>
          <xncr-input
            readOnly={true}
            value={props.value || 'A value'}
            idOverride='input-2'
          /></div>
        <div><span>Label Side:</span>
          <xncr-input
            readOnly={true}
            label={props.label || 'A label'}
            labelPos="side"
            value={props.value || 'A value'}
            idOverride='input-3'
          /></div>
        <div><span>Button:</span>
          <xncr-input
            readOnly={true}
            button={props.button || 'A button'}
            onClicked={props.onClicked}
            value={props.value || 'A value'}
            idOverride='input-4'
          /></div>
        <div><span>Label Side + Button:</span>
          <xncr-input
            readOnly={true}
            label={props.label || 'A label'}
            labelPos="side"
            button={props.button || 'A button'}
            onClicked={props.onClicked}
            value={props.value || 'A value'}
            idOverride='input-5'
          /></div>
        <div><span>Label Above:</span>
          <xncr-input
            readOnly={true}
            label={props.label || 'A label'}
            labelPos="above"
            value={props.value || 'A value'}
            idOverride='input-6'
          /></div>
        <div><span>Label Above + Button:</span>
          <xncr-input
            readOnly={true}
            label={props.label || 'A label'}
            labelPos="above"
            button={props.button || 'A button'}
            onClicked={(props.onClicked)}
            value={props.value || 'A value'}
            idOverride='input-7'
          /></div>
      </Host>
    )
  }
}
