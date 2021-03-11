const path = require("path");

module.exports = {
  optimization: {
    minimize: false,
  },
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.(ts|tsx)$/,
            include: path.resolve(__dirname, ""),
            loader: require.resolve("ts-loader"),
            options: {
              compilerOptions: {
                declaration: false,
                noEmit: false,
              },
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  node: {
    fs: "empty",
  },
};
