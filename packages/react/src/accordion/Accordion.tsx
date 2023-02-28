import * as React from 'react';
import { styled, ComponentProps, keyframes, VariantProps } from '../theme';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { Flex } from '../layout';
import { ChevronDownIcon } from './ChevronDownIcon';

type StyledTriggerProps = ComponentProps<typeof StyledTrigger>;

// TODO - prefer to use flex css styles once added to utils
const StyledTrigger = styled(AccordionPrimitive.Trigger, Flex, {
  //resets
  all: 'unset',
  fontFamily: 'inherit',
  backgroundColor: 'transparent',
  //custom
  display: 'flex',
  color: 'inherit',
  width: '100%',
  p: '$3',
  fontSize: '$3',
  lineHeight: '$3',
  boxShadow: '0 1px 0 $colors$slate6',
  gap: '$3',

  '&:hover': {
    backgroundColor: '$slate2',
  },
});

export interface AccordionTriggerProps extends StyledTriggerProps {
  triggerIcon?: boolean;
  reverse?: boolean;
}

export const AccordionTrigger = React.forwardRef<HTMLButtonElement, AccordionTriggerProps>(
  ({ triggerIcon = true, reverse = false, css, children, ...rest }, ref) => {
    return (
      <StyledHeader>
        <StyledTrigger
          direction={reverse ? 'rowReverse' : 'row'}
          css={{
            justifyContent: reverse ? 'start' : 'start',
            ...css,
          }}
          ref={ref}
          {...rest}
        >
          {children}
          {triggerIcon && (
            <StyledChevron
              css={{
                ml: reverse ? 0 : 'auto',
              }}
            >
              <ChevronDownIcon aria-hidden />
            </StyledChevron>
          )}
        </StyledTrigger>
      </StyledHeader>
    );
  }
);

const StyledChevron = styled('span', {
  display: 'flex',
  placeItems: 'center',
  color: '$slate11',
  transition: 'transform 300ms ease',
  '[data-state=open] &': { transform: 'rotate(180deg)', color: '$slate12' },
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

const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

const fadeOut = keyframes({
  from: { opacity: 1 },
  to: { opacity: 0 },
});

type StyledContentWrapperVariants = VariantProps<typeof StyledContentWrapper>;

const StyledContentWrapper = styled('div', {
  variants: {
    depth: {
      1: {
        p: '$1',
      },
      2: {
        p: '$2',
      },
      3: {
        p: '$3',
      },
      4: {
        p: '$4',
      },
      5: {
        p: '$5',
      },
    },
  },

  defaultVariants: {
    depth: '3',
  },
});

const StyledAccordionContent = styled(AccordionPrimitive.Content, {
  overflow: 'hidden',
  color: '$slate12',
  backgroundColor: '$slate2',

  '&[data-state="open"]': {
    animation: `${slideDown} 300ms cubic-bezier(.27,.15,.26,1)`,

    [`& ${StyledContentWrapper}`]: {
      animation: `${fadeIn} 600ms cubic-bezier(.27,.15,.26,1)`,
    },
  },
  '&[data-state="closed"]': {
    animation: `${slideUp} 200ms cubic-bezier(.27,.15,.26,1)`,

    [`& ${StyledContentWrapper}`]: {
      animation: `${fadeOut} 200ms cubic-bezier(.27,.15,.26,1)`,
    },
  },
});

export type AccordionContentProps = ComponentProps<typeof StyledAccordionContent> &
  StyledContentWrapperVariants;
export const AccordionContent = React.forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ children, ...rest }, ref) => {
    return (
      <StyledAccordionContent>
        <StyledContentWrapper ref={ref} {...rest}>
          {children}
        </StyledContentWrapper>
      </StyledAccordionContent>
    );
  }
);

export type AccordionItemProps = ComponentProps<typeof AccordionItem>;
export const AccordionItem = styled(AccordionPrimitive.Item, {
  overflow: 'hidden',
  boxShadow: '0 1px 0 $colors$slate6',
  marginTop: 1,

  '&:focus-within': {
    position: 'relative',
    zIndex: 1,
    boxShadow: '0 0 0 2px $colors$blue8',
  },
});

export type AccordionProps = ComponentProps<typeof Accordion>;
export const Accordion = styled(AccordionPrimitive.Root, {
  minWidth: 300,
  br: '$2',

  variants: {
    border: {
      true: {
        boxShadow: '0 0 0 1px $colors$slate6',

        [`& ${AccordionItem}`]: {
          '&:first-child': {
            marginTop: 0,
            borderTopLeftRadius: '$2',
            borderTopRightRadius: '$2',
          },

          '&:last-child': {
            borderBottomLeftRadius: '$2',
            borderBottomRightRadius: '$2',
          },
        },
      },
    },
  },
});
