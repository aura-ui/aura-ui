/**
 * 📝 Notes for Contributors:
 *
 * - Build your component in Storybook. Adjust the setup as needed.
 * - Ensure you include all possible variants and functionality of the component via stories.
 *
 * @see CONTRIBUTING.md for more info: ADD LINK HERE
 */

import * as React from 'react';
import { VisuallyHidden } from './visually-hidden';

export default {
  title: 'Components / Utilities / VisuallyHidden',
};

export const Default = () => <VisuallyHidden>Hello World</VisuallyHidden>;
