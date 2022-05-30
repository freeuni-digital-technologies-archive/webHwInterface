import { setupInterface } from '../../src/setup'
import { generateTests } from './tests'

const { CONFIG, HW, mocha } = setupInterface("hw6")

mocha.setup('bdd')
generateTests(CONFIG)
HW.launchTests(mocha)

