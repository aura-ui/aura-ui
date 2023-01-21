---
to: packages/react/src/<%= h.dasherize(name) %>/index.ts
unless_exists: true
---

export * from './<%= h.changeCase.pascal(name) %>'
