const path = require('path');

module.exports = {
  "stories": [
    "../../brand-a/**/stories.@(ts|tsx)",
    "../../brand-b/**/stories.@(ts|tsx)",
    "../../common/**/stories.@(ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "@storybook/addon-actions",
    "@storybook/addon-backgrounds",
    "@storybook/addon-viewport",
  ],
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'core': path.resolve(__dirname, '../../brand-a/src/core'),
      'components': path.join(__dirname, '../../brand-a/src/components')
    }

    config.resolve.alias = {
      ...config.resolve.alias,
      'core': path.resolve(__dirname, '../../brand-b/src/core'),
      'components': path.join(__dirname, '../../brand-b/src/components')
    }

    return config;
  }
}
