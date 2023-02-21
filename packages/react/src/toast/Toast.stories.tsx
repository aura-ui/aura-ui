import * as React from 'react';
import { Button } from '../button';
import { Toast, ToastProvider, ToastViewport } from './Toast';

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
      <ToastViewport />
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
      <ToastViewport />
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
      <ToastViewport />
    </Provider>
  );
};
