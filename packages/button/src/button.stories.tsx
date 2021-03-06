import * as React from 'react';
import { Button } from './button';
import { PlusIcon, TriangleDownIcon, ArrowUpIcon } from '@radix-ui/react-icons';
import { styled } from '@aura-ui/theme';
import { Spinner } from '@aura-ui/spinner';

export default {
  title: 'Components/Form/Button',
};

const Flex = styled('div', {
  display: 'flex',
  gap: '$4',
  flexDirection: 'column',
  alignItems: 'flex-start',
});

export const Default = () => <Button>Button</Button>;
export const Outline = () => <Button variant="outline">Button</Button>;
export const Solid = () => <Button variant="solid">Button</Button>;
export const Ghost = () => <Button variant="ghost">Button</Button>;
export const ColorScheme = () => <Button colorScheme="purple">Button</Button>;
export const Loading = () => <Button isLoading>Send</Button>;
export const LoadingWithText = () => (
  <Button loadingText="Submitting..." isLoading>
    Send
  </Button>
);
export const SpinnerPlacementEnd = () => (
  <Button loadingText="Sending..." isLoading spinnerPlacement="end">
    Send
  </Button>
);
export const LoadingColorScheme = () => (
  <Button loadingText="Sending..." isLoading colorScheme="purple">
    Send
  </Button>
);
export const LoadingVariants = () => (
  <Flex>
    <Button loadingText="Sending..." isLoading spinner={<Spinner variant="circular" />}>
      Send
    </Button>
    <Button loadingText="Sending..." isLoading spinner={<Spinner variant="circular2" />}>
      Send
    </Button>
    <Button loadingText="Sending..." isLoading spinner={<Spinner variant="circular-fluid" />}>
      Send
    </Button>
  </Flex>
);
export const WithLeftIcon = () => (
  <Button variant="outline" leftIcon={<PlusIcon />}>
    Add To Cart
  </Button>
);
export const WithRightIcon = () => (
  <Button variant="outline" rightIcon={<TriangleDownIcon />}>
    Add File
  </Button>
);
export const LeftAndRightIcon = () => (
  <Button variant="outline" leftIcon={<ArrowUpIcon />} rightIcon={<ArrowUpIcon />}>
    Upload
  </Button>
);
export const ClickEvent = () => (
  <Button onClick={() => alert(`This uses react-aria's onPress under the hood!`)}>Click me!</Button>
);
