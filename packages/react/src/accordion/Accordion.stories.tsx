import * as React from 'react';
import { Container } from '../layout';
import { Typography } from '../typography';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './Accordion';

export default {
  title: 'Components/Disclosure/Accordion',
  component: Accordion,
};

export const Single = () => (
  <Accordion type="single" collapsible>
    <AccordionItem value="item1">
      <AccordionTrigger>What is Aura UI?</AccordionTrigger>
      <AccordionContent>
        <Typography>
          A high quality, accessible, customizable UI library of React components.
        </Typography>
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item2">
      <AccordionTrigger>Why Aura UI?</AccordionTrigger>
      <AccordionContent>Becuase why tf not?</AccordionContent>
    </AccordionItem>
  </Accordion>
);

export const WithContainer = () => (
  <Container size="3">
    <Single />
  </Container>
);
