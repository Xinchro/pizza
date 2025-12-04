import { h } from '@stencil/core'
import type { Meta, StoryObj } from '@stencil/storybook-plugin'
import { XncrTile } from './xncr-tile'

interface XncrTileStoryArgs {
  numberOfCards: number
  headingLevel: 1 | 2 | 3 | 4 | 5
  inline: boolean
  footerAlign: 'left' | 'center' | 'right'
  heading: string
  subheading: string
  content: string
  footer: string
}

const meta: Meta<XncrTileStoryArgs> = {
  title: 'XncrTile',
  component: XncrTile,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    numberOfCards: {
      number: 1,
      range: { min: 1, max: 10, step: 1 },
      description: 'Number of cards to display',
    },
    inline: {
      control: 'boolean',
      description: 'Whether the tiles are displayed inline',
    },
    headingLevel: {
      control: 'select',
      options: [1, 2, 3, 4, 5],
      description: 'The heading level to use (1-5 for h1-h5)',
    },
    footerAlign: {
      control: 'select',
      options: ['left', 'center', 'right'],
      description: 'Alignment of the footer content',
    },
    heading: {
      control: 'text',
      description: 'Content for the heading slot',
    },
    subheading: {
      control: 'text',
      description: 'Content for the subheading slot',
    },
    content: {
      control: 'text',
      description: 'Content for the main content slot',
    },
    footer: {
      control: 'text',
      description: 'Content for the footer slot',
    },
  },
  args: {
    numberOfCards: 1,
    headingLevel: 1,
    inline: false,
    footerAlign: 'left',
    heading: 'Heading',
    subheading: 'Subheading',
    content: 'Some content for the main section',
    footer: 'Some footer content',
  },
}

export default meta

type Story = StoryObj<XncrTileStoryArgs>

export const Primary: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '10px', flexDirection: args.inline ? 'row' : 'column' }}>
      {Array.from({ length: args.numberOfCards }).map((_, index) => (
        <xncr-tile key={index} headingLevel={args.headingLevel} footerAlign={args.footerAlign}>
          <span slot="heading">{args.heading}</span>
          <span slot="subheading">{args.subheading}</span>
          <span slot="content">{args.content}</span>
          <span slot="footer">{args.footer}</span>
        </xncr-tile>
      ))}
    </div>
  ),
}

export const MixedContent: Story = {
  args: {
  },
  parameters: {
    controls: {
      disable: true,
    },
  },
  argTypes: {

  },
  decorators: null,
  render: (args) => (
    <div style={{ display: 'flex', gap: '10px', flexDirection: 'row' }}>
      <xncr-tile headingLevel={1}>
        <span slot="heading">Regular text</span>
        <span slot="subheading">{args.subheading}</span>
        <p slot="content">This is some regular text of stuff to put in there</p>
        <span slot="footer">{args.footer}</span>
      </xncr-tile>
      <xncr-tile headingLevel={3} footerAlign={'center'}>
        <span slot="heading">Text with an image</span>
        <span slot="subheading">{args.subheading}</span>
        <div slot="content">
          <p>A paragraph</p>
          <img src="https://unsplash.it/200/100" alt="Example" />
        </div>
        <span slot="footer">{args.footer}</span>
      </xncr-tile>
      <xncr-tile headingLevel={2} footerAlign={'right'}>
        <span slot="heading">Just an image</span>
        <span slot="subheading">{args.subheading}</span>
        <img slot="content" src="https://unsplash.it/200/100" alt="Example" />
        <span slot="footer">{args.footer}</span>
      </xncr-tile>
      <xncr-tile headingLevel={5} footerAlign={'center'}>
        <span slot="heading">Mixed garbáge</span>
        <span slot="subheading">{args.subheading}</span>
        <div slot="content" style={{ display: 'flex', flexDirection: 'column', gap: '4px', alignItems: 'center', background: '#444' }}>
          <span>Text with</span>
          <span style={{ fontSize: '20px', fontWeight: 'bold', color: 'red' }}>weird</span>
          <span style={{ fontSize: '40px', fontWeight: 'bolder', color: 'cyan' }}>styling</span>
          <span style={{ fontSize: '2px', fontWeight: 'bold', color: 'black' }}>,fancy</span>
          <ul>
            <li>also</li>
            <li style={{ listStyle: 'cjk-decimal' }}>a</li>
            <li style={{ listStyle: 'myanmar', fontWeight: 'bolder' }}>list</li>
          </ul>
        </div>
        <span slot="footer">{args.footer}</span>
      </xncr-tile>
    </div>
  ),
}
