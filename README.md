# GoodData React Components

compatible with React v16

dynamically loading content from different workspaces

# Steps involved

- SDK 9 packages for backend control: 
  ```
  npm i @gooddata/api-client-tiger@9.9.1
  npm i @gooddata/sdk-backend-tiger@9.9.1
  ```
- latest SDK 9 essential frontend libraries: 
  ```
  npm i @gooddata/sdk-ui@9.9.1  # providers
  npm i @gooddata/sdk-ui-ext@9.9.1  # single vis
  npm i @gooddata/sdk-ui-dashboard@9.9.1  # dash
  ```
- Additional libraries to handle additional formats:
  ```
  npm install css-loader --save-dev  # change webpack
  npm install react-markdown@8.0.7
  
  ```

# Usage

1. `npm install`
2. `cp .env.template .env`, add fill in all vars.
3. `npm start`

## Remarks

```js
// not working in React 16
//import { Dashboard } from "@gooddata/sdk-ui-dashboard";
// solve in package json: override/resolution

// alternative
// import { BackendProvider, InsightView, idRef, WorkspaceProvider } from "@gooddata/sdk-ui-all";

,
  "overrides": {
    "react-markdown": "^9.0.1"
  }

```
