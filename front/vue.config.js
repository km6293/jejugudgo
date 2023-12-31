const path = require('path');

module.exports = {
  devServer: {
    port: 9003,
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      '.zi-en.io',
      '52.79.41.173',
    ],
    client: {
      overlay: {
        runtimeErrors: false,
      },
    },
  },
  chainWebpack: (config) => {
    config.module
      .rule('images')
      .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
      .use('file-loader')
      .loader('file-loader')
      .tap(options => {
        options.name = 'img/[name].[hash:8].[ext]';
        return options;
      })
      .end();

    config.resolve.alias.set('@', path.resolve(__dirname, 'src'));
  },
  chainWebpack: (config) => {
    config.module
      .rule('svg')
      .exclude.add(path.resolve(__dirname, 'src/assets/img/small-logos'))
      .end();

    config.module
      .rule('svg-logos')
      .test(/\.svg$/)
      .include.add(path.resolve(__dirname, 'src/assets/img/small-logos'))
      .end()
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: 'img/[name].[hash:8].[ext]',
        outputPath: 'img',
        esModule: false,
      })
      .end();

    config.resolve.alias.set('@', path.resolve(__dirname, 'src'));
  },
};
