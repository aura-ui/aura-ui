import * as React from 'react';
import { Button } from '../button';
import { Flex, Grid } from '../layout';
import { Typography } from '../typography';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogOverlay,
  AlertDialogTitle,
  AlertDialogTrigger,
} from './AlertDialog';

export default {
  title: 'Components/AlertDialog',
  component: AlertDialog,
};

export const Default = () => (
  <Grid
    css={{
      placeItems: 'center',
      height: 200,
    }}
  >
    <AlertDialog>
      <AlertDialogOverlay />
      <AlertDialogTrigger asChild>
        <Button>Submit</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogTitle asChild>
          <Typography size="4" weight="6">
            Are you absolutely sure?
          </Typography>
        </AlertDialogTitle>
        <AlertDialogDescription asChild>
          <Typography>
            This action cannot be undone. This will permanently delete your account and remove your
            data from our servers.
          </Typography>
        </AlertDialogDescription>
        <Flex justify="end" gap="2">
          <AlertDialogCancel asChild>
            <Button>Cancel</Button>
          </AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button colorScheme="red">Yes, delete my account</Button>
          </AlertDialogAction>
        </Flex>
      </AlertDialogContent>
    </AlertDialog>
  </Grid>
);
