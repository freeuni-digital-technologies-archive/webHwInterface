import { Homework } from './hw'
import { Config } from './config'
import {toggle, setupTestsDiv } from './utils'
import mocha from 'mocha'

export function setupInterface(CONFIG, HW) {
	if (!CONFIG) {
		CONFIG = new Config()
	}
	if (!HW) {
		HW = new Homework(CONFIG)
	}
	window.HW = HW
	window.CONFIG = CONFIG
	HW.checkPath();
	// ეს კიდე საჭიროა რომ ნაბიჯებს გადავახტეთ
	setupTestsDiv()
	toggle('help')
	mocha.setup("bdd");
	return {
		CONFIG: CONFIG,
		HW: HW,
		mocha: mocha
	}
}

