// const publicPath = process.env.NODE_ENV == 'development' ? './' : '//js.dhresource.com/nstatic/micro/decorate/tencentdemo/'
const publicPath = process.env.NODE_ENV == 'development' ? './' : './'
module.exports = {
    publicPath,
    outputDir: 'dist',
    assetsDir: 'static',
    devServer: {
        // 本地
        // proxy: {
        //     '/api': {
        //         target: 'https://seller.dhgate.com',
        //         changeOrigin: true,
        //         ws: true,
        //         pathRewrite: {
        //             '/api': '',   //重写请求路径
        //         },
        //         headers: {
        //             cookie: ''
        //         }
        //     }
        // },

        // 线上
        proxy: {
            '/aftersale': {
                target: 'https://seller.dhgate.com',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/aftersale': '',   //重写请求路径
                },
            }
        },
        disableHostCheck: true,
    },
}
