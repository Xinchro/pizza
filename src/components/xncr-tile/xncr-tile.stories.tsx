import { h } from '@stencil/core'
import type { Meta, StoryObj } from '@stencil/storybook-plugin'
import { XncrTile } from './xncr-tile'

const meta: Meta<JSX.IntrinsicElements['xncr-tile']> = {
  title: 'XncrTile',
  component: XncrTile,
  parameters: {
    layout: 'centered',
  },
}

export default meta

type Story = StoryObj<JSX.IntrinsicElements['xncr-tile']>

export const Primary: Story = {
  argTypes: {
    numberOfCards: {
      control: 'number',
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
    inline: false,
    headingLevel: 3,
    footerAlign: 'left',
    heading: 'Heading',
    subheading: 'Subheading',
    content: 'Some content for the main section',
    footer: 'Some footer content',
  },
  render: (args: any = {}) => {
    const { numberOfCards = 1, inline = false, headingLevel = 3, footerAlign = 'left', heading = 'Heading', subheading = 'Subheading', content = 'Content', footer = 'Footer' } = args;
    return (
      <div style={{ display: 'flex', gap: '10px', flexDirection: inline ? 'row' : 'column' }}>
        {Array.from({ length: numberOfCards }).map((_, index) => (
          <xncr-tile key={index} headingLevel={headingLevel} footerAlign={footerAlign}>
            <span slot="heading">{heading}</span>
            <span slot="subheading">{subheading}</span>
            <span slot="content">{content}</span>
            <span slot="footer">{footer}</span>
          </xncr-tile>
        ))}
      </div>
    );
  },
} as any;

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
  render: (args: any = {}) => {
    const { subheading = 'Subheading', footer = 'Footer' } = args;
    return (
      <div style={{ display: 'flex', gap: '10px', flexDirection: 'row' }}>
        <xncr-tile headingLevel={1}>
          <span slot="heading">Regular text</span>
          <span slot="subheading">{subheading}</span>
          <p slot="content">This is some regular text of stuff to put in there</p>
          <span slot="footer">{footer}</span>
        </xncr-tile>
        <xncr-tile headingLevel={3} footerAlign={'center'}>
          <span slot="heading">Text with an image</span>
          <span slot="subheading">{subheading}</span>
          <div slot="content">
            <p>A paragraph</p>
            <img src="https://unsplash.it/200/100" alt="Example" />
          </div>
          <span slot="footer">{footer}</span>
        </xncr-tile>
        <xncr-tile headingLevel={2} footerAlign={'right'}>
          <span slot="heading">Just an image</span>
          <span slot="subheading">{subheading}</span>
          <img slot="content" src="https://unsplash.it/200/100" alt="Example" />
          <span slot="footer">{footer}</span>
        </xncr-tile>
        <xncr-tile headingLevel={5} footerAlign={'center'}>
          <span slot="heading">Mixed garbáge</span>
          <span slot="subheading">{subheading}</span>
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
          <span slot="footer">{footer}</span>
        </xncr-tile>
      </div>
    );
  },
}

export const Clickable: Story = {
  parameters: {
    controls: {
      disable: true,
    },
  },
  argTypes: {
    onClicked: {
      control: false,
      action: 'tile clicked'
    }
  },
  render: (props) => (
    <div style={{ display: 'flex', gap: '10px', flexDirection: 'row' }}>
      <xncr-tile
        clickable={true}
        headingLevel={2}
        onClicked={props.onClicked}
      >
        <span slot="heading">First Clickable</span>
        <span slot="subheading">Button interaction</span>
        <span slot="content">This tile emits a clicked event when you click it. Check the Actions panel.</span>
        <span slot="footer">Interactive</span>
      </xncr-tile>
      <xncr-tile
        clickable={true}
        headingLevel={2}
        footerAlign="center"
        onClicked={props.onClicked}
      >
        <span slot="heading">Second Clickable</span>
        <span slot="subheading">Another button</span>
        <span slot="content">This is another clickable tile. Check the Actions panel to see the event fired.</span>
        <span slot="footer">Also interactive</span>
      </xncr-tile>
    </div>
  ),
}

export const Links: Story = {
  parameters: {
    controls: {
      disable: true,
    },
  },
  render: () => (
    <div style={{ display: 'flex', gap: '10px', flexDirection: 'row' }}>
      <xncr-tile
        href="/?path=/story/xncrtile--links"
        headingLevel={2}
      >
        <span slot="heading">Link Tile</span>
        <span slot="subheading">Link to this story page</span>
        <span slot="content">This tile is an anchor element. Supports Ctrl+Click and right-click context menu.</span>
        <span slot="footer">Anchor mode</span>
      </xncr-tile>
      <xncr-tile
        href="/?path=/story/xncrtile--links"
        rel="noopener noreferrer"
        headingLevel={2}
        footerAlign="right"
      >
        <span slot="heading">Link with rel</span>
        <span slot="subheading">Anchor with security attribute</span>
        <span slot="content">This tile has rel="noopener noreferrer" for security when opening in new tabs.</span>
        <span slot="footer">With rel</span>
      </xncr-tile>
    </div>
  ),
}
