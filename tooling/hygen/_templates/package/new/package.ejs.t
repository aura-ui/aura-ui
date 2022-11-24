---
to: packages/<%= packageName %>/package.json
---

{
  "name": "@aura-ui/<%= packageName %>",
  "version": "<%= packageVersion %>",
  "description": "<%= packageDescription %>",
  "author": "Greg Ogun <gregogun97@gmail.com>",
  "homepage": "https://github.com/aura-ui/aura-ui#readme",
  "license": "MIT",
  "main": "./dist/index.js",
  "module": "./dist/index.mjs",
  "types": "./dist/index.d.ts",
  "sideEffects": false,
  "files": [
    "dist/**"
  ],
  "publishConfig": {
    "access": "public"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/aura-ui/aura-ui.git",
    "directory": "packages/layout"
  },
  "bugs": {
    "url": "https://github.com/aura-ui/aura-ui/issues"
  },
  "scripts": {
    "build": "tsup src/index.tsx --format esm,cjs --dts --external react",
    "dev": "tsup src/index.tsx --format esm,cjs --watch --dts --external react",
    "clean": "rm -rf .turbo && rm -rf node_modules && rm -rf dist"
  },
  "dependencies": {
    "@aura-ui/theme": "workspace:*"
  },
  "devDependencies": {
    "@types/react": "17.0.37",
    "@types/react-dom": "17.0.11",
    "typescript": "4.7.4",
    "tsup": "5.11.7",
    "react": "17.0.2"
  }
}