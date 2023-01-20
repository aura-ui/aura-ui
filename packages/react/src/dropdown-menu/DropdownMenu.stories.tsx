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
import { Flex, Grid } from '../layout';

export default {
  title: 'Components/Overlay/DropdownMenu',
  component: DropdownMenu,
};

export const Default = ({
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
          fontSize={size}
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
            <DropdownMenuItemIndicator>
              <HiCheck />
            </DropdownMenuItemIndicator>
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
            <DropdownMenuPortal>
              <DropdownMenuSubContent fontSize={size} sideOffset={6} alignOffset={-4}>
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
                  <DropdownMenuRadioItem value="light">
                    <DropdownMenuItemIndicator>
                      <RxDotFilled />
                    </DropdownMenuItemIndicator>
                    Light
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="dark">
                    <DropdownMenuItemIndicator>
                      <RxDotFilled />
                    </DropdownMenuItemIndicator>
                    Dark
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
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

export const Sizes = () => {
  return (
    <Flex
      css={{
        justifyContent: 'center',
        width: '100%',
        height: 200,
        gap: 200,
      }}
    >
      <Default open label="Size 1" size="1" />
      <Default open label="Size 2" size="2" />
      <Default open label="Size 3" size="3" />
    </Flex>
  );
};
