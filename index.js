const logger = require('simple-json-logger')

const processEnv = process.env
const envsKeys = Object.keys(processEnv)
const missiedEnvs = []
const missedLen = missiedEnvs.length

module.exports = (envs) => {
  for (let env in envs) {
    if (!envsKeys.includes(env)) {
      missiedEnvs.push(env)
    }
  }

  if (missedLen > 0) {
    if (missedLen === 1) {
      throw new Error(`missing env : ${missiedEnvs[0]}`)
    } else {
      throw new Error(`missing envs : ${missiedEnvs.join()}`)
    }
  }

  logger.info('checked all required envs')
  return envs
}
