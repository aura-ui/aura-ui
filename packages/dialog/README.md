# Dialog

Aura UI Dialog component.

## Installation

```sh
npm install @aura-ui/dialog
# or
yarn add @aura-ui/dialog
```

## Import Components

```jsx
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@aura-ui/dialog';
```

## Component

`Dialog`: A window overlaid over primary content, or another dialog window..

## Usage

```jsx
<Dialog>
  <DialogTrigger asChild>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogTitle>Dialog title</DialogTitle>
    <DialogDescription>Short description of the action required.</DialogDescription>
    <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Typography>
  </DialogContent>
</Dialog>
```
