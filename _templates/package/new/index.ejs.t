---
to: packages/<%= h.dasherize(name) %>/index.ts
unless_exists: true
---

export * from './src'


