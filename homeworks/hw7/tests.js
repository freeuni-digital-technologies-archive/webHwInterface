import { expect } from 'chai';
import { splitToLines } from "../../src/utils"
import { showMessage } from '../../src/instructions'

const steps = {
    greetings: 1,
    elements: 2,
    console: 3,
    simple_post: 4,
    add_post_console: 5,
    add_post: 6,
    // like_button: 6,
    // like_function: 7,
    finish: 7
}

export const specifiers = {
    textareaId: "new-post-text",
    postsContainerId: "posts-container",
    addPostButtonId: "add-post",
    postElementClass: "post",
    postElementIdSuffix: "post-",
    postElementTextClass: 'post-text',
    postLikesNumberClass: 'post-likes-number',
    postLikeButtonClass: 'post-like-button',
    postDeleteButtonClass: 'delete-post'
}

export function generateTests(CONFIG){
    CONFIG.hints = 'on'

    CONFIG.isStep(steps.greetings) && describe(`შესავალი`, () => {
		it(`ამ დავალებაში რამდენიმე კვირის წინ სემინარზე ნასწავლ მასალაში ვივარჯიშებთ. გვინდა 
		გავაკეთოთ "სოციალური ქსელი" დაპოსტვის ფუნქციით`)
        setPassword(CONFIG)
        window.getPassword = () => CONFIG.password
        it(`პაროლზე რამე ორიგინალურის მოფიქრება გვინდოდა მაგრამ ვერ მოვასწარით.
         გახსენი კონსოლი და გამოიძახე getPassword() ფუნქცია, შემდეგ კი index.html ფაილში იპოვე div, 
         რომლის id არის write-password-inside. აქ ჩაწერე ფუნქციის მიერ დაბრუნებული შედეგი`, () => {
			const n = Number(document.querySelector(`div#write-password-inside`).innerText)
        	expect(n).to.equal(CONFIG.password)
		})
        it(`console > getPassword()`)

	})


    CONFIG.isStep(steps.elements) && describe('პოსტის დამატება (HTML)', () => {
        it(`დასაწყისისთვის გვჭირდება ტექსტის შესაყვანი ველი`)
        it(`input ელემენტი უკვე ნასწავლი გვაქვს, მაგრამ მისი დამატების შემთხვევაში ვხედავთ, 
        რომ საკმაოდ პატარა ველი არის მრავარპარაგრაფიანი მჭერმეტყველი პოსტებისთვის, რომელიც სოციალურ მედიას ახასიათებს.`)
        it(`იმისათვის, რომ პატარა ველი არ გვქონდეს, გამოვიყენოთ ერთ-ერთი თაგი textarea, 
        რომლის id იქნება ${specifiers.textareaId}. დაამატე index.html-ში. გაითვალისწინე, რომ ყველა ელემენტი 
        div#app-ში იყოს (ანუ div-ში, რომლის id არის app)`, () => {
            const textareaTag = document.querySelector(`div#app > textarea#${specifiers.textareaId}`)
            expect(textareaTag).to.exist;
        })
        it(`<textarea id="new-post-text"></textarea>`)

        it(`textarea-ს ქვემოთ დაამატე ახალი დივ კონტეინერი, სადაც გამოჩნდება იუზერის მიერ დამატებული პოსტები. 
        კონტეინერის აიდი უნდა იყოს ${specifiers.postsContainerId}`,() => {
            const postsContainer = document.querySelector(`div#app > div#${specifiers.postsContainerId}`);
            expect(postsContainer).to.exist;
        })
        it(`<div id="${specifiers.postsContainerId}"></div>`)

        it(`მოდი textarea ელემენტის ქვევით დავამატოთ ღილაკი, რომელსაც მომავალში 
        გამოვიყენებთ ახალი პოსტების დასამატებლად. ღილაკში ჩაწერე ტექსტი Add Post`,() => {
            const button = document.querySelector("div#app > button");
            expect(button).to.exist;
            expect(button.innerText).to.equal('Add Post');
        })
        it(`<button>Add Post</button>`)
    })

    !CONFIG.server && CONFIG.isStep(steps.console) && describe('DOM ფუნქციონალი კონსოლში', () => {
        it('სანამ შემდეგ ეტაპზე გადახვალ,  კონსოლის საშუალებით პატარ-პატარა ოპერაციები ჩავატაროთ')
        it('თუ ხაზის დასაწყისში წერია console > , ეს ნიშნავს რომ >-ის მერე დაწერილი კოდი კონსოლში უნდა ჩაწერო')

        it(`ამ ეტაპზე, ჩვენ გვაქვს დამატებული textarea, რომლის id არის ${specifiers.textareaId}.
        ასევე button და ერთი ცალი div, რომლის id არის ${specifiers.postsContainerId}. იპოვე ეს ელემენტები DOM-ის საშუალებით. 
        პირველ ეტაპზე, იპოვე textarea თაგი. რადგან ამ თაგს აქვს თავისი უნიკალური id, შეგიძლია document.getElementById() ფუნქცია გამოიძახო`)
        it(`console > document.getElementById("${specifiers.textareaId}")`)
        it(`კონსოლში დაინახავ, რომ დაიბეჭდება textarea თაგი.`)
        it(``)
        it(`ახლა კი, თვითონ ბრაუზერში textarea შიგნით ჩაწერე რაიმე ტექსტი. მაგალითისთვის შეიძლება ჩაწერო Hello World!`)
        it(`ისევ გავიმეოროთ ამ თაგის მოძებნის პროცესი, უბრალოდ ახლა textAreaTag ცვლადში შევინახოთ`)
        it(`console > var textarea = document.getElementById("${specifiers.textareaId}")`)
        it(`ამ ცვლადის საშუალებით შეგვიძლია დავბეჭდოთ ის ტექსტი, რომელიც textarea-ს შიგნით წერია.`)
        it(`console > textarea.value`)

        it(`მოდი იგივენაირად იპოვე და შეინახე div ელემენტი, რომლის id არის ${specifiers.postsContainerId}`)
        it(`console > var postsContainer = document.getElementById("${specifiers.postsContainerId}")`)

        it(`კონსოლიდანვე შეგვიძლია ამ კონტეინერის შიგნით დავამატოთ ტექსტი`)
        it(`console > postsContainer.innerText = "my post's text" `)
        it(`თუ ჩამოთვლილი ნაბიჯები შეასრულე, გამოიძაზე consoleReady()`, () => this.fail())

        window.consoleReady = function() {
            if (typeof (window.textarea) === 'undefined') {
                console.error('ცვლადი სახელით textarea არ არსებობს')
                return
            }
            if (window.textarea.value.length < 1) {
                console.error('textarea-ში არაფერი წერია, გადაამოწმე რომ კონსოლში textarea.value შეგიძლია წაიკითხო')
                return
            }
            if (typeof (window.postsContainer) === 'undefined') {
                console.error('ცვლადი სახელით postsContainer არ არსებობს')
                return
            }
            if (window.postsContainer.innerText.length < 1) {
                console.error(specifiers.postsContainerId + "- ში არაფერი წერია")
                return
            }
            HW.nextStep()
        }

    })

    CONFIG.isStep(steps.simple_post) && describe('მარტივი პოსტი', () => {
        it(`დროებით ისევ ედიტორს დავუბრუნდეთ`)
        it(`ჯერ სკრიპტ თეგი ჩაამატე. index.js ფაილი უკვე შევქმენი. შენს სკრიპტ თეგს id უნდა ჰქონდეს my-script`, () => {
            let scriptElem = document.querySelector("body > script#my-script")
            let srcAttr = scriptElem.getAttribute("src");
            expect(srcAttr).to.equal("./index.js");
        })
        it(`<script id="my-script" src="./index.js"></script>`)

        it(`თითოეული პოსტი იქნება div ელემენტი, რომელშიც სხვა ელემენტები
        განთავსდება: პოსტის ტექსტი, ლაიქის ღილაკი, ლაიქების რაოდენობის ტექსტი და ა.შ. მოდი 
        აქედანვე დავინახოთ დეკომპოზიციის საჭიროება - გვგქონდეს ერთი ფუნქცია პოსტის კონტეინერის (div)-ის 
        შესაქმნელად და მასში მყოფ სხვადასხვა ელემენტებს ცალკე ფუნქციებში შევქმნით`)

        it(`მოკლე (და სრულყოფილი) აღწერა ასეთია: 
        ფუნქცია createPostTextDiv(postText) - დააბრუნებს div.${specifiers.postElementTextClass} ელემენტს, innerText-ით postText. ეს 
        ტექსტი საკმარისია მთლიანი ფუნქციის შესაქმნელად, დააკვირდი როგორ "ითარგმნება" კოდში (ასეთი კითხვები იქნება გამოცდაზე)`, () => {
            const postText = 'my post text'
            const post = window.createPostTextDiv(postText)
            expect(post.className).equal(specifiers.postElementTextClass)
            expect(post.innerText).equal(postText)
        })
        splitToLines(`
        function createPostTextDiv(postText) {
            let textDiv = document.createElement("div")
            textDiv.innerText = postText
            textDiv.className = 'post-text'
            return textDiv
        }`)


    })

    CONFIG.isStep(steps.add_post_console) && describe(`ფუნქციების დატესტვა`, () => {
        it(`ახლა პოსტის კონტეინერი (სადაც ტექსტის გარდა მომავალში ლაიქები და ა.შ იქნება) 
        შევქმნათ. კიდევ ერთხელ, ყურადღებით დააკვირდი შესაბამისობას ფუნქციის ტექსტურ
        აღწერასა და კოდს შორის`)
        it(`ფუნქცია createPostElement(postText) შექმნის ელემენტს div.${specifiers.postElementClass} და მასში
        დაამატებს createPostTextDiv(postText)-ს. ბოლოს დააბრუნებს ელემენტს`, () => {
            const postText = 'some random text'
            const postElem = window.createPostElement(postText)
            expect(postElem.className).equal(specifiers.postElementClass)
            expect(postElem.childNodes).length(1)
            expect(postElem.childNodes[0].innerText).equal(postText)
        })
        splitToLines(`
            function createPostElement(postText) {
                let postElement = document.createElement('div');
                postElement.className = 'post'
            
                let postTextDiv = createPostTextDiv(postText);
                postElement.appendChild(postTextDiv)
            
                return postElement
            }
        `)
        if (CONFIG.server) {
            return
        }

        it(``)
        it(`ფუნქციების მუშაობის შესამოწმებლად/აღსაქმელად, აუცილებელია
        კონსოლში დატესტო. შექმენი ახალი პოსტის ელემენტი
        `)
        it(`console > createPostElement('my post')`)
        it(`შეინახე ცვლადში`)
        it(`console > var myElement = createPostElement('my post')`)
        it(`console > document.getElementById('${specifiers.postsContainerId}').appendChild(myElement)`)
        it(`ამას რომ გააკეთებ, ისევ გამოიძახე consoleReady() ფუნქცია`, () => this.fail())
        window.consoleReady = function () {
            if (typeof(window.myElement) === 'undefined') {
                console.error(`myElement ცვლადს ვერ ვპოულობ`)
                return
            }
            if(document.getElementsByClassName(specifiers.postElementClass).length < 1) {
                console.error('პოსტის ელემენტს გვერდზე ვერ ვპოულობ, კონსოლის ხაზებს ყურადღებით მიყევი')
                return
            }
            HW.nextStep()
        }
    })

    CONFIG.isStep(steps.add_post) && describe(`პოსტის დამატება`, () => {
        it(`ახლა, კონსოლში გამოძახების მაგივრად, ღილაკს დავუკავშიროთ ფუნქციონალი. 
        შექმენი ფუნქცია, რომელშიც:`)
        splitToLines(`
        1. აიღებ textarea#${specifiers.textareaId} მნიშვნელობას
         2. შექმნი ახალ პოსტს
        3. დაამატებ პოსტს პოსტების კონტეინერში
        `)
        it(`ფუნქციას ერქმევა addPost, არგუმენტი/დაბრუნების მნიშვნელობა არ აქვს`, () => {
            const textarea = document.getElementById(specifiers.textareaId)
            textarea.innerText = 'some random post'

            window.addPost()

            const posts = document.getElementById(specifiers.postsContainerId)
            const post = posts.childNodes[0]
            let postTextElem = post.querySelector(`div.${specifiers.postElementTextClass}`)
            expect(postTextElem.innerText).equal('some random post')
            textarea.innerText = ''
            posts.innerHTML = ''
        })
        splitToLines(`
           function addPost() {
                let text = document.getElementById('new-post-text')
                let post = createPostElement(text.value)
                let postsContainer = document.getElementById('posts-container')
                postsContainer.appendChild(post)
            }
        `)
    })

    CONFIG.isStep(steps.finish) && describe('🥳', () => {
        toggle('help')
        showMessage('დავალების-ატვირთვა')
        it(`დავალების ატვირთვის წესი იგივეა, რაც წინაზე (შეგიძლია ქვემოთ ნახო). პირველი რამდენიმე სტუდენტი, ვინც მომწერს
        რა ნაბიჯი გამოვტოვე სრული ფუნქციონალისთვის, ბონუს ქულას მიიღებს`, () => {})
        const celebrationGif = document.createElement('img')
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

