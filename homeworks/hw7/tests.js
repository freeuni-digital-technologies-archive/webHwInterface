import { expect } from 'chai';
import { splitToLines } from "../../src/utils"
import { specifiers } from './specifiers'

import { showMessage } from '../../src/instructions'

const steps = {
    greetings: 1,
    elements: 2,
    console: 3,
    post_template: 4,
    add_post: 5,
    like_button: 6,
    like_function: 7,
    finish: 8
}

export function generateTests(CONFIG){
    CONFIG.hints = 'on'

    CONFIG.isStep(steps.greetings) && describe(`შესავალი`, () => {
		it(`ამ დავალებაში რამდენიმე კვირის წინ სემინარზე ნასწავლ მასალაში ვივარჯიშებთ`)
        setPassword(CONFIG)
        /**
         * TODO რამის მოფიქრება
         */
        window.getPassword = () => CONFIG.password
        it(`პაროლზე რამე ორიგინალურის მოფიქრება გვინდოდა მაგრამ ვერ მოვასწარით.
         გახსენი კონსოლი და გამოიძახე getPassword() ფუნქცია, შემდეგ კი index.html ფაილში იპოვე div, რომლის id არის write-password-inside და დივის შიგნით ჩაწერეთ ფუნქციის მიერ დაბრუნებული შედეგი`, () => {
			const n = Number(document.querySelector(`div#write-password-inside`).innerText)
        	expect(n).eql(CONFIG.password)
		})
        it(`console > getPassword()`)
        
	})
    

    CONFIG.isStep(steps.elements) && describe('პოსტის დამატება (HTML)', () => {
        it(`მოდი დავამატოთ ისეთი სექცია, სადაც იუზერი შეძლებს ტექსტის შეყვანას და შემდეგ დაპოსტვას`)
        it(`input ელემენტი უკვე ნასწავლი გვაქვს, მაგრამ მისი დამატების შემთხვევაში ვხედავთ 
        რომ საკმაოდ პატარა ველი არის მრავარპარაგრაფიანი მჭერმეტყველი პოსტებისთვის, რომელიც სოციალურ მედიას ახასიათებს.`)
        it(`იმისათვის, რომ პატარა ველი არ გვქონდეს, გამოვიყენოთ ერთ-ერთი თაგი textarea, 
        რომლის id იქნება ${specifiers.textareaId}`, () => {
            const textareaTag = document.querySelector(`div#app > textarea#${specifiers.textareaId}`)
            expect(textareaTag).to.not.to.be.null;
        })
        it(`<textarea id="new-post-text"></textarea>`)

        it(`textarea-ს ქვემოთ დაამატე ახალი დივ კონტეინერი, სადაც გამოჩნდება იუზერის მიერ დამატებული პოსტები. 
        კონტეინერის აიდი უნდა იყოს ${specifiers.postsContainerId}`,() => {
            const postsContainer = document.querySelector(`div#app > div#${specifiers.postsContainerId}`);
            expect(postsContainer).to.not.to.be.null;
        })
        it(`<div id="${specifiers.postsContainerId}"></div>`)

        it('მოდი textarea ელემენტის ქვევით დავამატოთ ღილაკი, რომელსაც მომავალში გამოვიყენებთ ახალი პოსტების დასამატებლად.')
        it('ამ ღილაკის შიგნით ჩავწეროთ Add Post')
        it('ღილაკის შემოწმება',() => {
            const button = document.querySelector("div#app > button");
            expect(button).not.to.be.null;
            expect(button.innerText).eql('Add Post');
        })
        it(`<button>Add Post</button>`)
    })

    CONFIG.isStep(steps.console) && describe('DOM ფუნქციონალი', () => {
        it('სანამ შემდეგ ეტაპზე გადახვალ, მოდი კონსოლის საშუალებით ჩავატაროთ პატარ-პატარა ოპერაციები')
        it('თუ ხაზის დასაწყისში წერია console > , ეს ნიშნავს რომ >-ის მერე დაწერილი კოდი კონსოლში უნდა ჩაწერო')

        it(`ამ ეტაპზე, ჩვენ გვაქვს დამატებული textarea, რომლის id არის ${specifiers.textareaId}.ასევე button და ერთი ცალი div, რომლის id არის ${specifiers.postsContainerId}`)
        it(`მოდი იპოვე ეს ელემენტები DOM-ის საშუალებით. პირველ ეტაპზე, იპოვე textarea თაგი. რადგან ამ თაგს აქვს თავისი უნიკალური id, შეგიძლია document.getElementById() ფუნქცია გამოიძახო`)
        it(`console > document.getElementById("${specifiers.textareaId}")`)
        it(`კონსოლში დაინახავ, რომ დაიბეჭდება textarea თაგი.`)

        it(`ახლა კი, თვითონ ბრაუზერში textarea შიგნით ჩაწერე რაიმე ტექსტი. მაგალითისთვის შეიძლება ჩაწერო Hello World!`)
        it(`ისევ გავიმეოროთ ამ თაგის მოძებნის პროცესი, უბრალოდ ახლა ცვლადში შევინახოთ`)
        it(`console > let textareaTag = document.getElementById("${specifiers.textareaId}")`)
        it(`ამ ცვლადის საშუალებით შეგვიძლია დავბეჭდოთ ის ტექსტი, რომელიც textarea-ს შიგნით წერია.`)
        it(`console > textareaTag.value`)

        it(`მოდი იგივენაირად იპოვე და შეინახე div ელემენტი, რომლის id არის ${specifiers.postsContainerId}`)
        it(`console > let postsContainer = document.getElementById("${specifiers.postsContainerId}")`)

        it(`კონსოლიდანვე შეგვიძლია ამ კონტეინერის შიგნით დავამატოთ ტექსტი, ან რაიმე ნებიმსიერი თაგი. ამ ეტაპზე, უბრალოდ რაიმე ტექსტი დავამატოთ. ამისთვის, შეგიძლია გამოიყენო innerText ან innerHTML.`)
        it(`რა განსხვავებაა innerText და innerHTML შორის? innerText დაამატებს გადაცემულ სიმბოლოებს როგორც ტექსტს, ხოლო innerHTML-ს დაამატებს, როგორც HTML კოდს.`)
        it(`თვალსაჩინოებისთვის, მოდი ასეთი რამე გააკეთე:`)
        it(`console > postsContainer.innerText = "some <div style='color: red;'> text </div>" `)
        it(`console > postsContainer.innerHTML = "some <div style='color: red;'> text </div>"`)
        
    })
    
    CONFIG.isStep(steps.post_template) && describe('პოსტის template', () => {

        it(`ჯერ სკრიპტ თეგი ჩაამატე. index.js ფაილი უკვე შევქმენი. თქვენს სკრიპტ თეგს id უნდა ჰქონდეს my-script`, () => {
			let scriptElem = document.querySelector("body > script#my-script")
            let srcAttr = scriptElem.getAttribute("src");

            expect(srcAttr).eql("./index.js");
		})
        it(`<script id="my-script" src="./index.js"></script>`)
        

        it(`გვინდა, რომ ყოველი ახალი პოსტის ელემენტს ქონდეს id, რომელშიც იქნება ნომერი, თუ მერამდენე პოსტია ის. ეს გაგვიმარტივებს პოსტების იდენტიფიცირებას, ვინაიდან შეიძლება არსებობდეს ორი პოსტი, რომელთაც იდენტური ტექსტი აქვთ.`)
        it(`პოსტი ჩვენთვის იქნება div ელემენტი, რომლის class იქნება ${specifiers.postElementClass}. ხოლო მისი id უნდა იწყებოდეს ${specifiers.postElementIdSuffix} და შემდეგ პოსტის იდენტიფიკატორი.`)
        it(`პოსტის ელემენტის შიგნით გვქონდეს კიდევ ერთი div, რომელშიც შევინახავთ პოსტის ტექსტს. ამ div-ის id უნდა იყოს ${specifiers.postElementTextId}`)
        it(`საბოლოო ჯამში, პოსტის ელემენტს ექნება ასეთი სახე:`)
        // it(`
        // <div class='${specifiers.postElementClass}' id='${specifiers.postElementIdSuffix}-1'>
        //     <div class='${specifiers.postElementTextId}'>
        //         <!-- აქ იქნება ტექსტი -->
        //     </div>
        // </div>
        // `)
        !CONFIG.server && it(`იმისათვის, რომ პოსტების აიდიები გვქონდეს, შევინახოთ ცვლადში. თავდაპირველი პოსტის id იქნება 1, შესაბამისად, საწყისი მნიშვნელობა გვაქვს. 
            ფაილის დასაწყისში შექმენით POSTS_ID_COUNTER.`, () => {
            expect(POSTS_ID_COUNTER).to.not.to.be.undefined;
            expect(POSTS_ID_COUNTER).eql(1)
        })
        it(`let POSTS_ID_COUNTER = 1;`)

        it(`დავამატოთ ფუნქცია, რომელიც გვიბრუნებს პოსტის template-ს. ეს template უკვე აღვწერეთ წინა ნაბიჯებში როგორი უნდა იყოს. დავარქვათ ამ ფუნქციას createPostTemplate, გადავცეთ არგუმენტად პოსტის ტექსტი და პოსტის აიდი.`, () => {
            testCreatePostTemplateBasisSection();
        })
        splitToLines("function createPostTemplate(postText,postId){\n" +
            `return 
                \`<div class='${specifiers.postElementClass}' id='${specifiers.postElementIdSuffix}\${postId}'>
                    <div class='${specifiers.postElementTextId}'>\${postText}</div>
                </div>\`
            \n` + 
        "}")
       
       })

    CONFIG.isStep(steps.add_post) && describe('პოსტის დამატება', () => {
        it(`ახლა კი შევქმნათ პოსტის დამატების ფუნქცია და სახელად დავარქვათ createNewPost, რომელსაც არგუმენტად გადაეცემა ახალი პოსტის ტექსტი და id. ჯერ, იპოვეთ პოსტების კონტეინერი და შეინახეთ ცვლადში. შემდეგ, გამოვიყენოთ ჩვენს მიერ დაწერილი createPostTemplate() ფუნქცია და მის მიერ დაბრუნებული template შევინახოთ ცვლადში. საბოლოოდ,  დავამატოთ ახალი პოსტი პოსტების კონტეინერის დასაწყისში.`, () => {
            createNewPost("post text 1", 1)
            let post = document.getElementById(`${specifiers.postElementIdSuffix}1`)
            expect(post).to.not.to.be.null;
            
            let firstPost = document.getElementById(specifiers.postsContainerId).firstElementChild;

            expect(firstPost).eql(post);

            firstPost.parentNode.removeChild(firstPost);
        })
        splitToLines(`function createNewPost(postText, id){
                let posts = document.querySelector("div#${specifiers.postsContainerId}");
                let post = createPostTemplate(postText,id);
                posts.insertAdjacentHTML('afterbegin',post);
            }`)

        it('დავაკავშიროთ შესაყვანი ველი და ფუნქციის დაპოსტვის ფუნქციონალი ერთმანეთს')

        it(`ამისთვის,ჯერ გავიხსენოთ Add Post ღილაკი. დაუმატე ამ ღილაკს id მნიშვნელობით ${specifiers.addPostButtonId}. ღილაკს მიაბით newPost() ფუნქცია. ეს შეგიძლია onclick ატრიბუტით გააკეთო, მაგალითად onclick='someFunction()'. არ დაიბნეთ, ამ ფუნქციონალს შემდეგ ეტაპზე დავამატებთ`,() => {
            const button = document.querySelector(`div#app > button#${specifiers.addPostButtonId}`);
            expect(button).to.not.to.be.null;
            
            expect(button.getAttribute("onclick")).eql("newPost()")
        })
        it(`<button id="${specifiers.addPostButtonId}" onclick="newPost()">Add Post</button>`)

        !CONFIG.server && it(`ახლა კი შეგვიძლია newPost() ფუნქცია დავამატოთ. ამ ფუქნციაში, ჯერ წავიკითხოთ რა ჩაწერა იუზერმა textarea-ში. 
        შემდეგ დავამატოთ ახალი პოსტი ამ ტექსტით. შესაბამისი ფუნქცია უკვე დაწერილი გვაქვს, შესაბამისად გამოიძახე 
        createNewPost() ფუნქცია. საბოლოოდ, გავზარდოთ POSTS_ID_COUNTER მნიშვნელობა ერთით`, () => {
            document.getElementById(specifiers.textareaId).value = 'post text 1';
            newPost();
            expect(POSTS_ID_COUNTER).eql(2)

            let firstPost = document.getElementById(specifiers.postsContainerId).firstElementChild;
            expect(firstPost).to.not.to.be.null;

            expect(firstPost.querySelector("div").innerText).eql("post text 1")

            firstPost.parentNode.removeChild(firstPost);
            document.getElementById(specifiers.textareaId).value = ''
        })
        splitToLines(`
            function newPost(){
                let text = document.getElementById("${specifiers.textareaId}").value;
                createNewPost(text,POSTS_ID_COUNTER)
                POSTS_ID_COUNTER++;
            }
        `)

        it(`თითქმის მოვრჩით ამ სექციას! textarea ელემენტს დაუმატე მინიშნება (placeholder) და ჩაუწერე შეკითხვა: "what's up? :)"`, () => {
            const textareaTag = document.querySelector(`div#app > textarea#${specifiers.textareaId}`)
            expect(textareaTag.getAttribute("placeholder")).eql("what's up? :)")
        })
        it(`<textarea id="${specifiers.textareaId}" placeholder="what\'s up? :)"></textarea>`)


    })
    /**
     * TODO
     * ამ ნაწილში გადმოვიდეს პოსტის id-ის გაზრდა
     * არსად არ ამოწმებ რომ addPost ფუნქციის გამოძახების მერე counter გაზრდილია...
     * 
     */
    // CONFIG.isStep(steps.post_id) && describe('პოსტებისთვის id-ის მინიჭება', () => {
    //     it('test')
    // })

    CONFIG.isStep(steps.like_button) && describe('ლაიქის დამატება', () => {
        CONFIG.hints = 'on'
        it('ღილაკის დამატება და ფუნქციის მიბმა')
        it(`დაპოსტვის ღილაკისგან განსხვავებით, ლაიქის ღილაკს index.html-ში ვერ დავამატებთ - ყველა პოსტს ცალკე სჭირდება. 
            ნათელია, რომ ეს ღილაკი createPostTemplate() ფუნქციაში უნდა ჩავსვათ. 
            ტრადიციულად პოსტის დალაიქება ტექსტის ქვემოთაა, ამიტომ ${specifiers.postElementTextId}-ის შემდეგ, '${specifiers.postElementClass}'-ში დავამატოთ span.
            ამ span-ში შევინახავთ რამდენი ლაიქი აქვს პოსტს.
            ასევე span-ის ქვეშ დავამატოთ button ღილაკი, რომელსაც მივაბავთ likePost ფუნქციას. 
            ღილაკს უნდა ჰქონდეს კლასი ${specifiers.postLikeButtonClass}.
            likePost ფუნქციას შემდეგ ეტაპზე დავაიმპლემენტირებთ. მანამდე კი, უბრალოდ მისი მოხაზულობა ჩამოვაყალიბოთ.`)
        it(`likePost ფუნქციას უნდა გადავცეთ იმ პოსტის აიდი, რომლის დალაიქებაც გვინდა. 
            createPostTemplate ფუნქციაში ავტომატურად გადმოგვეწოდება postId, შესაბამისად, ღილაკში, სადაც likePost ფუნქციას გამოვიძახებთ, ავტომატურად შეგვიძლია გადავცეთ postId`)
        it(`<span class="${specifiers.postLikesNumberClass}">0</span> likes`)
        it(`<button onclick="likePost(\${postId})" class="${specifiers.postLikeButtonClass}">like</button>`)
        it('სპანის და ღილაკის ტესტი', () => {
            testCreatePostTemplateLikeSection();
        })

        
        !CONFIG.server && it('ჯერჯერობით შექმენი ცარიელი likePost(postId) ფუნქცია და შიგნით უბრალოდ notify ფუნქციას გადაეცი რომელი პოსტი დალაიქდა. ტექსტი უნდა იყოს აი ასეთი: notify("Post with id of 1 has been liked!")', () => {
            likePost(199);
            let answer = 'Post with id of 199 has been liked!'
            expect(window.clientNotifiedText).eql(answer);

        })
        splitToLines(`
            function likePost(postId){
                notify(\`Post with id of \${postId} has been liked!\`);
            }
        `)

    })
    CONFIG.isStep(steps.like_function) && describe(`ლაიქის ფუნქცია`, () => {

        it(`ახლა დავფიქრდეთ, რა უნდა გააკეთოს likePost ფუნქციამ. 
            ჩვენ გვჭირდება ${specifiers.postLikesNumberClass}-ის innerText-ის შეცვლა, როცა პოსტს დავალაიქებთ. 
            ამიტომ მოდი ჯერ ვიპოვოთ ეს ელემენტი. 
            როდესაც პოსტის ელემენტს იპოვი, დაამატე ერთი check. ეს საჭიროა იმისთვის, რომ დავალიდურდეს პოსტის არსებობა და არარსებულ ინფორმაციას არ ვემუშავოთ.
            დალაიქების შემდეგ, პოსტის ლაიქების რაოდენობა გაიზრდება ერთით.
            ვინაიდან პოსტის ლაიქების ელემენტი უკვე ვიპოვეთ, წავიკითხოთ მასში ლაიქების რაოდენობა და მისი მნიშვნელობა გავზარდოთ ერთით.
            როდესაც ლაიქების რაოდენობას წავიკითხავთ, გადავიყვანოთ იგი რიცხვის ტიპში, რაშიც ჯავასკრიპტში ჩაშენებული Number() ფუნქცია დაგვეხმარება.
            მაგალითად, გვაქვს რაღაც ცვლადი testNumber="1". ამ ცვლადში კი ვინახავთ რიცხვს, მაგრამ ეს ცვლადი არის არა რიცხვი, არამედ რაღაც სიმბოლო.
            თუ ჩვენ გამოვიყენებთ Number(testNumber)-ს, მაშინ ეს ფუნქცია დაგვიბრუნებს ამ ცვლადში ჩაწერილი მნიშვნელობის რიცხვით მნიშვნელობას.
            testNumber = Number(testNumber) თუ ვიზამთ, მაშინ testNumber=1 ექვივალენტური ცვლადის აღწერა გამოგვივა.
            
            ამაში რომ დარწმუნდე, შედი კონსოლში და აღწერე testNumber="1". შემდეგ, უბრალოდ დაბეჭდე testNumber+1. შედეგი გექნება "11", რადგან სიმბოლოებთან ვმუშაობთ და უბრალოდ "მიაწება" მიმატების მაგივრად. ახლა კი Number(testNumber)+1 ცადე.
        `)
        it('საბოლოო ჯამში, likePost ფუნქციას ექნება შემდეგი სახე:')
        splitToLines(`
            function likePost(postId){
                notify(\`Post with id of \${postId} has been liked!\`);
                if(post == null){
                    return;
                }
                let post =  document.getElementById('post-' + postId); 
                let post_like_count = post.querySelector('span.post-likes-number');
                let currentLikes = Number(post_like_count.innerText)
                currentLikes++;
                post_like_count.innerText = currentLikes;
            }
        `)
        !CONFIG.server && it('likePost ფუნქციის შემოწმება',() => {
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

    CONFIG.isStep(steps.finish) && describe('🥳', () => {
        toggle('help')
        showMessage('დავალების-ატვირთვა')
        it(`დავალების ატვირთვის წესი იგივეა, რაც წინაზე (შეგიძლია ქვემოთ ნახო)`, () => {})
        const celebrationGif = document.createElement('img')
        celebrationGif.src = 'https://media0.giphy.com/media/f6hnhHkks8bk4jwjh3/giphy.gif'
        celebrationGif.height = 400
        document.getElementById('tests').insertBefore(celebrationGif, document.getElementById('help'))
    })
}

function parseHtmlFromString(htmlString){
    let domParser = new DOMParser();
    return domParser.parseFromString(htmlString,"text/html").body.firstElementChild;
}

function testCreatePostTemplateBasisSection(){
    let result = createPostTemplate("post text 1",1);
    expect(result).to.not.to.be.undefined;
    let postElem = parseHtmlFromString(result);
    expect(postElem).to.not.to.be.undefined;
    expect(postElem.getAttribute('class')).eql(specifiers.postElementClass);
    expect(postElem.getAttribute('id')).eql(`${specifiers.postElementIdSuffix}1`)
    
    let postTextElem = postElem.querySelector(`div.${specifiers.postElementTextId}`);
    expect(postTextElem).to.not.to.be.null;
    expect(postTextElem.innerText).eql("post text 1")
}

function testCreatePostTemplateLikeSection(){
    let result = createPostTemplate("post text 1",1);
    let postElem = parseHtmlFromString(result);
    testCreatePostTemplateBasisSection();

    let postLikesSpan = postElem.querySelector(`span.${specifiers.postLikesNumberClass}`)
    expect(postLikesSpan).to.not.to.be.null;
    expect(postLikesSpan.innerText).eql('0')

    let postLikeButton = postElem.querySelector(`button.${specifiers.postLikeButtonClass}`);
    expect(postLikeButton).to.not.to.be.null;

    expect(postLikeButton.getAttribute('onclick')).eql('likePost(1)')
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


/*


    CONFIG.isStep(steps.delete_post) && describe('პოსტის წაშლა', () => {
        CONFIG.hints = 'on'
        it('ბოლო ფუნქციონალი რაც დაგვრჩა, არის პოსტის წაშლა')
        it('ამისთვის, ისევ createPostTemplate ფუნქციის შეცვლა მოგვიწევს, ვინაიდან თითოეულ პოსტს უნდა ჰქონდეს თავისი წაშლის ღილაკი')
        // TODO: change delete-post hardcoded value
        it('დაამატე createPostTemplate ფუნქციაში ახალი button, რომლის class იქნება delete-post და onclick ექნება deletePost(${postId}). აქაც, deletePost უნდა გადაეცემოდეს იმ პოსტის აიდი, რომლის წაშლაც გვინდა და უბრალოდ მოხაზულობა აღვწეროთ დაიმპლემენტირებამდე.')
        it('ღილაკის შემოწმება',() => {
            testCreatePostTemplateDeletePostSection();
        })
        
        it('საბოლოოდ, დაგვრჩა deletePost ფუნქციის იმპლემენტაცია.')
        it('ჯერ, იპოვე პოსტის ელემენტი და შეინახე ცვლადში')
        it('შემდეგ, ცვლადში შეინახე პოსტის მშობელი ელემენტი. მაგალითად, თუ პოსტი შენახულია ცვლადში post, მაშინ მისი მშობელი იქნება post.parentNode')
        it(`რას ნიშნავს მშობელი ელემენტი? მოდი მაგალითზე დაყრდნობით გავიგოთ.
            სიტყვაზე, გვაქვს ასეთი html: <div id="parent"> <div id="child"> </div> </div>
            ამ შემთხვევაში, იმ დივის მშობელი, რომლის id არის child, არის ის div, რომლის id არის parent.
            ამიტომ, ჩვენ როდესაც მოვძებნით პოსტის ელემენტს, გვეცოდინება, რომ პოსტის მშობელი ელემენტი არის ის div, რომლის id არის ${specifiers.postsContainerId}.
            ჩვენ კი, ამ კონტეინერიდან გვინდა პოსტის ამოშლა.
        `)
        it('ახლა კი, მშობელი ელემენტიდან უნდა წავშალოთ პოსტი. ამისათვის, მშობლის ელემენტით გამოიძახე removeChild ფუნქცია')
        it('removeChild ფუნქცია უზრუნველყოფს იმას, რომ მშობელი ელემენტიდან ამოიშალოს შვილი ელემენტი. ამ ფუნქციას იმ შვილი ელემენტის DOM-ს მივაწვდით, რომლის წაშლაც გვინდა.')
        it('parent.removeChild(post)')

        it('deletePost ფუნქციის შემოწმება',() => {
            setTextareaText('post text 1')
            newPost()

            let post = document.getElementById('post-1')
            post.querySelector(`button.${specifiers.postDeleteButtonClass}`).click()
            
            post = document.getElementById('post-1')
            expect(post).to.be.null;

            setTextareaText("")
        })
    })


function testCreatePostTemplateDeletePostSection(){
    let result = createPostTemplate("post text 1",1);
    let postElem = parseHtmlFromString(result);
    testCreatePostTemplateLikeSection();

    let postDeleteButton = postElem.querySelector(`button.${specifiers.postDeleteButtonClass}`);
    expect(postDeleteButton).to.not.to.be.null;
    expect(postDeleteButton.getAttribute('class')).eql(specifiers.postDeleteButtonClass);
    expect(postDeleteButton.getAttribute('onclick')).eql('deletePost(1)')
}

    */
