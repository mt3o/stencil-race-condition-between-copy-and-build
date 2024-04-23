import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'race-condition',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      copy: [
        //Commenting out this section, and building once, works as walkaround
        {src:'../loader',dest:'loader'},
        {src:'../dist/esm',dest:'esm'}
      ]
    },
  ],
  testing: {
    browserHeadless: "new",
  },
};
