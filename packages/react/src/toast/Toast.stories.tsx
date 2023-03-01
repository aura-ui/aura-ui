import * as React from 'react';
import { Button } from '../button';
import { Flex } from '../layout';
import { ToastProvider } from './Provider';
import { Toast, ToastProps } from './Toast';

export default {
  title: 'Components/Feedback/Toast',
  component: Toast,
};

const Provider = ({ children }: { children: React.ReactNode }) => (
  <ToastProvider>{children}</ToastProvider>
);

export const Default = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Provider>
      <Button onClick={() => setIsOpen(true)}>Open toast</Button>

      <Toast
        open={isOpen}
        onOpenChange={setIsOpen}
        title="Account created"
        description="We've created your account for you."
      />
    </Provider>
  );
};

export const WithColorScheme = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Provider>
      <Button onClick={() => setIsOpen(true)}>Open toast</Button>

      <Toast
        open={isOpen}
        onOpenChange={setIsOpen}
        title="Account created"
        description="We've created your account for you."
        colorScheme="green"
        variant="solid"
      />
    </Provider>
  );
};

export const WithAction = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Provider>
      <Button onClick={() => setIsOpen(true)}>Create Event</Button>

      <Toast
        open={isOpen}
        onOpenChange={setIsOpen}
        title="Event created"
        description="Tuesday, February 21st at 4.00pm"
        colorScheme="green"
        actionAltText="Confirm your account"
      >
        <Button colorScheme="green" size="1">
          Undo
        </Button>
      </Toast>
    </Provider>
  );
};

const ToastWithPlacement = ({
  placement,
  children,
}: Pick<ToastProps, 'placement' | 'children'>) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Provider>
      <Button css={{ alignSelf: 'start' }} onClick={() => setIsOpen(true)}>
        {children}
      </Button>

      <Toast
        placement={placement}
        open={isOpen}
        onOpenChange={setIsOpen}
        title="Event created"
        description="Tuesday, February 21st at 4.00pm"
        colorScheme="green"
        actionAltText="Undo create event"
      >
        <Button colorScheme="green" size="1">
          Undo
        </Button>
      </Toast>
    </Provider>
  );
};

export const Placement = () => (
  <Flex direction="column" gap="3">
    <ToastWithPlacement placement="topLeft">Top Left</ToastWithPlacement>
    <ToastWithPlacement placement="topCenter">Top Center</ToastWithPlacement>
    <ToastWithPlacement placement="topRight">Top Right</ToastWithPlacement>
    <ToastWithPlacement placement="bottomRight">Bottom Right</ToastWithPlacement>
    <ToastWithPlacement placement="bottomCenter">Bottom Center</ToastWithPlacement>
    <ToastWithPlacement placement="bottomLeft">Bottom Left</ToastWithPlacement>
  </Flex>
);
