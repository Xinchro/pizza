import { newE2EPage } from '@stencil/core/testing';

describe('xncr-tile', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<xncr-tile></xncr-tile>');

    const element = await page.find('xncr-tile');
    expect(element).toHaveClass('hydrated');
  });
});
