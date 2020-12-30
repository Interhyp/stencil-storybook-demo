import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'stencil-storybook-blog',
  outputTargets: [
    {
      type: 'dist',
    },
    reactOutputTarget({
      componentCorePackage: '../../dist/types',
      proxiesFile: './component-library-react/src/components.ts',
    }),
  ],
  plugins: [
    sass(),
  ],
  watchIgnoredRegex: /\.stories\.(js|jsx|ts|tsx|mdx)$/, // ignore storybook files in --watch mode
};
