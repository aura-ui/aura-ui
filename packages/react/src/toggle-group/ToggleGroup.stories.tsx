import {
  FontBoldIcon,
  FontItalicIcon,
  StrikethroughIcon,
  UnderlineIcon,
} from '@radix-ui/react-icons';
import * as React from 'react';
import { Box, Flex } from '../layout';
import { Typography } from '../typography';
import { ToggleGroup, ToggleGroupItem } from './ToggleGroup';

export default {
  title: 'Components/Form/ToggleGroup',
  component: ToggleGroup,
};

export const Single = () => (
  <ToggleGroup type="single" aria-label="Toolbar">
    <ToggleGroupItem value="bold" aria-label="Toggle bold">
      <FontBoldIcon />
    </ToggleGroupItem>
    <ToggleGroupItem value="italic" aria-label="Toggle italic">
      <FontItalicIcon />
    </ToggleGroupItem>
    <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
      <StrikethroughIcon />
    </ToggleGroupItem>
    <ToggleGroupItem value="underline" aria-label="Toggle underline">
      <UnderlineIcon />
    </ToggleGroupItem>
  </ToggleGroup>
);

export const SingleDefaultValue = () => (
  <ToggleGroup type="single" aria-label="Toolbar" defaultValue="bold">
    <ToggleGroupItem value="bold" aria-label="Toggle bold">
      <FontBoldIcon />
    </ToggleGroupItem>
    <ToggleGroupItem value="italic" aria-label="Toggle italic">
      <FontItalicIcon />
    </ToggleGroupItem>
    <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
      <StrikethroughIcon />
    </ToggleGroupItem>
    <ToggleGroupItem value="underline" aria-label="Toggle underline">
      <UnderlineIcon />
    </ToggleGroupItem>
  </ToggleGroup>
);

export const Multiple = () => (
  <ToggleGroup type="multiple" aria-label="Toolbar">
    <ToggleGroupItem value="bold" aria-label="Toggle bold">
      <FontBoldIcon />
    </ToggleGroupItem>
    <ToggleGroupItem value="italic" aria-label="Toggle italic">
      <FontItalicIcon />
    </ToggleGroupItem>
    <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
      <StrikethroughIcon />
    </ToggleGroupItem>
    <ToggleGroupItem value="underline" aria-label="Toggle underline">
      <UnderlineIcon />
    </ToggleGroupItem>
  </ToggleGroup>
);

export const Variants = () => (
  <Flex direction="column" gap="5">
    <ToggleGroup type="multiple" aria-label="Toolbar">
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <FontBoldIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <FontItalicIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
        <StrikethroughIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Toggle underline">
        <UnderlineIcon />
      </ToggleGroupItem>
    </ToggleGroup>

    <ToggleGroup type="multiple" aria-label="Toolbar" variant="compact">
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <FontBoldIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <FontItalicIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
        <StrikethroughIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Toggle underline">
        <UnderlineIcon />
      </ToggleGroupItem>
    </ToggleGroup>
  </Flex>
);

export const ColorScheme = () => (
  <ToggleGroup colorScheme="blue" type="multiple" aria-label="Toolbar">
    <ToggleGroup type="multiple" aria-label="Toolbar">
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <FontBoldIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <FontItalicIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
        <StrikethroughIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Toggle underline">
        <UnderlineIcon />
      </ToggleGroupItem>
    </ToggleGroup>
  </ToggleGroup>
);

export const Sizes = () => (
  <Flex direction="column" gap="5">
    <ToggleGroup size="1" type="multiple" aria-label="Toolbar">
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <FontBoldIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <FontItalicIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
        <StrikethroughIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Toggle underline">
        <UnderlineIcon />
      </ToggleGroupItem>
    </ToggleGroup>

    <ToggleGroup size="2" type="multiple" aria-label="Toolbar">
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <FontBoldIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <FontItalicIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
        <StrikethroughIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Toggle underline">
        <UnderlineIcon />
      </ToggleGroupItem>
    </ToggleGroup>

    <ToggleGroup size="3" type="multiple" aria-label="Toolbar">
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <FontBoldIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <FontItalicIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
        <StrikethroughIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Toggle underline">
        <UnderlineIcon />
      </ToggleGroupItem>
    </ToggleGroup>
  </Flex>
);

export const ItemVariants = () => (
  <Flex direction="column" gap="5">
    <Box>
      <Typography>Subtle</Typography>
      <ToggleGroup itemVariant="subtle" size="2" type="multiple" aria-label="Toolbar">
        <ToggleGroupItem value="bold" aria-label="Toggle bold">
          <FontBoldIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Toggle italic">
          <FontItalicIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
          <StrikethroughIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Toggle underline">
          <UnderlineIcon />
        </ToggleGroupItem>
      </ToggleGroup>
    </Box>

    <Box>
      <Typography>Solid</Typography>
      <ToggleGroup itemVariant="solid" size="2" type="multiple" aria-label="Toolbar">
        <ToggleGroupItem value="bold" aria-label="Toggle bold">
          <FontBoldIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Toggle italic">
          <FontItalicIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
          <StrikethroughIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Toggle underline">
          <UnderlineIcon />
        </ToggleGroupItem>
      </ToggleGroup>
    </Box>

    <Box>
      <Typography>Ghost</Typography>
      <ToggleGroup itemVariant="ghost" type="multiple" aria-label="Toolbar">
        <ToggleGroupItem value="bold" aria-label="Toggle bold">
          <FontBoldIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Toggle italic">
          <FontItalicIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
          <StrikethroughIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Toggle underline">
          <UnderlineIcon />
        </ToggleGroupItem>
      </ToggleGroup>
    </Box>
  </Flex>
);
