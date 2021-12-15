const { NODE_ENV } = process.env

const _isProduction = () => NODE_ENV === 'production'

// TODO: make configuable

module.exports = () => ({
  log: (msg, ...rest) => !_isProduction() && console.log(msg, ...rest),
  info: (msg, ...rest) => console.log(msg, ...rest),
  error: (msg, ...rest) => console.error(msg, ...rest),
  // TODO: other logs
})