import * as React from 'react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from './Dialog';
import { Typography } from '../../typography';
import { Button } from '../../button';
import { TextField } from '../../input';
import { Flex, Box } from '../../layout';

export default {
  title: 'Components/Overlay/Dialog',
  component: Dialog,
  decorators: [useColorScheme],
};

function useColorScheme(Story: any, context: any) {
  return (
    <Box>
      <Story />
    </Box>
  );
}

export const Default = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle asChild>
          <Typography contrast="hiContrast" size="6" weight="6">
            Dialog title
          </Typography>
        </DialogTitle>
        <DialogDescription asChild>
          <Typography css={{ width: '90%' }}>Short description of the action required.</Typography>
        </DialogDescription>
        <Flex css={{ mt: '$5' }} gap="3" direction="column">
          <Flex gap="1" direction="column">
            <Typography>Name</Typography>
            <TextField type="text" placeholder="John Smith" />
          </Flex>
          <Flex gap="1" direction="column">
            <Typography>Email</Typography>
            <TextField type="email" placeholder="johnsmith@me.com" />
          </Flex>
        </Flex>
        <Flex css={{ mt: '$5' }} gap="3" justify="end">
          <DialogClose asChild>
            <Button colorScheme="red">Cancel</Button>
          </DialogClose>
          <Button onClick={() => alert('Woohoo! You submitted nothing!')}>Submit</Button>
        </Flex>
      </DialogContent>
    </Dialog>
  );
};
