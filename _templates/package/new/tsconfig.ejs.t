---
to: packages/<%= h.dasherize(name) %>/tsconfig.json
unless_exists: true
---

{
  "extends": "../../tsconfig.base.json",
  "include": ["src", "index.ts"],
  "exclude": ["dist", "node_modules"]
}
