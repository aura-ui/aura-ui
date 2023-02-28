import { PlusIcon } from '@radix-ui/react-icons';
import * as React from 'react';
import { Box, Container } from '../layout';
import { Typography } from '../typography';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './Accordion';

export default {
  title: 'Components/Disclosure/Accordion',
  component: Accordion,
};

const IconWrapper = ({ children }: { children: React.ReactNode }) => (
  <Box
    css={{
      ml: 'auto',
      color: '$slate11',
      transition: 'transform 300ms ease',
      '[data-state=open] &': { transform: 'rotate(45deg)', color: '$slate12' },
    }}
  >
    {children}
  </Box>
);

const Content = ({ children }: { children: React.ReactNode }) => (
  <Typography>{children}</Typography>
);

export const Single = () => (
  <Accordion type="single" collapsible>
    <AccordionItem value="item1">
      <AccordionTrigger>What is Aura UI?</AccordionTrigger>
      <AccordionContent>
        <Content>A high quality, accessible, customizable UI library of React components.</Content>
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item2">
      <AccordionTrigger>Why Aura UI?</AccordionTrigger>
      <AccordionContent>
        <Content>Becuase it's awesome</Content>
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);

export const Multiple = () => (
  <Accordion type="multiple">
    <AccordionItem value="item1">
      <AccordionTrigger>What is Aura UI?</AccordionTrigger>
      <AccordionContent>
        <Content>A high quality, accessible, customizable UI library of React components.</Content>
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item2">
      <AccordionTrigger>Why Aura UI?</AccordionTrigger>
      <AccordionContent>
        <Content>Becuase it's awesome</Content>
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);

export const WithContainer = () => (
  <Container size="3">
    <Single />
  </Container>
);

export const CustomWidth = () => (
  <Accordion css={{ width: 400 }} type="single" collapsible>
    <AccordionItem value="item1">
      <AccordionTrigger>What is Aura UI?</AccordionTrigger>
      <AccordionContent>
        <Content>A high quality, accessible, customizable UI library of React components.</Content>
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item2">
      <AccordionTrigger>Why Aura UI?</AccordionTrigger>
      <AccordionContent>
        <Content>Becuase it's awesome</Content>
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);

export const CustomIcon = () => (
  <Container size="3">
    <Accordion type="single" collapsible>
      <AccordionItem value="item1">
        <AccordionTrigger triggerIcon={false}>
          What is Aura UI?
          <IconWrapper>
            <PlusIcon />
          </IconWrapper>
        </AccordionTrigger>
        <AccordionContent>
          <Content>
            A high quality, accessible, customizable UI library of React components.
          </Content>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item2">
        <AccordionTrigger triggerIcon={false}>
          Why Aura UI?
          <IconWrapper>
            <PlusIcon />
          </IconWrapper>
        </AccordionTrigger>
        <AccordionContent>
          <Content>Becuase it's awesome</Content>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </Container>
);

export const WithBorder = () => (
  <Accordion css={{ width: 400 }} border type="single" collapsible>
    <AccordionItem value="item1">
      <AccordionTrigger>What is Aura UI?</AccordionTrigger>
      <AccordionContent>
        <Content>A high quality, accessible, customizable UI library of React components.</Content>
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item2">
      <AccordionTrigger>Why Aura UI?</AccordionTrigger>
      <AccordionContent>
        <Content>Becuase it's awesome</Content>
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);

export const TriggerReversed = () => (
  <Accordion css={{ width: 400 }} border type="single" collapsible>
    <AccordionItem value="item1">
      <AccordionTrigger reverse>What is Aura UI?</AccordionTrigger>
      <AccordionContent>
        <Content>A high quality, accessible, customizable UI library of React components.</Content>
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item2">
      <AccordionTrigger reverse>Why Aura UI?</AccordionTrigger>
      <AccordionContent>
        <Content>Becuase it's awesome</Content>
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);

export const WithCustomContentDepth = () => (
  <Accordion css={{ width: 400 }} border type="single" collapsible>
    <AccordionItem value="item1">
      <AccordionTrigger>What is Aura UI?</AccordionTrigger>
      <AccordionContent depth="5">
        <Content>A high quality, accessible, customizable UI library of React components.</Content>
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item2">
      <AccordionTrigger>Why Aura UI?</AccordionTrigger>
      <AccordionContent depth="5">
        <Content>Becuase it's awesome</Content>
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);
