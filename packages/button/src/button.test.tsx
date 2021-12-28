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
import { testA11y } from '@zephyr-ui/test-utils';
import { Button } from '../src';

describe('<Button/>', () => {
  test('passes a11y test', async () => {
    await testA11y(<Button>Add children here if necessary</Button>);
  });
});
