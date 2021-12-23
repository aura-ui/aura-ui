import * as React from 'react';
import { styled, ComponentProps, VariantProps } from '@zephyr-ui/theme';

export type GridProps = ComponentProps<typeof Grid>;

/**
 * Grid is a layout component with a default property of ```display: grid```.
 * It renders a HTML div element by default.
 */
export const Grid = styled('div', {
  display: 'grid',
});
