import { expect } from 'chai';
import { splitToLines } from "../../src/utils"
import { showMessage } from '../../src/instructions'

const steps = {
    greeting: 1,
    // finish:
}


export function generateTests(CONFIG){
    CONFIG.hints = 'on'

    CONFIG.isStep(steps.greetings) && describe(`შესავალი`, () => {

	})

    CONFIG.isStep(steps.finish) && describe('🥳', () => {
        toggle('help')
        showMessage('დავალების-ატვირთვა')
        it(`დავალების ატვირთვის წესი იგივეა, რაც წინაზე (შეგიძლია ქვემოთ ნახო). პირველი რამდენიმე სტუდენტი, ვინც მომწერს
        რა ნაბიჯი გამოვტოვე სრული ფუნქციონალისთვის, ბონუს ქულას მიიღებს`, () => {})
        const celebrationGif = document.createElement('img')
        // TODO change for last hw
        celebrationGif.src = 'https://media0.giphy.com/media/f6hnhHkks8bk4jwjh3/giphy.gif'
        celebrationGif.height = 400
        document.getElementById('tests').insertBefore(celebrationGif, document.getElementById('help'))
    })
}

function setPassword(CONFIG) {
	let password = Math.floor(Math.random() * (999999 - 100000) + 100000)
	if (!CONFIG.password) {
        CONFIG.password = password;
        CONFIG.save();
    }
}

