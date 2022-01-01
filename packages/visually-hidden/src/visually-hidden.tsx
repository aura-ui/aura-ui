/**
 * 📝 Notes for Contributors:
 *
 * - This template serves as a starting point for building on Radix components.
 * - Add packages imported below and any other packages you need for the VisuallyHidden component to package.json
 * - Ensure you explore Radix documentation for VisuallyHidden to ensure all necessary props can be passed through and also to help you decide on reasonable defaults and customizations.
 *
 * @see Radix docs for VisuallyHidden: https://www.radix-ui.com/docs/primitives/components/visually-hidden
 */

import * as React from 'react';
import { ComponentProps } from '@zephyr-ui/theme';
import * as RadixVisuallyHidden from '@radix-ui/react-visually-hidden';

export type VisuallyHiddenBaseProps = ComponentProps<typeof RadixVisuallyHidden.Root>;

export interface VisuallyHiddenProps extends VisuallyHiddenBaseProps {}

export const VisuallyHidden = (props: VisuallyHiddenProps) => {
  return <RadixVisuallyHidden.Root>{props.children}</RadixVisuallyHidden.Root>;
};
