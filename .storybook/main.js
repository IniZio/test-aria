const WindiCSS = require('vite-plugin-windicss').default

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y"
  ],
  "framework": "@storybook/vue3",
  "core": {
    "builder": "storybook-builder-vite"
  },
  async viteFinal(config, {configType}) {
    config.resolve.dedupe = ["@storybook/client-api"]

    config.plugins.push(WindiCSS())

    return config
  },
}