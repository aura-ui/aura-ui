---
to: packages/<%= packageName %>/tsconfig.json
---

{
  "extends": "../../tsconfig.base.json",
  "include": ["src", "index.ts"],
  "exclude": ["dist", "node_modules"]
}
