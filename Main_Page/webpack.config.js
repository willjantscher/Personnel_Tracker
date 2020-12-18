const webpackMerge = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "scorp",
    projectName: "main-page",
    webpackConfigEnv,
    argv,
  });

  return webpackMerge.smart(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    // module: {
    //   rules: [
    //     {
    //       test: /\.(png|svg|jpg|jpeg|gif)$/i,
    //       type: 'asset/resource',
    //     },
    //     {
    //       test: /\.(woff|woff2|eot|ttf|otf)$/i,
    //       type: 'asset/resource',
    //     },
    //   ],
    // },
  });
};
