
/**
 * @typedef {Object} Config
 * @property {Number} currentStep
 * @property {Number} testCount
 * @property {Boolean} checkAll
 * @property {Boolean} if any tests failed during the run
 * @property {String} show hint mode
 *  */

 export class Config {
    constructor(id) {
        this.readData()
        this.testCount = 0
        this.failed = false
        this.hints = false
        this.hw_id = id
    }

    readData() {
        const c = JSON.parse(localStorage.getItem('config')) || { currentStep: 1 }
        Object.keys(c).forEach(k => this[k] = c[k])
    }

    save() {
        localStorage.setItem('config', JSON.stringify(this))
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
        this.testCount++
        if (this.checkAll) {
            return n < this.currentStep
        }
        return n === this.currentStep
    }

    increaseStep() {
        this.currentStep++;
        saveConfig();
    }
}