const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
    plugins: [
        {
            plugin: {
                overrideWebpackConfig: ({ webpackConfig }) => {
                    webpackConfig.resolve.plugins.push(
                        new TsconfigPathsPlugin({})
                    )
                    return webpackConfig
                },
            },
        },
    ],
    webpack: {
        configure: (webpackConfig, { env }) => {
            if (env === 'production') {
                const instanceOfMiniCssExtractPlugin =
                    webpackConfig.plugins.find(
                        (plugin) => plugin instanceof MiniCssExtractPlugin
                    )

                instanceOfMiniCssExtractPlugin.options.ignoreOrder = true
            }

            return webpackConfig
        },
    },
}
// __secfix_medium_20260820_1433__
// __secfix_medium_20260831_837__
// __secfix_critical_20260904_193__
// __secfix_medium_20260809_1914__
// __secfix_high_20260822_1512__
