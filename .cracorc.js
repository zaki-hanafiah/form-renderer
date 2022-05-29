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
