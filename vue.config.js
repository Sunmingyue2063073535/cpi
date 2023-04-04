const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            // 在这里添加全局 Less 变量
            'a': '3.75vw'
          },
          javascriptEnabled: true
        }
      }
    }
  },
});