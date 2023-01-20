import { styled } from '../theme';
import { Root } from '@radix-ui/react-separator';

/**
 * Separator is a layout component that visually or semantically separates content.
 */
export const Separator = styled(Root, {
  backgroundColor: '$slate6',
  '&[data-orientation=horizontal]': { height: 1, width: '100%' },
  '&[data-orientation=vertical]': { height: '100%', minHeight: '$4', width: 1, my: 'auto' },
});
