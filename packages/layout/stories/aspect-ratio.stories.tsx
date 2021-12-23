import { AspectRatio } from '../src';
import { styled } from '@zephyr-ui/theme';
import * as React from 'react';

export default {
  title: 'Components/Layout/AspectRatio',
  component: AspectRatio,
};

const Image = styled('img', {
  objectFit: 'cover',
  width: '100%',
  height: '100%',
});

const imgSrc = `https://images.unsplash.com/photo-1622737133809-d95047b9e673?w=300&dpr=2&q=80`;
const imgAlt = '3D Render by Sebastian Svenson';

export const Default = () => (
  <AspectRatio>
    <Image src={imgSrc} alt={imgAlt} />
  </AspectRatio>
);

export const Wide = () => (
  <AspectRatio ratio={16 / 9}>
    <Image src={imgSrc} alt={imgAlt} />
  </AspectRatio>
);

export const WideCustomWidth = () => (
  <AspectRatio ratio={16 / 9} maxWidth={600}>
    <Image src={imgSrc} alt={imgAlt} />
  </AspectRatio>
);
