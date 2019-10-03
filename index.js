const SentryCliPlugin = require('@sentry/webpack-plugin');

module.exports = {
  overrideWebpackConfig: ({ pluginOptions, webpackConfig, context: { env } }) => {
    const sentryPlugin = new SentryCliPlugin({
        include: './build/',
        ignoreFile: '.sentrycliignore',
        ignore: ['node_modules', 'webpack.config.js', 'craco.config.js'],
        configFile: 'sentry.properties',
        ...pluginOptions
    });
    webpackConfig.plugins.push(sentryPlugin);

    return webpackConfig;
  }
};
