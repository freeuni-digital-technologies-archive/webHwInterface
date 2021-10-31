mocha.setup("bdd");

/**
 * @typedef {Object} Config
 * @property {Number} currentStep
 * @property {Number} testCount
 * @property {Boolean} checkAll
 * @property {Boolean} if any tests failed during the run
 * @property {String} show hint mode
 *  */

class Config {
    constructor() {
        this.readData()
        this.testCount = 0
        this.failed = false
        this.hints = false
    }

    readData() {
        const c = JSON.parse(localStorage.getItem('config')) || { currentStep: 1 }
        Object.keys(c).forEach(k => this[k] = c[k])
    }

    save() {
        localStorage.setItem('config', JSON.stringify(CONFIG))
    }

    /**
     * 
     * @param {Number} n returns if current step is n
     * if checkAll setting is on, returns if current step is
     * less than n
     * This function should only be called before describe since
     * it counts the number of times it is called
     * @returns {Boolean} 
     */
    isStep(n) {
        CONFIG.testCount++
        if (CONFIG.checkAll) {
            return n < CONFIG.currentStep
        }
        return n === CONFIG.currentStep
    }

    increaseStep() {
        CONFIG.currentStep++;
        saveConfig();
    }
}

/**
 * @type Config
 */
var CONFIG = new Config()
