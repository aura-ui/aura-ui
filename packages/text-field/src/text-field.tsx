import * as React from 'react';
import { ComponentProps, styled, VariantProps } from '@aura-ui/theme';
import { textField } from './text-field.styles';

export type TextFieldBaseProps = ComponentProps<typeof TextFieldBase>;
export type TextFieldVariants = VariantProps<typeof TextFieldBase>;

const TextFieldBase = styled('input', {
  ...textField,
});

export interface TextFieldProps extends TextFieldBaseProps {}

export const TextField = React.forwardRef(
  (props: TextFieldProps, ref: React.ForwardedRef<HTMLInputElement>) => {
    // const inputRef = useObjectRef(ref);
    // const { labelProps, inputProps, descriptionProps, errorMessageProps  } = useTextField(props, inputRef)
    return <TextFieldBase {...props} ref={ref} />;
  }
);
