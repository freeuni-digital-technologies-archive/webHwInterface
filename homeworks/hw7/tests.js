import { expect, assert } from 'chai'
import { specifiers } from './specifiers'

const steps = {
    greetings: 1,
    console: 2,
    add_post: 3,
    add_like: 4,
    delete_post: 5
}

export function generateTests(CONFIG){
    CONFIG.isStep(steps.greetings) && describe(`შესავალი`, () => {
		it(`ამ დავალების მიზანია ჯავასკრიპტის ფუნქციების და DOM-ის ვარჯიში`)
        
	})

    CONFIG.isStep(steps.console) && describe(``, () => {
        setPassword(CONFIG)
        window.getPassword = () => CONFIG.password
        it(`ამჯერადაც პაროლის ... გახსენი კონსოლი და გამოიძახე getPassword() ფუნქცია`, () => {
			const n = Number(document.querySelector(`div#write-password-inside`).innerText)
        	expect(n).eql(CONFIG.password)
		})
	})

    CONFIG.isStep(steps.add_post) && describe('პოსტის დამატება', () => {
        it('ის ცვლილებები, რომელიც index.html ფაილში უნდა შეიტანოთ, შეიტანეთ div#app კონტეინერის შიგნით, გარდა სკრიპტის დამატებისა. სკრიპტის დამატებისთვის გადადით index.html ფაილში და იპოვეთ შესაბამისი კომენტარი')

        it(`ჯერ სკრიპტ თეგი ჩაამატე. index.js ფაილი უკვე შევქმენი. თქვენს სკრიპტ თეგს id უნდა ჰქონდეს my-script`, () => {
			let scriptElem = document.querySelector("body > script#my-script")
            expect(scriptElem).to.not.to.be.undefined
            expect(scriptElem.getAttribute("src")).eql("./index.js");
		})
        
        it('მოდი დავამატოთ ისეთი სექცია, სადაც იუზერი შეძლებს ტექსტის შეყვანას და შემდეგ დაპოსტვას')
        it('input ელემენტი უკვე ნასწავლი გვაქვს, მაგრამ მისი დამატების შემთხვევაში ვხედავთ რომ საკმაოდ პატარა ველი არის მრავარპარაგრაფიანი მჭერმეტყველი პოსტებისთვის, რომელიც სოციალურ მედიას ახასიათებს.')
        it(`იმისათვის, რომ პატარა ველი არ გვქონდეს, გამოვიყენოთ ერთ-ერთი თაგი textarea, რომლის id იქნება ${specifiers.textareaId}`, () => {
            const textareaTag = document.querySelector(`div#app > textarea#${specifiers.textareaId}`)
            expect(textareaTag).to.not.to.be.undefined;
        })

        it(`ახლა კი დავამატოთ ახალი კონტეინერი, სადაც გამოჩნდება იუზერის მიერ დამატებული პოსტები. კონტეინერის აიდი უნდა იყოს ${specifiers.postsContainerId}`,() => {
            const postsContainer = document.querySelector(`div#app > div#${specifiers.postsContainerId}`);
            expect(postsContainer).to.not.to.be.undefined;
        })

        // TODO:

    })

    CONFIG.isStep(steps.add_like) && describe('ლაიქის დამატება', () => {
        // TODO: 
    })

    CONFIG.isStep(steps.delete_post) && describe('პოსტის წაშლა', () => {
        // TODO:
        
    })
}

function setPassword(CONFIG) {
	let password = Math.floor(Math.random() * (999999 - 100000) + 100000)
	if (!CONFIG.password) {
        CONFIG.password = password;
        CONFIG.save();
    }
}
