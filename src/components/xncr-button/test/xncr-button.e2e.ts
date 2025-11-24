import { newE2EPage } from '@stencil/core/testing';

describe('xncr-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<xncr-button></xncr-button>');

    const element = await page.find('xncr-button');
    expect(element).toHaveClass('hydrated');
  });
});
