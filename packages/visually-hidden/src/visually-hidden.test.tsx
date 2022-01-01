/**
 * 📝 Notes for Contributors:
 *
 * - Tests here should be to verify component functionality
 * - No snapshot tests for components please! 🙂
 *
 * @see Testing Guide: ADD LINK HERE
 */

import * as React from 'react';
import { testA11y } from '@zephyr-ui/test-utils';
import { VisuallyHidden } from '../src';

describe('<VisuallyHidden/>', () => {
  test('passes a11y test', async () => {
    await testA11y(<VisuallyHidden>Add children here if necessary</VisuallyHidden>);
  });
});
