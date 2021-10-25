mocha.setup("bdd");

/**
 * @typedef {Object} Config
 * @property {Number} currentStep
 *  */ 

function readConfig() {
    // JSON.parse(localStorage.get('testConfig'))
    return {}
}

function saveConfig() {
    // localStorage.put თუ რაც ქვია JSON.stringify(CONFIG)
}

/**
 * 
 * @param {Number} n returns if current step is n
 * @returns {Boolean} 
 */
function isStep(n) {
    /*
     if (CONFIG.checkAll) {
        return n < CONFIG.currentStep
    }
    return n === CONFIG.currentStep
    */
    // თუ ყველას ამოწმებს , n-ზე ნაკლები რომელიცაა ის დააბრუნოს
    // თუ 
}

// გლობალური ცვლადი უნდა იყოს რომ სხვა ფაილებში წავიკითხოთ
// ასევე tests.js ან რამე ეგეთ ფაილში გვჭირდება ტესტების რაოდენობის განსაზღვრა
// შეიძლება isStep ფუნქციის გამოძახებისას გავზარდოთ ეგ count
// CONFIG.testCount++ ან რამე ეგეთი, ელეგანტური არაა მაგრამ ბევრ კონფიგურაციას
// არ მოითხოვს სამაგიეროდ
const CONFIG = readConfig()
CONFIG.isStep = isStep
CONFIG.save = saveConfig