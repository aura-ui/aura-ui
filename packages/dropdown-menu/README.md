# Dropdown Menu

Aura UI Dropdown Menu component.

## Installation

```sh
npm install @aura-ui/dropdown-menu
# or
yarn add @aura-ui/dropdown-menu
```

## Import Components

```jsx
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
} from '@aura-ui/dropdown-menu';
```

## Component

`DropdownMenu`: Displays a menu containing a set of actions or functions, triggered by a button..

## Usage

```jsx
<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button>
      Options
      <HiChevronDown />
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
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
  </DropdownMenuContent>
</DropdownMenu>
```
