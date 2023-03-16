import * as React from 'react';
import { Meta, ComponentMeta, ComponentStory } from '@storybook/react';
import { Button, ButtonProps } from './Button';
import { Flex } from '../layout/Flex';
import {
  FaAirbnb,
  FaTwitter,
  FaSpotify,
  FaTwitch,
  FaDribbble,
  FaSnapchat,
  FaAmazon,
  FaSoundcloud,
} from 'react-icons/fa';

export default {
  title: 'Components/Form/Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['subtle', 'outline', 'solid', 'ghost'] as ButtonProps['variant'][],
      control: false,
    },
    size: {
      options: ['1', '2', '3'] as ButtonProps['size'][],
      control: false,
    },
    colorScheme: {
      control: false,
    },
    border: {
      control: false,
    },
    ref: {
      control: false,
    },
    as: {
      control: false,
    },
    css: {
      control: false,
    },
    disabled: {
      control: false,
    },
  },
  // args: {
  //   disabled: false,
  //   variant: 'subtle',
  //   size: '2',
  //   colorScheme: 'slate',
  // },
  parameters: {
    docs: {
      description: {
        component:
          'An interactive component used to trigger an action or event, such as submitting a form or opening and closing a dialog.',
      },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Default',
};

export const WithBorder = Template.bind({});
WithBorder.args = {
  ...Default.args,
  border: true,
  children: 'With Border',
};
WithBorder.argTypes = {
  border: { control: 'boolean' },
};
WithBorder.parameters = {
  docs: {
    description: {
      story:
        'Add a border around the button. This boolean prop will only take effect when used in conjunction with the `Subtle` variant.',
    },
  },
};

export const Sizes = () => {
  return (
    <Flex gap="2">
      <Button size="1">Size 1</Button>
      <Button size="2">Size 2</Button>
      <Button size="3">Size 3</Button>
    </Flex>
  );
};
Sizes.parameters = {
  docs: {
    description: {
      story:
        'Use the `size` prop to change the size of the Button. You can choose between `1`, `2` and `3`. Defaults to `2`.',
    },
  },
};

export const Variants = () => {
  return (
    <Flex gap="2">
      <Button variant="subtle">Subtle</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="solid">Solid</Button>
      <Button variant="ghost">Ghost</Button>
    </Flex>
  );
};
Variants.parameters = {
  docs: {
    description: {
      story:
        'Use the `variant` prop to switch between variants. The available variants are `subtle`, `outline`, `solid` and `ghost`. Defaults to `subtle`.',
    },
  },
};

export const ColorScheme = () => {
  return (
    <Flex gap="2">
      <Button colorScheme="red">Red</Button>
      <Button colorScheme="crimson">Crimson</Button>
      <Button colorScheme="violet">Violet</Button>
      <Button colorScheme="blue">Blue</Button>
      <Button colorScheme="green">Green</Button>
      <Button colorScheme="yellow">Yellow</Button>
      <Button colorScheme="orange">Orange</Button>
    </Flex>
  );
};
ColorScheme.parameters = {
  docs: {
    description: {
      story:
        'Use the `colorScheme` prop to switch between color schemes. The available color schemes are `slate`, `red`, `crimson`, `violet`, `blue`, `green`, `yellow` and `orange`. Defaults to `slate`.',
    },
  },
};

export const Disabled = () => <Button disabled>Disabled</Button>;
Disabled.parameters = {
  docs: {
    description: {
      story:
        'Here is an usage example of a disabled button. Uses `aria-disabled` under the hood for accessibility enhancements.',
    },
  },
};

export const WithIcon = () => {
  return (
    <Flex gap="2">
      <Button variant="outline" colorScheme="red">
        <FaAirbnb />
        Airbnb
      </Button>
      <Button variant="subtle" colorScheme="crimson">
        <FaDribbble />
        Dribbble
      </Button>
      <Button variant="solid" colorScheme="violet">
        <FaTwitch />
        Twitch
      </Button>
      <Button variant="ghost" colorScheme="blue">
        <FaTwitter />
        Twitter
      </Button>
      <Button variant="outline" colorScheme="green">
        <FaSpotify />
        Spotify
      </Button>
      <Button variant="solid" colorScheme="yellow">
        <FaAmazon />
        Amazon
      </Button>
      <Button variant="ghost" colorScheme="orange">
        <FaSoundcloud />
        Soundcloud
      </Button>
    </Flex>
  );
};
WithIcon.parameters = {
  docs: {
    description: {
      story: 'Usage example of a button with icon and text.',
    },
  },
};

export const LinkButton = () => (
  <Button as="a" href="#">
    Link Button
  </Button>
);
LinkButton.parameters = {
  docs: {
    description: {
      story:
        'Usage example of how you could morph a button into a link component whilst retaining styles.',
    },
  },
};
