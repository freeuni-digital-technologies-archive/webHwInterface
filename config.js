mocha.setup("bdd");

/**
 * @typedef {Object} Config
 * @property {Number} currentStep
 * @property {Number} testCount
 * @property {Boolean} checkAll
 * @property {Boolean} if any tests failed during the run
 *  */ 



function readConfig() {
    // JSON.parse(localStorage.get('testConfig'))
    const c = JSON.parse(localStorage.getItem('config')) || {currentStep:1}
    c.testCount = 0
    return c
}

function saveConfig() {
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
function isStep(n) {
    CONFIG.testCount++
    if (CONFIG.checkAll) {
        return n < CONFIG.currentStep
    }
    return n === CONFIG.currentStep
}

function increaseStep(){
    CONFIG.currentStep++;
    saveConfig();
}

// გლობალური ცვლადი უნდა იყოს რომ სხვა ფაილებში წავიკითხოთ
// ასევე tests.js ან რამე ეგეთ ფაილში გვჭირდება ტესტების რაოდენობის განსაზღვრა
// შეიძლება isStep ფუნქციის გამოძახებისას გავზარდოთ ეგ count
// CONFIG.testCount++ ან რამე ეგეთი, ელეგანტური არაა მაგრამ ბევრ კონფიგურაციას
// არ მოითხოვს სამაგიეროდ
/**
 * @type Config
 */
const CONFIG = readConfig()
CONFIG.failed = false
CONFIG.isStep = isStep
CONFIG.save = saveConfig