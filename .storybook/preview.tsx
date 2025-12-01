import { setCustomElementsManifest } from '@stencil/storybook-plugin';
import customElements from '../dist-stencil/components.json';
import '../dist-stencil/pizza/pizza.css';

(async () => {
  if (process.env.NODE_ENV !== 'production') {
    console.info('Storybook running in development mode, loading Stencil components...');
    const { defineCustomElements } = await import('../loader/index.js');
    defineCustomElements();
  } else {
    console.info('Storybook running in production mode.');
  }
})();
setCustomElementsManifest(customElements)
