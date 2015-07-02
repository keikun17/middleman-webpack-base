module.exports = {
  entry: "./source/javascripts/entry.js",
  output: {
    path: "./source/javascripts",
    filename: "bundle"
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

  // externals: {
  //   'react': 'React'
  // },
  //
  resolve: {
    extensions: ['', '.coffee', '.jsx', '.json', '.es6', '.js']
  }
}
