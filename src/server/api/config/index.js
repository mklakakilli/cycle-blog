import {merge} from 'ramda'

// Configs
import test from './test'
import development from './development'
import production from './production'

let configs = {
  test,
  development,
  production
}

let ENV = process.env.NODE_ENV || 'development'

let mainConfig = {
// MongoDB connection options
  mongo: {
    options: {
      db: {
        safe: true
      }
    }
  },

  env: ENV
}

let config = merge(mainConfig, configs[ENV])

export default config
