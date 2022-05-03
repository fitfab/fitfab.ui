# Tailwind CSS Setup

1. Install Tailwind CSS at the root of your project.

```bash
yarn add -DW tailwindcss postcss autoprefixer
```

This will install tailwindcss and postcss and autoprefixer as a dependency and will add them to your package.json at the root of your project.

2. Create a folder named `tailwind` under the `packages` folder and add the following files:

```javascript
// tailwind.config.js
module.exports = {
  content: [
    "../../packages/fitfab-core/src/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

```javascript
// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

3. Consuming the tailwind configuration files in the apps and packages:

add the `tailwind` package to your dependencies in the `package.json` file.

```json
 "dependencies": {
    "@fitfab/core": "*",
    "@fitfab/utils": "*",
    "@fitfab/tailwind": "*",
    "next": "^12.0.8",
    "react": "^17.0.2",
    "react-dom": "^17.0.2"
  },
```

```javascript
// apps/docs/tailwind.config.js
module.exports = require("@fitfab/tailwind/tailwind.config");
```

```javascript
// apps/docs/postcss.config.js
module.exports = require("@fitfab/tailwind/postcss.config");
```
