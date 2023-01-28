import * as React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuItemSlot,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuCheckboxItem,
  DropdownMenuItemIndicator,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
} from './DropdownMenu';
import { HiCheck, HiChevronDown, HiChevronRight } from 'react-icons/hi';
import { RxDotFilled } from 'react-icons/rx';
import { Button } from '../button';
import { Box, Flex, Grid } from '../layout';
import { ArchiveIcon, CopyIcon, MoveIcon, Pencil1Icon, TrashIcon } from '@radix-ui/react-icons';

export default {
  title: 'Components/Overlay/DropdownMenu',
  component: DropdownMenu,
};

export const Variation1 = ({
  open = false,
  size = '2',
  label,
}: {
  open?: boolean;
  size: '1' | '2' | '3';
  label: string;
}) => {
  return (
    <Grid
      css={{
        placeItems: 'center',
        height: 200,
      }}
    >
      <DropdownMenu defaultOpen={open}>
        <DropdownMenuTrigger asChild>
          <Button>
            {label ? label : 'Options'}
            <HiChevronDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          size={size}
          css={{
            minWidth: 220,
          }}
          sideOffset={8}
        >
          <DropdownMenuItem>
            Undo
            <DropdownMenuItemSlot>Ctrl+Z</DropdownMenuItemSlot>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Redo
            <DropdownMenuItemSlot>Ctrl+Y</DropdownMenuItemSlot>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            Cut
            <DropdownMenuItemSlot>Ctrl+X</DropdownMenuItemSlot>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Copy
            <DropdownMenuItemSlot>Ctrl+C</DropdownMenuItemSlot>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Paste
            <DropdownMenuItemSlot>Ctrl+V</DropdownMenuItemSlot>
          </DropdownMenuItem>
          <DropdownMenuItem disabled>
            Replace
            <DropdownMenuItemSlot>Ctrl+H</DropdownMenuItemSlot>
          </DropdownMenuItem>
          <DropdownMenuCheckboxItem checked={true}>
            Word Wrap
            <DropdownMenuItemSlot>Alt+Z</DropdownMenuItemSlot>
          </DropdownMenuCheckboxItem>
          <DropdownMenuSeparator />
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              More Commands
              <DropdownMenuItemSlot>
                <HiChevronRight />
              </DropdownMenuItemSlot>
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent size={size} sideOffset={12} alignOffset={-4}>
              <DropdownMenuItem>
                Save
                <DropdownMenuItemSlot>Ctrl+S</DropdownMenuItemSlot>
              </DropdownMenuItem>
              <DropdownMenuItem>
                Save As...
                <DropdownMenuItemSlot>Ctrl+Shift+S</DropdownMenuItemSlot>
              </DropdownMenuItem>
              <DropdownMenuItem>
                Save All
                <DropdownMenuItemSlot>Ctrl+K S</DropdownMenuItemSlot>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuLabel>Change Theme</DropdownMenuLabel>
              <DropdownMenuRadioGroup value="dark">
                <DropdownMenuRadioItem value="light">Light</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="dark">Dark</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
          <DropdownMenuItem color="red">
            Delete
            <DropdownMenuItemSlot>Ctrl+D</DropdownMenuItemSlot>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </Grid>
  );
};

export const Variation1Sizes = () => {
  return (
    <Flex
      css={{
        justifyContent: 'center',
        width: '100%',
        height: 200,
        gap: 200,
      }}
    >
      <Variation1 open label="Size 1" size="1" />
      <Variation1 open label="Size 2" size="2" />
      <Variation1 open label="Size 3" size="3" />
    </Flex>
  );
};

export const Compact = ({
  open = false,
  size = '2',
  label,
}: {
  open?: boolean;
  size: '1' | '2' | '3';
  label: string;
}) => {
  return (
    <Grid
      css={{
        placeItems: 'center',
        height: 200,
      }}
    >
      <DropdownMenu defaultOpen={open}>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            Options
            <HiChevronDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          size={size}
          variant="compact"
          css={{
            minWidth: 220,
          }}
          sideOffset={8}
        >
          <DropdownMenuItem>
            <Pencil1Icon />
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem css={{ justifyContent: 'space-between' }}>
            <CopyIcon />
            Duplicate
          </DropdownMenuItem>
          <DropdownMenuItem>
            <ArchiveIcon />
            Archive
          </DropdownMenuItem>
          <DropdownMenuItem>
            <MoveIcon />
            Move
          </DropdownMenuItem>
          <DropdownMenuItem color="red">
            <TrashIcon />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </Grid>
  );
};

export const Variation2Sizes = () => {
  return (
    <Flex
      css={{
        justifyContent: 'center',
        width: '100%',
        height: 200,
        gap: 200,
      }}
    >
      <Box>
        <Compact open label="Size 1" size="1" />
      </Box>
      <Box>
        <Compact open label="Size 2" size="2" />
      </Box>
      <Box>
        <Compact open label="Size 3" size="3" />
      </Box>
    </Flex>
  );
};
