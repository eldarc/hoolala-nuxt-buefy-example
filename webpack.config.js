// !!! This file is required so that WebStorm can detect aliases. !!!
const path = require('path')

module.exports = {
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
}
