import * as React from 'react';
import { Button } from './Button';
import { Flex } from '../layout/Flex';
import { FaAirbnb, FaTwitter, FaDribbble, FaAmazon, FaSpotify, FaTwitch } from 'react-icons/fa';

export default {
  title: 'Components/Form/Button',
  component: Button,
};

export const Default = () => <Button>Default</Button>;

export const WithBorder = () => <Button border>Default With Border</Button>;

export const Sizes = () => {
  return (
    <Flex gap="2">
      <Button size="1">Size 1</Button>
      <Button size="2">Size 2</Button>
      <Button size="3">Size 3</Button>
    </Flex>
  );
};

export const Variant = () => {
  return (
    <Flex gap="2">
      <Button variant="subtle">Subtle</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="solid">Solid</Button>
      <Button variant="ghost">Ghost</Button>
    </Flex>
  );
};

export const ColorScheme = () => {
  return (
    <Flex
      css={{
        flexWrap: 'wrap',
        maxW: 600,
      }}
      gap="2"
    >
      <Button border colorScheme="tomato">
        Tomato
      </Button>
      <Button border colorScheme="red">
        Red
      </Button>
      <Button border colorScheme="crimson">
        Crimson
      </Button>
      <Button border colorScheme="pink">
        Pink
      </Button>
      <Button border colorScheme="plum">
        Plum
      </Button>
      <Button border colorScheme="purple">
        Purple
      </Button>
      <Button border colorScheme="violet">
        Violet
      </Button>
      <Button border colorScheme="indigo">
        Indigo
      </Button>
      <Button border colorScheme="blue">
        Blue
      </Button>
      <Button border colorScheme="sky">
        Sky
      </Button>
      <Button border colorScheme="cyan">
        Cyan
      </Button>
      <Button border colorScheme="teal">
        Teal
      </Button>
      <Button border colorScheme="mint">
        Mint
      </Button>
      <Button border colorScheme="green">
        Green
      </Button>
      <Button border colorScheme="grass">
        Grass
      </Button>
      <Button border colorScheme="lime">
        Lime
      </Button>
      <Button border colorScheme="yellow">
        Yellow
      </Button>
      <Button border colorScheme="amber">
        Amber
      </Button>
      <Button border colorScheme="orange">
        Orange
      </Button>
    </Flex>
  );
};

export const Disabled = () => <Button aria-disabled>Disabled</Button>;

export const WithIcon = () => {
  return (
    <Flex
      css={{
        flexWrap: 'wrap',
        maxW: 400,
      }}
      gap="2"
    >
      <Button variant="solid" colorScheme="blue">
        <FaTwitter />
        Twitter
      </Button>
      <Button variant="outline" colorScheme="red">
        <FaAirbnb />
        Airbnb
      </Button>
      <Button variant="solid" colorScheme="green">
        <FaSpotify />
        Spotify
      </Button>
      <Button colorScheme="pink">
        <FaDribbble />
        Dribbble
      </Button>
      <Button variant="solid" colorScheme="amber">
        <FaAmazon />
        Amazon
      </Button>
      <Button variant="outline" colorScheme="violet">
        <FaTwitch />
        Twitch
      </Button>
    </Flex>
  );
};

export const LinkButton = () => (
  <Button as="a" href="#">
    Link Button
  </Button>
);
