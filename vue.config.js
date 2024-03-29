const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false
})
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/https://github.com/yumesh55/webform.git/'
    : '/'
}

module.exports = {
  pwa: {
      workboxOptions: {
        exclude: [/_redirects/]
      }
    }
}