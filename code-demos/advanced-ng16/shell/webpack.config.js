const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  remotes: {
    checkout: `checkout@http://localhost:4201/remoteEntry.js?v=${new Date().getTime()}`,
    payment: "payment@http://localhost:5002/remoteEntry.js"
  },
  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});
