import { newE2EPage } from '@stencil/core/testing';

describe('xncr-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<xncr-input></xncr-input>');

    const element = await page.find('xncr-input');
    expect(element).toHaveClass('hydrated');
  });
});
