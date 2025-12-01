import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'pizza',
  globalStyle: 'src/global/global.css',
  outputTargets: [
    {
      type: 'dist',
      dir: 'dist-stencil',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      dir: 'dist-stencil',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: true
    },
    {
      type: 'docs-readme',
    },
    {
      type: "www",
      serviceWorker: null, // disable service workers
    },
    {
      type: 'docs-json',
      file: 'dist-stencil/components.json'
    }
  ],
  testing: {
    browserHeadless: "shell",
  },
};
