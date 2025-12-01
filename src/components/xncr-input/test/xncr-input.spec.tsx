import { newSpecPage } from '@stencil/core/testing';
import { XncrInput } from '../xncr-input';

describe('xncr-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XncrInput],
      html: `<xncr-input></xncr-input>`,
    });
    expect(page.root).toEqualHtml(`
      <xncr-input>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </xncr-input>
    `);
  });
});
