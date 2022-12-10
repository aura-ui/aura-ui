---
to: packages/<%= h.dasherize(name) %>/src/index.tsx
unless_exists: true
---

export * from './<%= h.changeCase.pascal(name) %>'
