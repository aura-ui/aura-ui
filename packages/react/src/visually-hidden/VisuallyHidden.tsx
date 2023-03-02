import * as React from 'react';
import { styled, ComponentProps } from '../theme';
import * as VisuallyHiddenPrimitive from '@radix-ui/react-visually-hidden';

export type VisuallyHiddenProps = ComponentProps<typeof VisuallyHidden>;

export const VisuallyHidden = styled(VisuallyHiddenPrimitive.Root);
