import * as React from 'react';
import { Flex } from '../layout';
import { Avatar, AvatarFallback, AvatarImage, AvatarGroup } from './Avatar';

export default {
  title: 'Components/Media/Avatar',
  component: Avatar,
};

const AVATAR_URL =
  'https://images.unsplash.com/photo-1506863530036-1efeddceb993?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1344&q=80';

export const Default = () => (
  <Avatar>
    <AvatarImage
      src="https://images.unsplash.com/photo-1622737133809-d95047b9e673?w=300&dpr=2&q=80"
      alt="3D Render by Sebastian Svenson"
    />
  </Avatar>
);

export const Fallback = () => (
  <Avatar>
    <AvatarImage src="" alt="3D Render by Sebastian Svenson" />
    <AvatarFallback>AU</AvatarFallback>
  </Avatar>
);

export const FallbackColorScheme = () => (
  <Avatar>
    <AvatarImage src="" alt="3D Render by Sebastian Svenson" />
    <AvatarFallback colorScheme="violet">AU</AvatarFallback>
  </Avatar>
);

export const FallbackVariants = () => (
  <Flex gap="3">
    <Avatar>
      <AvatarImage src="" alt="3D Render by Sebastian Svenson" />
      <AvatarFallback colorScheme="violet">AU</AvatarFallback>
    </Avatar>
    <Avatar>
      <AvatarImage src="" alt="3D Render by Sebastian Svenson" />
      <AvatarFallback colorScheme="violet" variant="solid">
        AU
      </AvatarFallback>
    </Avatar>
  </Flex>
);

const sizes = ['1', '2', '3', '4', '5', '6', '7'];

export const Sizes = () => (
  <Flex gap="3">
    {sizes.map((size) => (
      <Avatar key={size} size={size as any}>
        <AvatarImage src={AVATAR_URL} alt="3D Render by Sebastian Svenson" />
      </Avatar>
    ))}
  </Flex>
);

export const FallbackSizes = () => (
  <Flex gap="3">
    {sizes.map((size) => (
      <Avatar key={size} size={size as any}>
        <AvatarImage src={''} alt="3D Render by Sebastian Svenson" />
        <AvatarFallback colorScheme="violet">AU</AvatarFallback>
      </Avatar>
    ))}
  </Flex>
);

export const AvatarGroupDefault = () => (
  <AvatarGroup limit={4}>
    <Avatar>
      <AvatarImage src={AVATAR_URL} alt="" />
    </Avatar>
    <Avatar>
      <AvatarImage src={AVATAR_URL} alt="" />
    </Avatar>
    <Avatar>
      <AvatarImage src={AVATAR_URL} alt="" />
    </Avatar>
    <Avatar>
      <AvatarImage src={AVATAR_URL} alt="" />
    </Avatar>
    <Avatar>
      <AvatarImage src={AVATAR_URL} alt="" />
    </Avatar>
  </AvatarGroup>
);
