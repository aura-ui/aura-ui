import { AspectRatio } from '../AspectRatio';
import { styled } from '../../theme';
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

export const Square = () => (
  <AspectRatio variant="square">
    <Image src={imgSrc} alt={imgAlt} />
  </AspectRatio>
);

export const Wide = () => (
  <AspectRatio variant="hd">
    <Image src={imgSrc} alt={imgAlt} />
  </AspectRatio>
);

export const Film = () => (
  <AspectRatio variant="film">
    <Image src={imgSrc} alt={imgAlt} />
  </AspectRatio>
);

export const Standard = () => (
  <AspectRatio variant="standard">
    <Image src={imgSrc} alt={imgAlt} />
  </AspectRatio>
);

export const Cinemascope = () => (
  <AspectRatio variant="cinemascope">
    <Image src={imgSrc} alt={imgAlt} />
  </AspectRatio>
);

export const CustomRatio = () => (
  <AspectRatio ratio={2 / 3}>
    <Image src={imgSrc} alt={imgAlt} />
  </AspectRatio>
);

export const CustomWidth = () => (
  <AspectRatio maxWidth={500}>
    <Image src={imgSrc} alt={imgAlt} />
  </AspectRatio>
);

export const WideCustomWidth = () => (
  <AspectRatio variant="hd" maxWidth={600}>
    <Image src={imgSrc} alt={imgAlt} />
  </AspectRatio>
);
