type Booleanish = boolean | 'true' | 'false';

/**
 * Handles setting data attributes based on boolean condition passed to it.
 *
 * @param {string} condition - A list of available colorSchemes.
 *
 * @example
 * <Button data-loading={dataAttr(loading)} />
 */
export const dataAttr = (condition: boolean | undefined) =>
  (condition ? '' : undefined) as Booleanish;

/**
 * Handles setting aria attributes based on boolean condition passed to it.
 *
 * @param {string} condition - A list of available colorSchemes.
 *
 * @example
 * <Button aria-disabled={ariaAttr(disabled || loading)} />
 */
export const ariaAttr = (condition: boolean | undefined) =>
  (condition ? true : undefined) as Booleanish;
