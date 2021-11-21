import { expect, assert } from 'chai'
// აქ ჩამოვწერთ რომელი მერამდენე იყოს რომ შემთხვევით
// რიცხვების შეცვლა არ დაგვავიწყდეს
import { toggle } from '../../src/utils'
import { showMessage } from '../../src/instructions'

const steps = {
	introduction: 1,
	console: 2,
	task1: 3,

}

export function generateTests(CONFIG) {
	CONFIG.isStep(steps.introduction) && describe(`შესავალი`, () => {
		CONFIG.hints = 'on'
		it(`ამ დავალების მიზანია ჯავასკრიპტის ფუნქციების და DOM-ის ვარჯიში`)
		console.log('hhh')
		toggle('help')
		// showMessage
	})


	CONFIG.isStep(steps.console) && describe('', () => {
		setPassword(CONFIG)
		window.getPassword = () => CONFIG.password
		it(`ამჯერადაც პაროლის ... გახსენი კონსოლი და გამოიძახე getPassword ფუნქცია`, () => {
			const n = Number(document.querySelector('div#write-password-inside').innerText)
        	expect(n).eql(CONFIG.password)
		})
		
	})

	CONFIG.isStep(steps.task1) && describe('', () => {
		it(`ჯერ სკრიპტ თეგი ჩაამატე. index.js ფაილი უკვე შევქმენი`, () => {
			scriptElem = document.getElementById(`my-script`)
			console.log(scriptElem)
			expect()
		})
		it(`სკრიპტ თეგი აუცილებელია, რომ იყოს (ადგილი უკვე მონიშნულია)`)
		it(`შექმენი ახალი ფუნქცია, რომელიც
			დარწმუნდი, რომ ამ ფუნქციას არსად იძახებ (მე გამოვიძახებ).
			რა თქმა უნდა, შეგიძლია შეამოწმო, მაგალითად, კონსოლიდან
			`, () => {
			document.getElementById('task1')
		})
		
	})
}


function setPassword(CONFIG) {
	let password = Math.floor(Math.random() * (999999 - 100000) + 100000)
	if (!CONFIG.password) {
        CONFIG.password = password;
        CONFIG.save();
    }
}
