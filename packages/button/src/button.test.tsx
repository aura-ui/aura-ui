/**
 * 📝 Notes for Contributors:
 *
 * - Ensure you write tests for component behavior defined in the proposal.
 * - Ensure you write tests for the accessibility and interactions.
 * - No snapshot tests for components please! 🙂
 *
 * @see Testing Guide: ADD LINK HERE
 */

import * as React from 'react';
import { testA11y, render, screen } from '@aura-ui/test-utils';
import { Button } from '../src';
import { PlusIcon, TriangleDownIcon } from '@radix-ui/react-icons';

it('passes a11y test', async () => {
  await testA11y(<Button>Hello World</Button>);
});

test('renders with icons', () => {
  const { getByText } = render(
    <div>
      <Button leftIcon={<PlusIcon />}>Add To Cart</Button>
      <Button rightIcon={<TriangleDownIcon />}>Add File</Button>
    </div>
  );
  expect(getByText('Add To Cart')).toBeTruthy();
  expect(getByText('Add File')).toBeTruthy();
});

test('default loadingText appears when isLoading', () => {
  const { getByTestId } = render(
    <Button data-testid="btn" isLoading>
      Send
    </Button>
  );
  expect(getByTestId('btn')).toHaveAttribute('data-loading');

  // visually hidden 'Loading...' label should exist by default
  screen.getByText('Loading...');
});

test('custom loadingText appears when isLoading', () => {
  render(
    <Button loadingText="Sending..." isLoading>
      Send
    </Button>
  );
  screen.getByText('Sending...');
});

test('contains correct role and aria attributes', () => {
  const { rerender } = render(<Button>Hello</Button>);

  // button has role="button"
  let button = screen.getByRole('button');
  expect(button).not.toHaveAttribute('aria-disabled');

  // isDisabled sets aria-disabled="true"
  rerender(<Button isDisabled>Hello</Button>);
  button = screen.getByRole('button');
  expect(button).toHaveAttribute('aria-disabled');

  // isLoading sets aria-disabled="true"
  rerender(<Button isLoading>Hello World</Button>);
  button = screen.getByRole('button');
  expect(button).toHaveAttribute('aria-disabled');
  expect(button).toHaveAttribute('data-loading', '');
});

test('should be disabled', () => {
  const { getByRole } = render(<Button isDisabled>Hello World</Button>);
  const button = getByRole('button');
  expect(button).toBeDisabled();
});

test('has the proper type attribute', () => {
  // has 'button' type by default
  const { rerender } = render(<Button>Hello World</Button>);
  expect(screen.getByText(/Hello World/i)).toHaveAttribute('type', 'button');

  rerender(<Button type="submit">Hello World</Button>);
  expect(screen.getByText(/Hello World/i)).toHaveAttribute('type', 'submit');
});
