import { Homework } from './hw'
import { Config } from './config'
import {toggle, setupTestsDiv } from './utils'
import mocha from 'mocha'
import { generateTests } from './tests'
var CONFIG = new Config()
var HW = new Homework(CONFIG)

// ეს საჭიროა შემდეგი ნაბიჯის ღილაკისთვის
// მერე გადავწეროთ რომ ჯავასკრიპტში იყოს
window.HW = HW

// ეს კიდე საჭიროა რომ ნაბიჯებს გადავახტეთ
window.CONFIG = CONFIG
setupTestsDiv()
toggle('help')

mocha.setup("bdd");
generateTests(CONFIG)
HW.launchTests(mocha)