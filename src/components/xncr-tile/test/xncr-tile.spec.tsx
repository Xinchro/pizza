import { newSpecPage } from '@stencil/core/testing';
import { XncrTile } from '../xncr-tile';

describe('xncr-tile', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XncrTile],
      html: `<xncr-tile></xncr-tile>`,
    });
    expect(page.root).toEqualHtml(`
      <xncr-tile>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </xncr-tile>
    `);
  });
});
