let path = require('path')

module.exports = Object.assign(
  {
    api_server: 'https://www.0x00-pl.site'
  },
  require('./deployment_config/api_server.json')
)
