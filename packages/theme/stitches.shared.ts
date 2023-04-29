import { createStitches, PropertyValue, ScaleValue, CSS as StitchesCSS } from '@stitches/react';
import { darkThemeConfig, themeConfig } from './theme';

export const { styled, css, config, theme, createTheme, reset, getCssText, globalCss, keyframes } =
  createStitches(themeConfig);

export const resets = globalCss({
  '*, *::before, *::after': {
    boxSizing: 'inherit',
  },
  'html, body': {
    padding: 0,
    margin: 0,
    fontFamily: `-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`,
  },
});

export const darkTheme = createTheme('dark-theme', darkThemeConfig);
export type CSS = StitchesCSS<typeof config>;
export type { ComponentProps, VariantProps, PropertyValue, ScaleValue } from '@stitches/react';
