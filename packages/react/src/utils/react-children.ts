import { Children, isValidElement } from 'react';

/**
 * Will only return valid children elements of a component
 *
 * @param children
 * @returns Array of valid `children` components
 */
export function getValidChildren(children: React.ReactNode) {
  return Children.toArray(children).filter((child) =>
    isValidElement(child)
  ) as React.ReactElement[];
}
