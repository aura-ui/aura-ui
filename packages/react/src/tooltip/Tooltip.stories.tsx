import { SunIcon } from '@radix-ui/react-icons';
import * as React from 'react';
import { IconButton } from '../icon-button';
import { Center, Flex } from '../layout';
import { Tooltip, TooltipContent, TooltipPortal, TooltipProvider, TooltipTrigger } from './Tooltip';

export default {
  title: 'Components/Overlay/Tooltip',
  component: Tooltip,
};

const Provider = ({ children }: { children: React.ReactNode }) => (
  <TooltipProvider>{children}</TooltipProvider>
);

export const Default = () => (
  <Center>
    <Provider>
      <Tooltip>
        <TooltipTrigger asChild>
          <IconButton>
            <SunIcon />
          </IconButton>
        </TooltipTrigger>
        <TooltipPortal>
          <TooltipContent>Toggle dark mode</TooltipContent>
        </TooltipPortal>
      </Tooltip>
    </Provider>
  </Center>
);

export const WithArrow = () => (
  <Center>
    <Provider>
      <Tooltip>
        <TooltipTrigger asChild>
          <IconButton>
            <SunIcon />
          </IconButton>
        </TooltipTrigger>
        <TooltipPortal>
          <TooltipContent arrow>Toggle dark mode</TooltipContent>
        </TooltipPortal>
      </Tooltip>
    </Provider>
  </Center>
);

export const CollisionAware = () => (
  <Provider>
    <Tooltip>
      <TooltipTrigger asChild>
        <IconButton>
          <SunIcon />
        </IconButton>
      </TooltipTrigger>
      <TooltipPortal>
        <TooltipContent arrow>Toggle dark mode</TooltipContent>
      </TooltipPortal>
    </Tooltip>
  </Provider>
);

export const WithCollisionPadding = () => (
  <Provider>
    <Tooltip>
      <TooltipTrigger asChild>
        <IconButton>
          <SunIcon />
        </IconButton>
      </TooltipTrigger>
      <TooltipPortal>
        <TooltipContent collisionPadding={12} arrow>
          Toggle dark mode
        </TooltipContent>
      </TooltipPortal>
    </Tooltip>
  </Provider>
);

export const Sizes = () => (
  <Center>
    <Provider>
      <Flex css={{ gap: 150 }}>
        <Tooltip defaultOpen>
          <TooltipTrigger asChild>
            <IconButton>
              <SunIcon />
            </IconButton>
          </TooltipTrigger>
          <TooltipPortal>
            <TooltipContent size="1">Toggle dark mode</TooltipContent>
          </TooltipPortal>
        </Tooltip>
        <Tooltip defaultOpen>
          <TooltipTrigger asChild>
            <IconButton>
              <SunIcon />
            </IconButton>
          </TooltipTrigger>
          <TooltipPortal>
            <TooltipContent size="2">Toggle dark mode</TooltipContent>
          </TooltipPortal>
        </Tooltip>
        <Tooltip defaultOpen>
          <TooltipTrigger asChild>
            <IconButton>
              <SunIcon />
            </IconButton>
          </TooltipTrigger>
          <TooltipPortal>
            <TooltipContent size="3">Toggle dark mode</TooltipContent>
          </TooltipPortal>
        </Tooltip>
      </Flex>
    </Provider>
  </Center>
);

export const FastDelayDuration = () => (
  <Center>
    <Provider>
      <Tooltip delayDuration={200}>
        <TooltipTrigger asChild>
          <IconButton>
            <SunIcon />
          </IconButton>
        </TooltipTrigger>
        <TooltipPortal>
          <TooltipContent>Toggle dark mode</TooltipContent>
        </TooltipPortal>
      </Tooltip>
    </Provider>
  </Center>
);
