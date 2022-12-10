---
to: packages/<%= h.dasherize(name) %>/README.md
unless_exists: true
---

# <%= h.humanize(name) %>

Aura UI <%= h.humanize(name) %> component.

## Installation

```sh
npm install @aura-ui/<%= h.dasherize(name) %>
# or
yarn add @aura-ui/<%= h.dasherize(name) %>
```

## Import Components

```jsx
import {
<%= h.changeCase.pascal(name) %>
} from '@aura-ui/<%= h.dasherize(name) %>'
```

## Component

`<%= h.changeCase.pascal(name) %>`: <%= packageDescription %>.

## Usage

Add any usage examples here.
