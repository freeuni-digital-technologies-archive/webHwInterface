// ეს ფაილი აღარ გვჭირდება წესით

function main() {
    // ჩატვირთვის გიფი და ტექსტი
    setUpScriptTags()
    loadAfterCondition(() => typeof(testsLoaded) !== 'undefined', () => {
        HW.launchTests()
    })
    // გიფის და ტექსტის წაშლა
}

function setUpScriptTags() {
    document.body.insertAdjacentHTML('afterbegin', testsDiv)
    styles
        .map(getStyleElement)
        .forEach(e => document.head.appendChild(e))
    mochaScripts
        .map(getScriptElement)
        .forEach(e => document.getElementById('mocha').appendChild(e))
    loadAfterCondition(() => typeof (mocha.setup) === 'function', () => {
        customScripts
            .map(getScriptElement)
            .forEach((e, i) => setTimeout(() => 
                    document.getElementById('scripts').appendChild(e), i*50))
    })
}

const testsDiv = `
<div id="tests" class="container">
    <div id="progress-bar"></div>
    <div id="mocha"></div>
    <div id="help">
        <div id="help-buttons"></div>
        <div id="instructions"></div>
    </div>
</div>`



const styles = [
    'https://unpkg.com/mocha/mocha.css',
    'teststyles.css'
]

const customScripts = ['./config.js', './instructions.js',  './hw.js', './tests.js',]
const mochaScripts = [
    'https://unpkg.com/chai/chai.js',
    'https://unpkg.com/mocha/mocha.js'
]

function loadAfterCondition(checkCondition, load) {
    var loadCustomScripts = setInterval(() => {
        if (checkCondition()) {
            clearInterval(loadCustomScripts)
            setTimeout(load, 400)
        }
    }, 50)
}

function getScriptElement(src, callback) {
    // console.log(callback)
    var s = document.createElement('script');
    s.setAttribute('src', src);
    // s.onload=callback;
    return s
}


function getStyleElement(src, callback) {
    var s = document.createElement('link');
    s.setAttribute('rel', 'stylesheet');
    s.setAttribute('href', src)
    // s.onload=callback;
    return s
}


// setTimeout(() => {

// }, 1000)

main()