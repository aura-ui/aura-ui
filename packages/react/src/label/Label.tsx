import { styled, ComponentProps } from '../theme';
import * as LabelPrimitive from '@radix-ui/react-label';

export type LabelProps = ComponentProps<typeof LabelPrimitive.Root>;

const StyledLabel = styled(LabelPrimitive.Root, {
  fontFamily: 'inherit',
  userSelect: 'none',

  variants: {
    size: {
      1: {
        fontSize: '$1',
        lineHeight: '$1',
      },
      2: {
        fontSize: '$2',
        lineHeight: '$2',
      },
      3: {
        fontSize: '$3',
        lineHeight: '$3',
      },
    },
    weight: {
      1: {
        fontWeight: '$4',
      },
      2: {
        fontWeight: '$5',
      },
      3: {
        fontWeight: '$6',
      },
    },
  },

  defaultVariants: {
    size: '1',
    weight: '1',
  },
});

export const Label = StyledLabel;
