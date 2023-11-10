module.exports = function (options) {
    return function (req, res, next) {
      // Implement the middleware function based on the options object
      next()
    }
  }
  const mw = require('./my-middleware.js')

app.use(mw({ option1: '1', option2: '2' }))