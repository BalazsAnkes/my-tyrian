import defaultConfig from '../../config/default.json'
import localConfig from '../../config/local.json'

let config

if (process.env.NODE_ENV === 'development') {
  config = Object.freeze({
    ...defaultConfig,
    ...localConfig
  })
} else {
  config = Object.freeze(defaultConfig)
}

export default config
