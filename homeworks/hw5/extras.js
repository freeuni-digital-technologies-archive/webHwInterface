

export function createServerConfig(CONFIG) {
	CONFIG.isStep = function(i) {
		console.log(i)
		return i > 2 && i < 8
	}
	return CONFIG
}

export function generateServerTests() {

}