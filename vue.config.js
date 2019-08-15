module.exports = {
    chainWebpack: config => {
        config.module.rules.delete('eslint');
    },
    productionSourceMap: false,
    devServer: {
        proxy: {
            "/api": {
                target: "http://127.0.0.1:8050/",
                ws: false,
                changeOrigin: true,
                pathRewrite: {
                    "^/api": "/"
                }
            }
        }
    }
};
