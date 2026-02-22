module.exports = {
    devServer: (devServerConfig) => {
        // Handle migration from deprecated onBeforeSetupMiddleware and onAfterSetupMiddleware
        // to new setupMiddlewares API in webpack-dev-server 4.6+
        const { onBeforeSetupMiddleware, onAfterSetupMiddleware, https } =
            devServerConfig

        if (onBeforeSetupMiddleware || onAfterSetupMiddleware) {
            delete devServerConfig.onBeforeSetupMiddleware
            delete devServerConfig.onAfterSetupMiddleware

            devServerConfig.setupMiddlewares = (middlewares, devServer) => {
                if (onBeforeSetupMiddleware) {
                    onBeforeSetupMiddleware(devServer)
                }

                if (onAfterSetupMiddleware) {
                    onAfterSetupMiddleware(devServer)
                }

                return middlewares
            }
        }

        // Handle migration from deprecated https to server option
        if (https !== undefined) {
            delete devServerConfig.https
            devServerConfig.server = https
                ? {
                      type: 'https',
                  }
                : {
                      type: 'http',
                  }
        }

        return devServerConfig
    },
}
