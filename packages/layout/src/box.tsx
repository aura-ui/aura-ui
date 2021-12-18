import { styled, ComponentProps } from '@zephyr-ui/theme';
import * as React from 'react';

type BoxStyledProps = ComponentProps<typeof Box>;

export interface BoxProps extends BoxStyledProps {}

/**
 * Box is a layout component that renders a HTML div element by default.
 */
export const Box = styled('div');
