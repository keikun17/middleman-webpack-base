module.exports = {
  entry: "./source/javascripts/entry.js",
  output: {
    filename: "./source/javascripts/bundle.js"
  },

  module: {
    loaders: [

      // React and ES5
      {
        test: /\.(jsx|js|es6)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel", query: {optional: [], stage: 0} // optional: ['runtime']
      },

      // Coffeescript
      { test: /\.coffee$/, loader: "coffee-loader"}
    ]
  },

  resolve: {
    extensions: ['', 'coffee', 'jsx', 'json', 'es6', 'js']
  }
}
