let  defaultWebpack = {
  mode: 'production',
  bail: true,
  devtool: 'source-map',
  entry: '/Users/wangbaoqi/githubProject/react-rewrite/src/index.js',
  output: {
    path: '/Users/wangbaoqi/githubProject/react-rewrite/build',
    pathinfo: false,
    filename: 'static/js/[name].[contenthash:8].js',
    futureEmitAssets: true,
    chunkFilename: 'static/js/[name].[contenthash:8].chunk.js',
    publicPath: '/',
    devtoolModuleFilenameTemplate: [Function],
    jsonpFunction: 'webpackJsonpreact-rewrite',
    globalObject: 'this'
  },
  optimization: {
   
  },
  resolve: {
    modules: [
      'node_modules',
      '/Users/wangbaoqi/githubProject/react-rewrite/node_modules'
    ],
    extensions: [
      '.web.mjs', '.mjs',
      '.web.js',  '.js',
      '.json',    '.web.jsx',
      '.jsx'
    ],
    alias: { 'react-native': 'react-native-web' },
    plugins: [ [Object], [ModuleScopePlugin] ]
  },
  resolveLoader: { plugins: [ [Object] ] },
  module: { strictExportPresence: true, rules: [ [Object], [Object] ] },
  plugins: [
    HtmlWebpackPlugin,
    InlineChunkHtmlPlugin,
    InterpolateHtmlPlugin,
    ModuleNotFoundPlugin,
    DefinePlugin,
    MiniCssExtractPlugin,
    ManifestPlugin,
    IgnorePlugin,
    ESLintWebpackPlugin
  ],
  node: {
    module: 'empty',
    dgram: 'empty',
    dns: 'mock',
    fs: 'empty',
    http2: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  },
  performance: false
}



