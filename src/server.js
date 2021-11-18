import { Homework } from './hw'
import { Config } from './config'
import {toggle, setupTestsDiv } from './utils'
import mocha from 'mocha'
import { generateTests } from '../homeworks/hw5/tests'
import { createServerConfig, generateServerTests } from '../homeworks/hw5/extras'
var CONFIG = new Config()
var HW = new Homework(CONFIG)

// ეს საჭიროა შემდეგი ნაბიჯის ღილაკისთვის
// მერე გადავწეროთ რომ ჯავასკრიპტში იყოს
window.HW = HW

CONFIG = createServerConfig(CONFIG)
// ეს კიდე საჭიროა რომ ნაბიჯებს გადავახტეთ
window.CONFIG = CONFIG

setupTestsDiv()
toggle('help') // TODO ეს მალავს ჰო? 🤦🏻‍♀️
toggle('tests') // მე თუ გავხსნი ბრაუზერში რომ პირდაპირ საიტი ვნახო

mocha.setup("bdd");	
generateTests(CONFIG)
generateServerTests(CONFIG)
// HW.launchTests(mocha)

// TODO
function getScore(test) {
	return 1
}

const testResults = []

function testRequest() {
	console.log(testResults)
    const xhr = new XMLHttpRequest();
    xhr.open("POST", 'http://localhost:3939', true);

    //Send the proper header information along with the request
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function () { // Call a function when the state changes.
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            // Request finished. Do processing here.
            console.log(xhr.response)
        }
    }
    xhr.send(JSON.stringify(testResults));
// xhr.send(new Int8Array());
// xhr.send(document);
}

mocha.run()
        .on('pass', function (test) {
            testResults.push({
                passed: true,
                score: getScore(test),
                message: test.title
            })
        })
        .on('fail', function (test, err) {
            testResults.push({
                passed: false,
                message: test.title,
                score: getScore(test),
                failed: err.message
            })
        })
        .on('end', testRequest)