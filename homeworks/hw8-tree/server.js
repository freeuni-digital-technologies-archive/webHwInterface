import { setupServer } from '../../src/serverSetup.js'
import { generateTests } from './tests'
import { Config } from '../../src/config'
import { createServerConfig, getScore, generateServerTests } from './extras'

let c = createServerConfig(new Config(''))
const { CONFIG, HW, mocha, launch } = setupServer(c)
generateServerTests(CONFIG)
launch(getScore)