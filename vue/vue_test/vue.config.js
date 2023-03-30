module.exports = {
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.js',//不能注释掉，否则不能运行
    },
  },
  lintOnSave:false,//关闭语法检查
  // 开启代理服务器（方式一）
   /* devServer: {
    proxy: 'http://localhost:5000'
  } ,*/
  // 开启代理服务器（方式二）
 devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        pathRewrite:{'^/api':''},
        // ws: true, //用于支持websocket
        // changeOrigin: true //用于控制请求头中的host值  欺骗被请求的服务器来自于哪里
      },
      '/demo': {
        target: 'http://localhost:5001',
				pathRewrite:{'^/demo':''},
        // ws: true, //用于支持websocket
        // changeOrigin: true //用于控制请求头中的host值
      }
    }
  }
}