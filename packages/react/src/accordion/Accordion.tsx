import * as React from 'react';
import { styled, ComponentProps, keyframes } from '../theme';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { Flex } from '../layout';
import { ChevronDownIcon } from './ChevronDownIcon';

export type AccordionProps = ComponentProps<typeof AccordionPrimitive.Root>;

const StyledAccordionItem = styled(AccordionPrimitive.Item, {
  overflow: 'hidden',
  boxShadow: '0 1px 0 $colors$slate6',
  marginTop: 1,

  '&:focus-within': {
    position: 'relative',
    zIndex: 1,
    boxShadow: '0 0 0 2px $colors$blue8',
  },
});

type StyledTriggerProps = ComponentProps<typeof StyledTrigger>;

const StyledTrigger = styled(AccordionPrimitive.Trigger, Flex, {
  //resets
  all: 'unset',
  fontFamily: 'inherit',
  backgroundColor: 'transparent',
  //custom
  display: 'flex',
  color: 'inherit',
  width: '100%',
  p: '$4',
  fontSize: '$3',
  lineHeight: '$3',
  boxShadow: '0 1px 0 $colors$slate6',

  '&:hover': {
    backgroundColor: '$slate2',
  },
});

export interface AccordionTriggerProps extends StyledTriggerProps {}

export const AccordionTrigger = React.forwardRef<HTMLButtonElement, AccordionTriggerProps>(
  ({ justify = 'between', children, ...rest }, ref) => {
    return (
      <StyledHeader>
        <StyledTrigger justify={justify} ref={ref} {...rest}>
          {children}
          <StyledChevron>
            <ChevronDownIcon aria-hidden />
          </StyledChevron>
        </StyledTrigger>
      </StyledHeader>
    );
  }
);

const StyledChevron = styled('span', {
  transition: 'transform 300ms ease',
  '[data-state=open] &': { transform: 'rotate(180deg)' },
});

const StyledHeader = styled(AccordionPrimitive.Header, {
  all: 'unset',
  display: 'flex',
});

const slideDown = keyframes({
  from: { height: 0 },
  to: { height: 'var(--radix-accordion-content-height)' },
});

const slideUp = keyframes({
  from: { height: 'var(--radix-accordion-content-height)' },
  to: { height: 0 },
});

export const AccordionContent = styled(AccordionPrimitive.Content, {
  overflow: 'hidden',
  color: '$slate12',
  backgroundColor: '$slate2',
  p: '$5',

  '&[data-state="open"]': {
    animation: `${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
});

export const Accordion = styled(AccordionPrimitive.Root, {
  // boxShadow: '0 0 0 1px $colors$slate6',
  // br: '$3',
});
export const AccordionItem = StyledAccordionItem;
