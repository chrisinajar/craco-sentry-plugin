# Craco Sentry Plugin
This is a [craco](https://github.com/sharegate/craco) plugin that adds @sentry/webpack-plugin support to [create-react-app](https://facebook.github.io/create-react-app/) version >= 2.

> Use [react-app-rewired](https://github.com/timarney/react-app-rewired) for `create-react-app` version 1.

# Installation
```bash
yarn add craco-sentry-plugin
```
or
```bash
npm i --save craco-sentry-plugin
```

then edit your `craco.config.js` file to contain the plugin
```js
const SentryPlugin = require("craco-sentry-plugin");

module.exports = function({ env }) {
  return {
    plugins: [{
      plugin: SentryPlugin,
      options: {
        include: './build/',
        ignoreFile: '.sentrycliignore',
        ignore: ['node_modules', 'webpack.config.js', 'craco.config.js'],
        configFile: 'sentry.properties'
      }
    }]
  }
};
```

# License
MIT
