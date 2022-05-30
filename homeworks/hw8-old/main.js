import { setupInterface } from '../../src/setup'
import { generateTests } from './tests'

const { CONFIG, HW, mocha } = setupInterface(null, null, "hw8-old")

mocha.setup('bdd')
generateTests(CONFIG)
HW.launchTests(mocha)