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


In case of Dashboard integration there can be an issue with react markdown (but it does not apply on pure insight integration)
```js
ERROR in ./node_modules/@gooddata/sdk-ui-dashboard/node_modules/react-markdown/lib/index.js 88:0-53
Module not found: Error: Can't resolve 'react/jsx-runtime' in '/Users/martinmilicka/repositories/3rdparty/gooddata-react-16/node_modules/@gooddata/sdk-ui-dashboard/node_modules/react-markdown/lib'
Did you mean 'jsx-runtime.js'?
BREAKING CHANGE: The request 'react/jsx-runtime' failed to resolve only because it was resolved as fully specified
(probably because the origin is strict EcmaScript Module, e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"').
The extension in the request is mandatory for it to be fully specified.
Add the extension to the request.
```
which can be fixed within `webpack.config.js`

```
resolve: {
  alias: {
      "react/jsx-runtime": path.join(__dirname, "node_modules/react/jsx-runtime"),
  }
}
```
