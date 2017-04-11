module.exports = {
  // tells wp where to start processing code
  entry: './public/app.js',
  // tells wp where to put output
  output: {
    // path to folder
    path: __dirname,
    // output file name
    filename: './public/bundle.js'
  },
  // takes an extensions array - this is a list of extensions that we want to process
  resolve:{
    extensions: ['', '.js', '.jsx']
  }
}
