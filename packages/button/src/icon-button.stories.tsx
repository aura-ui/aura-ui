import * as React from 'react';
import { MagnifyingGlassIcon, EnvelopeClosedIcon } from '@radix-ui/react-icons';
import { styled } from '@float-ui/theme';
import { IconButton } from './icon-button';

export default {
  title: 'Components/Form/IconButton',
};

const Flex = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
});

export const IconAsProp = () => (
  <IconButton size="md" aria-label="Search collection" icon={<MagnifyingGlassIcon />} />
);

export const IconAsChild = () => (
  <IconButton size="md" aria-label="Send email">
    <EnvelopeClosedIcon />
  </IconButton>
);

export const OutlineVariant = () => (
  <IconButton
    variant="outline"
    size="md"
    aria-label="Search collection"
    icon={<MagnifyingGlassIcon />}
  />
);

export const SolidVariant = () => (
  <IconButton
    variant="solid"
    size="md"
    aria-label="Search collection"
    icon={<MagnifyingGlassIcon />}
  />
);

export const GhostVariant = () => (
  <IconButton
    variant="ghost"
    size="md"
    aria-label="Search collection"
    icon={<MagnifyingGlassIcon />}
  />
);

export const ColorScheme = () => (
  <IconButton
    colorScheme="purple"
    size="md"
    aria-label="Search collection"
    icon={<MagnifyingGlassIcon />}
  />
);

export const Loading = () => (
  <IconButton isLoading size="md" aria-label="Search collection" icon={<MagnifyingGlassIcon />} />
);

export const Sizes = () => (
  <Flex>
    <IconButton size="lg" aria-label="Search collection" icon={<MagnifyingGlassIcon />} />
    <IconButton size="md" aria-label="Search collection" icon={<MagnifyingGlassIcon />} />
    <IconButton size="sm" aria-label="Search collection" icon={<MagnifyingGlassIcon />} />
    <IconButton size="xs" aria-label="Search collection" icon={<MagnifyingGlassIcon />} />
  </Flex>
);

export const SizesLoading = () => (
  <Flex>
    <IconButton isLoading size="lg" aria-label="Search collection" icon={<MagnifyingGlassIcon />} />
    <IconButton isLoading size="md" aria-label="Search collection" icon={<MagnifyingGlassIcon />} />
    <IconButton isLoading size="sm" aria-label="Search collection" icon={<MagnifyingGlassIcon />} />
    <IconButton isLoading size="xs" aria-label="Search collection" icon={<MagnifyingGlassIcon />} />
  </Flex>
);
