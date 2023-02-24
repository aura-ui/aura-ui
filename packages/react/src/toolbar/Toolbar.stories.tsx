import { ViewGridIcon, ViewHorizontalIcon, ViewVerticalIcon } from '@radix-ui/react-icons';
import * as React from 'react';
import { Button } from '../button';
import { Link } from '../link';
import { ToggleGroup } from '../toggle-group';
import { Multiple } from '../toggle-group/ToggleGroup.stories';
import {
  Toolbar,
  ToolbarButton,
  ToolbarLink,
  ToolbarProps,
  ToolbarSeparator,
  ToolbarToggleGroup,
  ToolbarToggleItem,
} from './Toolbar';

export default {
  title: 'Components/Layout/Toolbar',
  component: Toolbar,
};

export const Default = ({ width }: { width: ToolbarProps['width'] }) => (
  <Toolbar width={width} css={{ border: '1px solid $colors$slate6' }}>
    <Multiple />
    <ToolbarSeparator />
    <ToolbarToggleGroup type="single" asChild>
      <ToggleGroup itemVariant="ghost" type="single" aria-label="View Controls">
        <ToolbarToggleItem value="vertical">
          <ViewVerticalIcon />
        </ToolbarToggleItem>
        <ToolbarToggleItem value="horizontal">
          <ViewHorizontalIcon />
        </ToolbarToggleItem>
        <ToolbarToggleItem value="grid">
          <ViewGridIcon />
        </ToolbarToggleItem>
      </ToggleGroup>
    </ToolbarToggleGroup>
    <ToolbarSeparator />
    <ToolbarLink asChild>
      <Link colorScheme="slate" variant="noUnderline" href="#" target="_blank">
        Edited an hour ago
      </Link>
    </ToolbarLink>
    <ToolbarButton asChild>
      <Button css={{ ml: 'auto' }} variant="solid" colorScheme="blue">
        Share
      </Button>
    </ToolbarButton>
  </Toolbar>
);

export const FullWidth = () => <Default width="full" />;
