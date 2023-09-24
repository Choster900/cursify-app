const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
 /*  devServer: {
    proxy: {
      "^/v1": {
        target: "http://localhost:8080",
        ws: true,
        changeOrigin: true,
      },
    },
  }, */
});
