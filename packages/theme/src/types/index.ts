export type ColorScheme =
  | 'slate'
  | 'red'
  | 'crimson'
  | 'violet'
  | 'blue'
  | 'green'
  | 'orange'
  | 'yellow'
  | 'blackA'
  | 'whiteA';

export type ColorSchemeBlackText = Extract<ColorScheme, 'yellow'>;
