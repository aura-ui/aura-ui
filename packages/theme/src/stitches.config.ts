import { CSS as StitchesCSS } from '@stitches/react';

import { styled, css, config, getCssText, globalCss, keyframes } from './stitches.shared';

export { styled, css, config, getCssText, globalCss, keyframes };

type CSS = StitchesCSS<typeof config>;

export type { CSS };
