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
import { testA11y } from '@aura-ui/test-utils';
import { TextField } from '../src';

describe('<TextField/>', () => {
  test('passes a11y test', async () => {
    await testA11y(<TextField>Add children here if necessary</TextField>);
  });
});
