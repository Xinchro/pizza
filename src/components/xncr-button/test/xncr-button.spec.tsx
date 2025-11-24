import { newSpecPage } from '@stencil/core/testing';
import { XncrButton } from '../xncr-button';

describe('xncr-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XncrButton],
      html: `<xncr-button></xncr-button>`,
    });
    expect(page.root).toEqualHtml(`
      <xncr-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </xncr-button>
    `);
  });
});
