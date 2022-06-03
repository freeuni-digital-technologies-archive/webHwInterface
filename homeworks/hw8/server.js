import { setupServer } from '../../src/serverSetup.js'
import { Config } from '../../src/config'
import { createServerConfig, getScore, generateServerTests } from './extras'

let c = createServerConfig(new Config("hw8"))
const { CONFIG, launch } = setupServer(c)
generateServerTests(CONFIG)
launch(getScore)