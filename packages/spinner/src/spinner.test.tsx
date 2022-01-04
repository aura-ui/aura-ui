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
import { testA11y } from '@float-ui/test-utils';
import { Spinner } from '../src';

describe('<Spinner/>', () => {
  test('passes a11y test', async () => {
    await testA11y(<Spinner>Add children here if necessary</Spinner>);
  });
});
