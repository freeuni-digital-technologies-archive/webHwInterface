import { Homework } from './hw'
import { Config } from './config'
import {toggle, setupTestsDiv } from './utils'
import mocha from 'mocha'

export function setupInterface(CONFIG, HW, id) {
	if (!CONFIG) {
		CONFIG = new Config(id)
	}
	let localConfig = JSON.parse(localStorage.getItem('config'))
	if(localConfig.hw_id !== id){
		localConfig.currentStep = 1
		localConfig.hw_id = id
		CONFIG.currentStep = 1
		CONFIG.hw_id = id
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
