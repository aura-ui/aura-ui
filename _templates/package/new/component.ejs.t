---
to: packages/react/src/<%= h.changeCase.pascal(name) %>.tsx
unless_exists: true
---
import * as React from 'react';
import { styled, ComponentProps } from '../theme';
<% if(locals.packageType === 'component'){ -%>

type <%= h.changeCase.pascal(name) %>BaseProps = ComponentProps<typeof <%= h.changeCase.pascal(name) %>Base>

const <%= h.changeCase.pascal(name) %>Base = styled('<%= htmlElement %>', {
  // ...styles
})

export interface <%= h.changeCase.pascal(name) %>Props extends <%= h.changeCase.pascal(name) %>BaseProps {}

export const <%= h.changeCase.pascal(name) %> = ({ ...props }: <%= h.changeCase.pascal(name) %>Props) => {
  return <<%= h.changeCase.pascal(name) %>Base {...props} />
}

 <% } else{ %>
import * as <%= h.changeCase.pascal(name) %>Primitive from '@radix-ui/react-<%= h.dasherize(name) %>'

type <%= h.changeCase.pascal(name) %>Props = ComponentProps<typeof <%= h.changeCase.pascal(name) %>Primitive.Root>

export const Styled<%= h.changeCase.pascal(name) %> = styled(<%= h.changeCase.pascal(name) %>Primitive.Root)

// For more information on installation and usage, see https://www.radix-ui.com/docs/primitives/components/<%= h.dasherize(name) %>

<% } -%>


