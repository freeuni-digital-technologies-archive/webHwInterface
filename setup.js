const testsDiv = `
<div id="tests" class="container">
    <div id="progress-bar"></div>
    <div id="mocha"></div>
    <!-- <script src="https://unpkg.com/chai/chai.js"></script>
    <script src="https://unpkg.com/mocha/mocha.js"></script> -->
</div>`

document.body.insertAdjacentHTML('afterbegin', testsDiv)
// document.getElementById("scripts").insertAdjacentElement('beforeend', `
//     <script class="eval-script" src="./config.js"></script>
//     <script class="eval-script" src="./instructions.js"></script>
//     <script class="eval-script" src="./tests.js"></script>
//     <script class="eval-script" src="./hw.js"></script>
// `)


const styles = [
    'https://unpkg.com/mocha/mocha.css',
    'teststyles.css'
]
styles
    .map(getStyleElement)
    .forEach(e => document.head.appendChild(e))

const customScripts = ['./config.js', './instructions.js', './tests.js', './hw.js']
const mochaScripts = [
    'https://unpkg.com/chai/chai.js',
    'https://unpkg.com/mocha/mocha.js'
]

mochaScripts
    .map(getScriptElement)
    .forEach(e => document.getElementById('mocha').appendChild(e))

const loadCustomScripts = setInterval(() => {
    if (typeof(mocha.setup) === 'function') {
        clearInterval(loadCustomScripts)
        customScripts
            .map(getScriptElement)
            .forEach(e => document.getElementById('scripts').appendChild(e))
    }
}, 50)

function getScriptElement( src, callback) {
    // console.log(callback)
    var s = document.createElement( 'script' );
    s.setAttribute('src', src);
    // s.onload=callback;
    return s
}


function getStyleElement( src, callback) {
    var s = document.createElement( 'link' );
    s.setAttribute('rel', 'stylesheet');
    s.setAttribute('href', src)
    // s.onload=callback;
    return s
}
  