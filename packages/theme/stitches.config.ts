import { CSS as StitchesCSS } from '@stitches/react';

import { styled, css, config, getCssText, globalCss, keyframes } from './stitches.shared';

export { styled, css, config, getCssText, globalCss, keyframes };

export type CSS = StitchesCSS<typeof config>;
