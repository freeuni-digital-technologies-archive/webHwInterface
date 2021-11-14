export function setupTestsDiv() {


    const styles = [
        'https://unpkg.com/mocha/mocha.css',
    // TODO move to appropriate place and change
    'https://freeuni-digital-technologies.github.io/webHwInterface/teststyles.css'
    ]
    styles
        .map(getStyleElement)
        .forEach(e => document.head.appendChild(e))
    const testsDiv = `
    <div id="tests" class="container">
        <div id="progress-bar"></div>
        <div id="mocha"></div>
        <div id="help">
            <div id="help-buttons"></div>
            <div id="instructions"></div>
        </div>
    </div>`

    document.body.insertAdjacentHTML('afterbegin', testsDiv)

}


function getStyleElement(src, callback) {
    var s = document.createElement('link');
    s.setAttribute('rel', 'stylesheet');
    s.setAttribute('href', src)
    // s.onload=callback;
    return s
}


export function toggle(id) {
    const e = document.getElementById(id).style
    e.display = e.display === 'none' ? '' : 'none'
}

window.toggle = toggle


