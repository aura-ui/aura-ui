import * as React from 'react';
import { Flex } from '../layout';
import { Typography } from '../typography';
import { Link } from './Link';

export default {
  title: 'Components/Layout/Link',
  component: Link,
};

export const Default = () => <Link href="#">Default Link</Link>;

export const WithinText = () => (
  <Typography>
    Example of an <Link href="#">inline link</Link>
  </Typography>
);

export const underlineOnHover = () => (
  <Link variant="underlineOnHover" href="#">
    Underline on hover
  </Link>
);

export const removeUnderlineOnHover = () => (
  <Link variant="removeUnderlineOnHover" href="#">
    Remove underline on hover
  </Link>
);

export const NoUnderline = () => (
  <Link variant="noUnderline" href="#">
    No underline
  </Link>
);

export const removeUnderlineWithMotionPreset = () => (
  <Link variant="removeUnderlineOnHover" motion={{ preset: 'slide' }} href="#">
    Remove underline on hover with motion
  </Link>
);

export const WithCustomMotionProps = () => (
  <Link
    variant="removeUnderlineOnHover"
    motion={{ preset: 'slide', duration: 600, delay: 200 }}
    href="#"
  >
    Remove underline on hover with motion
  </Link>
);

export const MotionPresets = () => (
  <Flex css={{ width: 'max-content' }} direction="column" gap="3">
    <Link motion={{ preset: 'slide' }} href="#">
      Start to End
    </Link>
    <Link motion={{ preset: 'slideReverse' }} href="#">
      End to Start
    </Link>
    <Link motion={{ preset: 'fade' }} href="#">
      Fade
    </Link>
    <Link motion={{ preset: 'fadeReverse' }} href="#">
      Fade reverse
    </Link>
  </Flex>
);
