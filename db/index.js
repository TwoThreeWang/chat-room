'use strict'

const config = require('config-yml')

let db

switch (config.db.type) {
  case 'mysql':
    db = require('./mysql')
    break;
  case 'mongodb':
    db = require('./mongodb')
    break;
  case 'firebase':
    db = require('./firebase')
    break;
  case 'sqlite':
  default:
    db = require('./sqlite')
    break;
}

module.exports = db