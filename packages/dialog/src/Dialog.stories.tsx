import * as React from 'react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from './Dialog';
import { Typography } from '../../typography';
import { Button } from '../../button';
import { TextField } from '../../input';
import { Flex, Grid } from '../../layout';
import { IconButton } from '../../icon-button';
import { RxCross1 } from 'react-icons/rx';

export default {
  title: 'Components/Overlay/Dialog',
  component: Dialog,
};

export const Default = () => {
  return (
    <Grid
      css={{
        placeItems: 'center',
        height: 200,
      }}
    >
      <Dialog>
        <DialogTrigger asChild>
          <Button>Open Dialog</Button>
        </DialogTrigger>
        <DialogPortal>
          <DialogOverlay />
          <DialogContent>
            <DialogClose asChild>
              <IconButton css={{ br: '$round' }} size="1">
                <RxCross1 />
              </IconButton>
            </DialogClose>
            <DialogTitle asChild>
              <Typography contrast="hiContrast" size="6" weight="6">
                Dialog title
              </Typography>
            </DialogTitle>
            <DialogDescription asChild>
              <Typography css={{ width: '90%', mt: '$1' }}>
                Short description of the action required.
              </Typography>
            </DialogDescription>
            <Flex css={{ mt: '$8' }} gap="5" direction="column" justify="center">
              <Flex gap="1" direction="column">
                <Typography css={{ color: '$slate10' }} size="2">
                  Name
                </Typography>
                <TextField type="text" placeholder="John Smith" />
              </Flex>
              <Flex gap="1" direction="column">
                <Typography css={{ color: '$slate10' }} size="2">
                  Email
                </Typography>
                <TextField type="email" placeholder="johnsmith@me.com" />
              </Flex>
            </Flex>
            <Flex css={{ mt: '$8' }} gap="3" justify="end">
              <Button colorScheme="green" onClick={() => alert('Woohoo! You submitted nothing!')}>
                Save Changes
              </Button>
            </Flex>
          </DialogContent>
        </DialogPortal>
      </Dialog>
    </Grid>
  );
};
