import { Booleanish } from '.';

export const dataAttr = (condition: boolean | undefined) =>
  (condition ? '' : undefined) as Booleanish;
