const dev = require('./webpack.dev.js')
dev.entry = [ "@babel/polyfill",  "./src/cli.jsx"]
module.exports = dev