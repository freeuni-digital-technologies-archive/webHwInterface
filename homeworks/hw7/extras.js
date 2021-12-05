import { generateTests } from "./tests"

export function createServerConfig(CONFIG) {
	CONFIG.isStep = function(i) {
		return i > 2 && i < 8
	}
	return CONFIG
}

export function generateServerTests(CONFIG) {
	generateTests(CONFIG);
}


export function getScore(test) {
	return 1
}