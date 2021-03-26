

const path = require('path')
const { 
  override,
  overrideDevServer,
  addWebpackAlias,
  addWebpackExternals,
  fixBabelImports,
  addLessLoader
} = require('customize-cra')

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;




// 跨域设置
const devServerConfig = () => config => {

  return {
    ...config,
    proxy: {
      '/api': {
        // real web url 
        target: 'https://www.fastmock.site',
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          '^/api': '/mock/8fb212f790315686fcdb5090fa05716e/wxeat'
        },
        logLevel: 'debug',
      }
    }
  }
}

const customWebpack = () => config => {
  if(process.env.NODE_ENV === 'production') {
    config.devtool = false;
    
    // 打包分析
    config.plugins.push(
      new BundleAnalyzerPlugin()
    )
  }
  return config
}


module.exports = {
  // webpack 配置
  webpack: override(

    addLessLoader(),
    
    addWebpackAlias({
      "@": path.resolve("./src")
    }),


    customWebpack()
  ),
  // 本地服务 配置
  devServer: overrideDevServer(
    devServerConfig()
  )
}

