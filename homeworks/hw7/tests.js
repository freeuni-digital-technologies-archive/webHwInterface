import { expect } from 'chai';
import { splitToLines } from "../../src/utils"
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
        CONFIG.hints = 'on'
        it('ის ცვლილებები, რომელიც index.html ფაილში უნდა შეიტანოთ, შეიტანეთ div#app კონტეინერის შიგნით, გარდა სკრიპტის დამატებისა. სკრიპტის დამატებისთვის გადადით index.html ფაილში და იპოვეთ შესაბამისი კომენტარი')

        it(`ჯერ სკრიპტ თეგი ჩაამატე. index.js ფაილი უკვე შევქმენი. თქვენს სკრიპტ თეგს id უნდა ჰქონდეს my-script`, () => {
			let scriptElem = document.querySelector("body > script#my-script")
            let srcAttr = scriptElem.getAttribute("src");

            // TODO: change
            expect(srcAttr.includes("index")).to.be.true
		})
        
        it(`მოდი დავამატოთ ისეთი სექცია, სადაც იუზერი შეძლებს ტექსტის შეყვანას და შემდეგ დაპოსტვას`)
        it(`input ელემენტი უკვე ნასწავლი გვაქვს, მაგრამ მისი დამატების შემთხვევაში ვხედავთ რომ საკმაოდ პატარა ველი არის მრავარპარაგრაფიანი მჭერმეტყველი პოსტებისთვის, რომელიც სოციალურ მედიას ახასიათებს.`)
        it(`იმისათვის, რომ პატარა ველი არ გვქონდეს, გამოვიყენოთ ერთ-ერთი თაგი textarea, რომლის id იქნება ${specifiers.textareaId}`, () => {
            const textareaTag = document.querySelector(`div#app > textarea#${specifiers.textareaId}`)
            expect(textareaTag).to.not.to.be.null;
        })

        it(`ახლა კი დავამატოთ ახალი კონტეინერი, სადაც გამოჩნდება იუზერის მიერ დამატებული პოსტები. კონტეინერის აიდი უნდა იყოს ${specifiers.postsContainerId}`,() => {
            const postsContainer = document.querySelector(`div#app > div#${specifiers.postsContainerId}`);
            expect(postsContainer).to.not.to.be.null;
        })

        it(`დაპოსტვის ფუნქციონალი`)
        it(`გვინდა, რომ ყოველი ახალი პოსტის ელემენტს ქონდეს id, რომელშიც იქნება ნომერი, თუ მერამდენე პოსტია ის. ეს გაგვიმარტივებს პოსტების იდენტიფიცირებას, ვინაიდან შეიძლება არსებობდეს ორი პოსტი, რომელთაც იდენტური ტექსტი აქვთ.`)
        it(`პოსტი ჩვენთვის იქნება div ელემენტი, რომლის class იქნება ${specifiers.postElementClass}. ხოლო მისი id უნდა იწყებოდეს ${specifiers.postElementIdSuffix} და შემდეგ პოსტის იდენტიფიკატორი.`)
        it(`პოსტის ელემენტის შიგნით გვქონდეს კიდევ ერთი div, რომელშიც შევინახავთ პოსტის ტექსტს. ამ div-ის id უნდა იყოს ${specifiers.postElementTextId}`)
        it(`საბოლოო ჯამში, პოსტის ელემენტს ექნება ასეთი სახე:`)
        it(`
        <div class='${specifiers.postElementClass}' id='${specifiers.postElementIdSuffix}-1'>
            <div class='${specifiers.postElementTextId}'>
                <!-- აქ იქნება ტექსტი -->
            </div>
        </div>
        `)
        it(`იმისათვის, რომ პოსტების აიდიები გვქონდეს, შევინახოთ ცვლადში. თავდაპირველი პოსტის id იქნება 1, შესაბამისად, საწყისი მნიშვნელობა გვაქვს. შექმენით POSTS_ID_COUNTER.`, () => {
            expect(POSTS_ID_COUNTER).to.not.to.be.undefined;
            expect(POSTS_ID_COUNTER).eql(1)
        })

        it(`დავამატოთ ფუნქცია, რომელიც გვიბრუნებს პოსტის template-ს. ეს template უკვე აღვწერეთ წინა ნაბიჯებში როგორი უნდა იყოს. დავარქვათ ამ ფუნცქციას createPostTemplate, გადავცეთ არგუმენტად პოსტის ტექსტი და პოსტის აიდი.`, () => {
            let result = createPostTemplate("post text 1",1);

            let domParser = new DOMParser();
            let postElem = domParser.parseFromString(result,"text/html").body.firstElementChild;
            expect(postElem).to.not.to.be.undefined;
            expect(postElem.getAttribute('class')).eql(specifiers.postElementClass);
            expect(postElem.getAttribute('id')).eql(`${specifiers.postElementIdSuffix}1`)
            
            let postTextElem = postElem.querySelector(`div.${specifiers.postElementTextId}`);
            expect(postTextElem).to.not.to.be.null;
            expect(postTextElem.innerText).eql("post text 1")
            
        })
       
        it(`ახლა კი შევქმნათ პოსტის დამატების ფუნქცია და სახელად დავარქვათ createNewPost, რომელსაც არგუმენტად გადაეცემა ახალი პოსტის ტექსტი და id. ჯერ, იპოვეთ პოსტების კონტეინერი და შეინახეთ ცვლადში. შემდეგ, გამოვიყენოთ ჩვენს მიერ დაწერილი createPostTemplate() ფუნქცია და მის მიერ დაბრუნებული template შევინახოთ ცვლადში. საბოლოოდ,  დავამატოთ ახალი პოსტი პოსტების კონტეინერის დასაწყისში.`, () => {
            createNewPost("post text 1", 1)
            let post = document.getElementById(`${specifiers.postElementIdSuffix}1`)
            expect(post).to.not.to.be.null;
            
            let firstPost = document.getElementById(specifiers.postsContainerId).firstElementChild;

            expect(firstPost).eql(post);

            firstPost.parentNode.removeChild(firstPost);
        })

        it('დავაკავშიროთ შესაყვანი ველი და ფუნქციის დაპოსტვის ფუნქციონალი ერთმანეთს')

        it('ამისთვის, ჯერ დაამატეთ ღილაკი, რომლის id იქნება add-post. ღილაკს მიაბით newPost() ფუნქცია. არ დაიბნეთ, ამ ფუნქციონალს შემდეგ ეტაპზე დავამატებთ',() => {
            const button = document.querySelector(`button#${specifiers.addPostButtonId}`);
            expect(button).to.not.to.be.null;
            
            expect(button.getAttribute("onclick")).eql("newPost()")
        })
        it("ახლა კი შეგვიძლია newPost() ფუნქცია დავამატოთ. ამ ფუქნციაში, ჯერ წავიკითხოთ რა ჩაწერა იუზერმა textarea-ში. შემდეგ დავამატოთ ახალი პოსტი ამ ტექსტით. შესაბამისი ფუნქცია უკვე დაწერილი გვაქვს, შესაბამისად გამოიძახე createNewPost() ფუნქცია. საბოლოოდ, გავზარდოთ POSTS_ID_COUNTER მნიშვნელობა ერთით", () => {
            setTextareaText('post text 1');
            newPost();
            expect(POSTS_ID_COUNTER).eql(2)

            let firstPost = document.getElementById(specifiers.postsContainerId).firstElementChild;
            expect(firstPost).to.not.to.be.null;

            expect(firstPost.querySelector(`div.${specifiers.postElementTextId}`).innerText).eql("post text 1")

            firstPost.parentNode.removeChild(firstPost);
            setTextareaText('');
        })

        it(`თითქმის მოვრჩით ამ სექციას! textarea ელემენტს დაუმატე მინიშნება (placeholder) და ჩაუწერე შეკითხვა: "what's up? :)"`, () => {
            const textareaTag = document.querySelector(`div#app > textarea#${specifiers.textareaId}`)
            expect(textareaTag.getAttribute("placeholder")).eql("what's up? :)")
        })


    })

    CONFIG.isStep(steps.add_like) && describe('ლაიქის დამატება', () => {
        CONFIG.hints = 'on'
        it('ღილაკის დამატება და ფუნქციის მიბმა')
        it(`დაპოსტვის ღილაკისგან განსხვავებით, ლაიქის ღილაკს index.html-ში ვერ დავამატებთ - ყველა პოსტს ცალკე სჭირდება. ნათელია, რომ ეს ღილაკი createPostTemplate() ფუნქციაში უნდა ჩავსვათ. ტრადიციულად პოსტის რეაქციები ტექსტის ქვემოთაა, ამიტომ ${specifiers.postElementTextId}-ის შემდეგ, '${specifiers.postElementClass}'-ში დავამატოთ span-ში რამდენი ლაიქი აქვს პოსტს, და ღილაკი რომელსაც მივაბავთ likePost ფუნქციას`)
        it('likePost ფუნქციას უნდა გადავცეთ იმ პოსტის აიდი, რომლის დალაიქებაც გვინდა. createPostTemplate ფუნქციაში ავტომატურად გადმოგვეწოდება postId, შესაბამისად, ღილაკში, სადაც likePost ფუნქციას გამოვიძახებთ, ავტომატურად შეგვიძლია გადავცეთ postId')
        it(`<span class="${specifiers.postLikesNumberClass}">0</span> likes`)
        // TODO: post-like-button hardcoded value should be changed
        it('<button onclick="likePost(${postId})" class="post-like-button">like</button>')
        it('სპანის და ღილაკის ტესტი', () => {
            let result = createPostTemplate("post text 1",1);

            let domParser = new DOMParser();
            let postElem = domParser.parseFromString(result,"text/html").body.firstElementChild;
            expect(postElem).to.not.to.be.undefined;
            expect(postElem.getAttribute('class')).eql(specifiers.postElementClass);
            expect(postElem.getAttribute('id')).eql(`${specifiers.postElementIdSuffix}1`)
            
            let postTextElem = postElem.querySelector(`div.${specifiers.postElementTextId}`);
            expect(postTextElem).to.not.to.be.null;
            expect(postTextElem.innerText).eql("post text 1")

            let postLikesSpan = postElem.querySelector(`span.${specifiers.postLikesNumberClass}`)
            expect(postLikesSpan).to.not.to.be.null;
            expect(postLikesSpan.innerText).eql('0')

            let postLikeButton = postElem.querySelector(`button.${specifiers.postLikeButtonClass}`);
            expect(postLikeButton).to.not.to.be.null;

            expect(postLikeButton.getAttribute('onclick')).eql('likePost(1)')
        })

        it(`ახლა დავფიქრდეთ, რა უნდა გააკეთოს likePost ფუნქციამ. 
            ჩვენ გვჭირდება ${specifiers.postLikesNumberClass}-ის innerText-ის შეცვლა. 
            ამიტომ მოდი ჯერ ვიპოვოთ ეს ელემენტი. 
            დალაიქების შემდეგ, პოსტის ლაიქების რაოდენობა გაიზრდება ერთით.
            ვინაიდან პოსტის ლაიქების ელემენტი უკვე ვიპოვეთ, წავიკითხოთ მასში ლაიქების რაოდენობა და მისი მნიშვნელობა გავზარდოთ ერთით.`)
        it('საბოლოო ჯამში, likePost ფუნქციას ექნება შემდეგი სახე:')
        splitToLines(`
            function likePost(postId){
                let post =  document.getElementById('post-' + postId); 
                let post_like_count = post.querySelector('span.post-likes-number');
                let currentLikes = Number(post_like_count.innerText)
                currentLikes++;
                post_like_count.innerText = currentLikes;
            }
        `)
        it('likePost ფუნქციის შემოწმება',() => {
              setTextareaText('post text 1');
              newPost()
              let post = document.getElementById('post-1')
              post.querySelector(`button.${specifiers.postLikeButtonClass}`).click()
              
              let postLikesCount = post.querySelector(`span.${specifiers.postLikesNumberClass}`).innerText;
              expect(postLikesCount).eql('1')

              post.parentNode.removeChild(post);
              setTextareaText('');
              
        })
    })

    CONFIG.isStep(steps.delete_post) && describe('პოსტის წაშლა', () => {
        // TODO:
        
    })
}

function setTextareaText(text){
    document.getElementById(specifiers.textareaId).value = text
}

function setPassword(CONFIG) {
	let password = Math.floor(Math.random() * (999999 - 100000) + 100000)
	if (!CONFIG.password) {
        CONFIG.password = password;
        CONFIG.save();
    }
}
