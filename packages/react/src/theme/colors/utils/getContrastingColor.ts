import { ColorScheme, ColorSchemeBlackText } from '../../types';

function isOfColorSchemeBlackTextType(value: string): value is ColorSchemeBlackText {
  return ['sky', 'mint', 'lime', 'yellow', 'amber'].includes(value);
}

/**
 * This function is responsible for taking in the user selected colorScheme and returning the appropriate text color value for solid component variants.
 * This utility is specific to Radix colors and should not be used for arbitrary color values as it will not produce expected results.
 *
 * @param {string} colorScheme - A list of available colorSchemes.
 *
 * @example
 * getContrastingColor('violet')
 */
export const getContrastingColor = (colorScheme?: ColorScheme): string => {
  if (colorScheme && isOfColorSchemeBlackTextType(colorScheme)) {
    return 'black';
  } else {
    return `white`;
  }
};
