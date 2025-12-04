import { Component, Event, EventEmitter, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'xncr-tile',
  styleUrl: 'xncr-tile.css',
  shadow: true,
})
export class XncrTile {
  @Prop() headingLevel: 1 | 2 | 3 | 4 | 5 = 3;
  @Prop() footerAlign: 'left' | 'center' | 'right' = 'left';
  @Prop() href?: string;
  @Prop() rel?: string;
  @Prop() clickable?: boolean;
  @Event() clicked: EventEmitter<MouseEvent>;

  render() {
    const HeadingTag = `h${this.headingLevel}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
    const subheadingLevel = Math.min(this.headingLevel + 1, 6);
    const SubheadingTag = `h${subheadingLevel}` as 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

    // Warn if both href and clickable are set
    if (this.href && this.clickable) {
      console.warn('xncr-tile: Both href and clickable are set. href takes priority.');
    }

    const content = [
      <HeadingTag class="heading">
        <slot name='heading'></slot>
      </HeadingTag>,
      <SubheadingTag class="subheading">
        <slot name='subheading'></slot>
      </SubheadingTag>,
      <hr />,
      <div class="content">
        <slot name='content'></slot>
      </div>,
      <hr />,
      <div class="footer" style={{ textAlign: this.footerAlign }}>
        <slot name='footer'></slot>
      </div>
    ];

    if (this.href) {
      return (
        <Host>
          <a href={this.href} rel={this.rel}>
            {content}
          </a>
        </Host>
      );
    }

    if (this.clickable) {
      return (
        <Host>
          <button type="button" onClick={(e) => this.clicked.emit(e)}>
            {content}
          </button>
        </Host>
      );
    }

    return (
      <Host>
        <div class="display-only">
          {content}
        </div>
      </Host>
    );
  }
}
