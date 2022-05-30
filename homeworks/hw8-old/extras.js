import { generateTests } from "./tests"

export function createServerConfig(CONFIG) {
	// CONFIG.isStep = function(i) {
	// 	return i > 2 && i < 8
	// }
	CONFIG.isStep = function(i) {
		return i > 2
	}
	CONFIG.server = true
	return CONFIG
}

export function getScore(test) {
	return 1
}

export function generateServerTests(CONFIG) {
	generateTests(CONFIG)
}




