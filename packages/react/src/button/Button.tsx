import * as React from 'react';
import { styled, ComponentProps } from '../theme';

export type ButtonProps = ComponentProps<typeof Button>;

export const Button = styled('button', {
  // resets
  all: 'unset',
  alignItems: 'center',
  boxSizing: 'border-box',
  userSelect: 'none',
  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },

  // custom reset
  display: 'inline-flex',
  justifyContent: 'center',
  lineHeight: '1',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',

  // --------------------------------------------

  // custom
  fontFamily: 'inherit',
  fontWeight: '$6',
  br: '$2',

  '&:disabled': {
    pointerEvents: 'none',
    cursor: 'not-allowed',
    opacity: '50%',
  },

  '&[aria-disabled="true"]': {
    pointerEvents: 'none',
    cursor: 'not-allowed',
    opacity: '50%',
  },

  // --------------------------------------------

  // locally-scoped color tokens for easy theme-switching

  // default styles
  $$bg: '$colors$slate3',
  $$border: '$colors$slate7',
  $$color: '$colors$slate11',

  // hover styles
  $$bgHover: '$colors$slate4',
  $$borderHover: '$colors$slate8',

  // active styles
  $$bgActive: '$colors$slate5',
  $$borderActive: '$colors$slate8',

  // solid default styles
  $$bgSolid: '$colors$slate9',
  $$colorSolid: 'white',
  // solid hover styles
  $$bgSolidHover: '$colors$slate10',
  // solid active styles
  $$bgSolidActive: '$colors$slate10',

  // --------------------------------------------

  variants: {
    size: {
      1: {
        height: '$7',
        fontSize: '$1',
        lineHeight: '$sizes$7',
        px: '$3',
        gap: '$1',

        '& svg': {
          size: '$3',
        },
      },
      2: {
        height: '$9',
        fontSize: '$2',
        lineHeight: '$sizes$9',
        px: '$4',
        gap: '$2',

        '& svg': {
          size: '$4',
        },
      },
      3: {
        height: '$11',
        fontSize: '$3',
        lineHeight: '$sizes$11',
        px: '$5',
        gap: '$2',

        '& svg': {
          size: '$4',
        },
      },
    },
    variant: {
      subtle: {
        color: '$$color',
        backgroundColor: '$$bg',

        '&:hover': {
          backgroundColor: '$$bgHover',
        },

        '&:active': {
          backgroundColor: '$$bgActive',
        },
      },
      outline: {
        color: '$$color',
        backgroundColor: 'transparent',
        boxShadow: 'inset 0 0 0 1px $$border',

        '&:hover': {
          boxShadow: 'inset 0 0 0 1px $$borderHover',
        },

        '&:active': {
          backgroundColor: '$$bgActive',
          boxShadow: 'inset 0 0 0 1px $$borderActive',
        },
      },
      solid: {
        backgroundColor: '$$bgSolid',
        color: '$$colorSolid',

        '&:hover': {
          backgroundColor: '$$bgSolidHover',
        },

        '&:active': {
          backgroundColor: '$$bgSolidActive',
        },
      },
      ghost: {
        color: '$$color',
        backgroundColor: 'transparent',

        '&:hover': {
          backgroundColor: '$$bgHover',
        },

        '&:active': {
          backgroundColor: '$$bgActive',
        },
      },
    },
    colorScheme: {
      tomato: {
        $$bg: '$colors$tomato3',
        $$border: '$colors$tomato7',
        $$color: '$colors$tomato11',

        // hover styles
        $$bgHover: '$colors$tomato4',
        $$borderHover: '$colors$tomato8',

        // active styles
        $$bgActive: '$colors$tomato5',
        $$borderActive: '$colors$tomato8',

        // solid default styles
        $$bgSolid: '$colors$tomato9',
        $$colorSolid: 'white',
        // solid hover styles
        $$bgSolidHover: '$colors$tomato10',
        // solid active styles
        $$bgSolidActive: '$colors$tomato10',
      },
      red: {
        $$bg: '$colors$red3',
        $$border: '$colors$red7',
        $$color: '$colors$red11',

        // hover styles
        $$bgHover: '$colors$red4',
        $$borderHover: '$colors$red8',

        // active styles
        $$bgActive: '$colors$red5',
        $$borderActive: '$colors$red8',

        // solid default styles
        $$bgSolid: '$colors$red9',
        $$colorSolid: 'white',
        // solid hover styles
        $$bgSolidHover: '$colors$red10',
        // solid active styles
        $$bgSolidActive: '$colors$red10',
      },
      crimson: {
        $$bg: '$colors$crimson3',
        $$border: '$colors$crimson7',
        $$color: '$colors$crimson11',

        // hover styles
        $$bgHover: '$colors$crimson4',
        $$borderHover: '$colors$crimson8',

        // active styles
        $$bgActive: '$colors$crimson5',
        $$borderActive: '$colors$crimson8',

        // solid default styles
        $$bgSolid: '$colors$crimson9',
        $$colorSolid: 'white',
        // solid hover styles
        $$bgSolidHover: '$colors$crimson10',
        // solid active styles
        $$bgSolidActive: '$colors$crimson10',
      },
      pink: {
        $$bg: '$colors$pink3',
        $$border: '$colors$pink7',
        $$color: '$colors$pink11',

        // hover styles
        $$bgHover: '$colors$pink4',
        $$borderHover: '$colors$pink8',

        // active styles
        $$bgActive: '$colors$pink5',
        $$borderActive: '$colors$pink8',

        // solid default styles
        $$bgSolid: '$colors$pink9',
        $$colorSolid: 'white',
        // solid hover styles
        $$bgSolidHover: '$colors$pink10',
        // solid active styles
        $$bgSolidActive: '$colors$pink10',
      },
      plum: {
        $$bg: '$colors$plum3',
        $$border: '$colors$plum7',
        $$color: '$colors$plum11',

        // hover styles
        $$bgHover: '$colors$plum4',
        $$borderHover: '$colors$plum8',

        // active styles
        $$bgActive: '$colors$plum5',
        $$borderActive: '$colors$plum8',

        // solid default styles
        $$bgSolid: '$colors$plum9',
        $$colorSolid: 'white',
        // solid hover styles
        $$bgSolidHover: '$colors$plum10',
        // solid active styles
        $$bgSolidActive: '$colors$plum10',
      },
      purple: {
        $$bg: '$colors$purple3',
        $$border: '$colors$purple7',
        $$color: '$colors$purple11',

        // hover styles
        $$bgHover: '$colors$purple4',
        $$borderHover: '$colors$purple8',

        // active styles
        $$bgActive: '$colors$purple5',
        $$borderActive: '$colors$purple8',

        // solid default styles
        $$bgSolid: '$colors$purple9',
        $$colorSolid: 'white',
        // solid hover styles
        $$bgSolidHover: '$colors$purple10',
        // solid active styles
        $$bgSolidActive: '$colors$purple10',
      },
      violet: {
        $$bg: '$colors$violet3',
        $$border: '$colors$violet7',
        $$color: '$colors$violet11',

        // hover styles
        $$bgHover: '$colors$violet4',
        $$borderHover: '$colors$violet8',

        // active styles
        $$bgActive: '$colors$violet5',
        $$borderActive: '$colors$violet8',

        // solid default styles
        $$bgSolid: '$colors$violet9',
        $$colorSolid: 'white',
        // solid hover styles
        $$bgSolidHover: '$colors$violet10',
        // solid active styles
        $$bgSolidActive: '$colors$violet10',
      },
      indigo: {
        $$bg: '$colors$indigo3',
        $$border: '$colors$indigo7',
        $$color: '$colors$indigo11',

        // hover styles
        $$bgHover: '$colors$indigo4',
        $$borderHover: '$colors$indigo8',

        // active styles
        $$bgActive: '$colors$indigo5',
        $$borderActive: '$colors$indigo8',

        // solid default styles
        $$bgSolid: '$colors$indigo9',
        $$colorSolid: 'white',
        // solid hover styles
        $$bgSolidHover: '$colors$indigo10',
        // solid active styles
        $$bgSolidActive: '$colors$indigo10',
      },
      blue: {
        $$bg: '$colors$blue3',
        $$border: '$colors$blue7',
        $$color: '$colors$blue11',

        // hover styles
        $$bgHover: '$colors$blue4',
        $$borderHover: '$colors$blue8',

        // active styles
        $$bgActive: '$colors$blue5',
        $$borderActive: '$colors$blue8',

        // solid default styles
        $$bgSolid: '$colors$blue9',
        $$colorSolid: 'white',
        // solid hover styles
        $$bgSolidHover: '$colors$blue10',
        // solid active styles
        $$bgSolidActive: '$colors$blue10',
      },
      sky: {
        $$bg: '$colors$sky3',
        $$border: '$colors$sky7',
        $$color: '$colors$sky11',

        // hover styles
        $$bgHover: '$colors$sky4',
        $$borderHover: '$colors$sky8',

        // active styles
        $$bgActive: '$colors$sky5',
        $$borderActive: '$colors$sky8',

        // solid default styles
        $$bgSolid: '$colors$sky9',
        $$colorSolid: 'black',
        // solid hover styles
        $$bgSolidHover: '$colors$sky10',
        // solid active styles
        $$bgSolidActive: '$colors$sky10',
      },
      cyan: {
        $$bg: '$colors$cyan3',
        $$border: '$colors$cyan7',
        $$color: '$colors$cyan11',

        // hover styles
        $$bgHover: '$colors$cyan4',
        $$borderHover: '$colors$cyan8',

        // active styles
        $$bgActive: '$colors$cyan5',
        $$borderActive: '$colors$cyan8',

        // solid default styles
        $$bgSolid: '$colors$cyan9',
        $$colorSolid: 'white',
        // solid hover styles
        $$bgSolidHover: '$colors$cyan10',
        // solid active styles
        $$bgSolidActive: '$colors$cyan10',
      },
      teal: {
        $$bg: '$colors$teal3',
        $$border: '$colors$teal7',
        $$color: '$colors$teal11',

        // hover styles
        $$bgHover: '$colors$teal4',
        $$borderHover: '$colors$teal8',

        // active styles
        $$bgActive: '$colors$teal5',
        $$borderActive: '$colors$teal8',

        // solid default styles
        $$bgSolid: '$colors$teal9',
        $$colorSolid: 'white',
        // solid hover styles
        $$bgSolidHover: '$colors$teal10',
        // solid active styles
        $$bgSolidActive: '$colors$teal10',
      },
      mint: {
        $$bg: '$colors$mint3',
        $$border: '$colors$mint7',
        $$color: '$colors$mint11',

        // hover styles
        $$bgHover: '$colors$mint4',
        $$borderHover: '$colors$mint8',

        // active styles
        $$bgActive: '$colors$mint5',
        $$borderActive: '$colors$mint8',

        // solid default styles
        $$bgSolid: '$colors$mint9',
        $$colorSolid: 'black',
        // solid hover styles
        $$bgSolidHover: '$colors$mint10',
        // solid active styles
        $$bgSolidActive: '$colors$mint10',
      },
      green: {
        $$bg: '$colors$green3',
        $$border: '$colors$green7',
        $$color: '$colors$green11',

        // hover styles
        $$bgHover: '$colors$green4',
        $$borderHover: '$colors$green8',

        // active styles
        $$bgActive: '$colors$green5',
        $$borderActive: '$colors$green8',

        // solid default styles
        $$bgSolid: '$colors$green9',
        $$colorSolid: 'white',
        // solid hover styles
        $$bgSolidHover: '$colors$green10',
        // solid active styles
        $$bgSolidActive: '$colors$green10',
      },
      grass: {
        $$bg: '$colors$grass3',
        $$border: '$colors$grass7',
        $$color: '$colors$grass11',

        // hover styles
        $$bgHover: '$colors$grass4',
        $$borderHover: '$colors$grass8',

        // active styles
        $$bgActive: '$colors$grass5',
        $$borderActive: '$colors$grass8',

        // solid default styles
        $$bgSolid: '$colors$grass9',
        $$colorSolid: 'white',
        // solid hover styles
        $$bgSolidHover: '$colors$grass10',
        // solid active styles
        $$bgSolidActive: '$colors$grass10',
      },
      lime: {
        $$bg: '$colors$lime3',
        $$border: '$colors$lime7',
        $$color: '$colors$lime11',

        // hover styles
        $$bgHover: '$colors$lime4',
        $$borderHover: '$colors$lime8',

        // active styles
        $$bgActive: '$colors$lime5',
        $$borderActive: '$colors$lime8',

        // solid default styles
        $$bgSolid: '$colors$lime9',
        $$colorSolid: 'black',
        // solid hover styles
        $$bgSolidHover: '$colors$lime10',
        // solid active styles
        $$bgSolidActive: '$colors$lime10',
      },
      yellow: {
        $$bg: '$colors$yellow3',
        $$border: '$colors$yellow7',
        $$color: '$colors$yellow11',

        // hover styles
        $$bgHover: '$colors$yellow4',
        $$borderHover: '$colors$yellow8',

        // active styles
        $$bgActive: '$colors$yellow5',
        $$borderActive: '$colors$yellow8',

        // solid default styles
        $$bgSolid: '$colors$yellow9',
        $$colorSolid: 'black',
        // solid hover styles
        $$bgSolidHover: '$colors$yellow10',
        // solid active styles
        $$bgSolidActive: '$colors$yellow10',
      },
      amber: {
        $$bg: '$colors$amber3',
        $$border: '$colors$amber7',
        $$color: '$colors$amber11',

        // hover styles
        $$bgHover: '$colors$amber4',
        $$borderHover: '$colors$amber8',

        // active styles
        $$bgActive: '$colors$amber5',
        $$borderActive: '$colors$amber8',

        // solid default styles
        $$bgSolid: '$colors$amber9',
        $$colorSolid: 'black',
        // solid hover styles
        $$bgSolidHover: '$colors$amber10',
        // solid active styles
        $$bgSolidActive: '$colors$amber10',
      },
      orange: {
        $$bg: '$colors$orange3',
        $$border: '$colors$orange7',
        $$color: '$colors$orange11',

        // hover styles
        $$bgHover: '$colors$orange4',
        $$borderHover: '$colors$orange8',

        // active styles
        $$bgActive: '$colors$orange5',
        $$borderActive: '$colors$orange8',

        // solid default styles
        $$bgSolid: '$colors$orange9',
        $$colorSolid: 'white',
        // solid hover styles
        $$bgSolidHover: '$colors$orange10',
        // solid active styles
        $$bgSolidActive: '$colors$orange10',
      },
    },
    border: {
      true: {},
    },
  },
  compoundVariants: [
    {
      variant: 'subtle',
      border: true,
      css: {
        boxShadow: 'inset 0 0 0 1px $$border',
        '&:hover': {
          boxShadow: 'inset 0 0 0 1px $$borderHover',
        },
        '&:active': {
          boxShadow: 'inset 0 0 0 1px $$borderActive',
        },
      },
    },
  ],

  defaultVariants: {
    size: '2',
    variant: 'subtle',
  },
});
