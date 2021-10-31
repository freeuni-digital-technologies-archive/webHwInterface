const { expect, assert } = chai

// აქ ჩამოვწერთ რომელი მერამდენე იყოს რომ შემთხვევით
// რიცხვების შეცვლა არ დაგვავიწყდეს

const steps = {
    // TODO add instructions
    // ინსტრუქციებში უნდა ეწეროს რომ მხოლოდ
    // chrome და firefox -ით შეიძლება
    setup_and_password: 1,
    /**
     * სტილი შეუცვალოს პაროლს და დამალოს
     * head title საიტის სახელი
     * browser tab icon
     * h1 სტუდენტის სახელის საიტი (ტესტში შეამოწმე რომ მთავრდება 'ს საიტი')
     * h1 id იყოს მათი emailid (ეს შემოწმდება სერვერზე)
     * div სათაურისთვის (გრძელი bar რამე ფერით, h1 იყოს მარჯვნივ)
     */
    header: 2,
    /**
     * აქვს სურათი მთლიან ბექგრაუნდზე (ლეპტოპის ეკრანის სიგანე და შესაბამისი სიმაღლე რაც გამოვა)
     * სურათი უნდა გადმოწერონ (src შევამოწმებთ რომ http-ით არ იწყება)
     * პარაგრაფი არის მარჯვნივ (მაგრამ ბოლომდე მიწეული არა) 
     * აქვს ფერადი ფონი (რომ სურათს გამოეყოს) და padding
     * h2 გვერდის სახელი id page1
     */
    page_1: 3,
    /**
     * აქვს რამდენიმე სურათი (width: 20%) გვერდიგვერდ 
     * ჩასვან ლინკით (ამის ინსტრუქცია გამოჩნდეს)
     * რომლებიც თავიდან ცოტა გამჭვირვალედ არის
     * mouse hover-ზე მკვეთრდება და ოდნავ იზრდება
     */
    page_2: 4,
    /**
     * internal hrefs to page 1 and page2, aligned right. with padding
     * ყველა ჩასქროლვაზე ჩანს
     */
    menu: 5,
    /**
     * ონი არის ნახევრად გამჭვირვალე. 
     * ეწერება სტუდენტის სახელი და გვარი, 
     * c თბილისის თავისუფალი უნივერსიტეტი, 2021. 
     */
    footer: 6
}

CONFIG.isStep(steps.setup_and_password) && describe("", () => {
    /**
     * აქ უნდა გამოჩნდეს (დინამიურად დაემატოს ინსტრუქციები:
     *     - code ედიტორის ინსტრუქცია
     *     - inspect element -ის ინსტრუქცია
     *     - პირველ ჩატვირთვაზე გენერირდეს პაროლი და შეინახოს CONFIG - ში. 
     *      ანუ ყველას თავისი ექნება, ერთმანეთს რომ არ გაუზიარონ.
     *     - დაემატოს div, რომლის id არის find password here. ამ დივში დაემატოს 100-მდე პარაგრაფი
     *    (კლასი fake-password)  ყველაში იქნება რენდომ რიცხვი. 
     * რომელიღაცაში (0-100ში რენდომ შერჩეული PASSWORD P INDEX)
     * იქნება "ნამდვილი" პაროლი (ელემენტს ექნება კლასი real-password), 
     * ინსტრუქციაში უნდა დაეწეროს, რომ იპოვონ
     * 
     */
    setupGuessingPassword()
    it(`კოდის ედიტორის საშუალებით გახსენი html ფაილი, მოძებნე ხაზი, სადაც წერია div#write-password-here და ჩაწერე იქ პაროლი`, () => {
        const n = Number(document.querySelector('div#write-password-here').innerText)
        expect(n).eql(CONFIG.password)
    })

})

// todo rewrite description
CONFIG.isStep(steps.header) && describe(`header`, () => {


    /**
     * ყველა მათგანი მოწმდება ცალკე ტესტით
     * სათაური
     * მენიუსავით რამე div ზემოთ
     */

    it(`head ელემენტში შექმენით title და ჩაწერეთ თქვენი საიტის სახელი.`, () => {
        let title = document.querySelector("head > title");
        expect(title != null || title != undefined).to.be.true;

        let text = title.innerText;
        expect(text.length > 0).to.be.true;

    })
    it("<title> საიტის სახელი</title>")

    // TODO: Can't check if file really exists or not.
    it(`head ელემენტში შექმენით link, რომლის საშუალებითაც შეცვლით browser tab icon-ს`, () => {
        let link = document.querySelector("head > link[rel='icon']")
         
        expect(link != null || link != undefined).to.be.true;

        expect(link.href != null).to.be.true;
        
        let currentPath = window.location.href;

        expect(link.href.length != 0).to.be.true
        expect(link.href != currentPath).to.be.true;

    })
    it("<link rel='icon' href='...' />")
    it("სამი წერტილის მაგივრად ჩასვით icon-ის path")

    it('head ელემენტში შექმენით style ელემენტი',() => {
        const style = document.querySelector("head > style");
        expect(style != null || style != undefined).to.be.true;

    })
    it("<style></style>")

    it("div#app ელემენტში შექმენით div ელემენტი, რომლის id იქნება website-title-container",() => {
        const elem = document.querySelector("div#app > div#website-title-container");
        expect(elem != null || elem != undefined).to.be.true;
    })
    it("<div id='website-title-container'></div>")

    it(`უკვე შექმნილ div ელემენტში შექმენით h1 ელემენტი, რომლის id იქნება website-title. 
        ჩაწერეთ სათაური, რომელიც იქნება შემდეგი ფორმატის, მაგალითად: გიგის საიტი`,() => {
        const h1 = document.querySelector("div#app > div#website-title-container > h1#website-title");

        expect(h1 != null || h1 != undefined).to.be.true;
        
        const h1_id = h1.getAttribute("id");
        expect(h1_id != null || h1_id != undefined).to.be.true;


        const text = h1.innerText;
        console.log(text);
        expect(strEndsWith(text,'ს საიტი')).to.be.true;
    })
    it("<h1 id='website-title'>ვინმეს საიტი</h1>")

    it(`შექმნილ h1 ელემენტს უნდა ჰქონდეს 2px სისქის border, რომელიც იქნება წყვეტილი(იგულისხმება dotted) და ლურჯი ფერის(blue). 
        ტექსტის ლოკაცია უნდა იყოს შუაში. 
        padding უნდა იყოს 10 პიქსელი.
        გასტილეთ style თაგში #website-title`,() => {
        const h1 = document.querySelector("div#app > div#website-title-container > h1#website-title");
        
        const h1style = window.getComputedStyle(h1);

        const paddingPixels = h1style.getPropertyValue("padding");
        expect(paddingPixels == "10px").to.be.true;

        const textAlign = h1style.getPropertyValue("text-align");
        expect(textAlign == "center").to.be.true;

        const border = h1style.getPropertyValue("border");
        expect(border == "2px dotted rgb(0, 0, 255)").to.be.true;
    })
    it(`#website-title{
        text-align: center,
        ...
        ...
        ...
    }`)

    it("დამალეთ პაროლი. ამისათვის საკმარისია, რომ მისი სტილი გახადოთ display: none",() => {
        const passwordDiv = document.getElementById("write-password-here");

        const passwordDivStyle = window.getComputedStyle(passwordDiv);

        expect(passwordDiv.style.display == "none" || passwordDivStyle.getPropertyValue("display") == "none").to.be.true;
    })
    it("შეგიძლიათ html ელემენტს მიუმატოთ style ან თვითონ #write-password-here გასტილოთ")


})

CONFIG.isStep(steps.page_1) && describe("Page 1",() => {

    it("შექმენით div ელემენტი div#app შიგნით, რომლის id იქნება page1",() => {
        const div = document.querySelector("div#app > div#page1");
        expect(div != null || div != undefined).to.be.true;

    })
    it("<div id='page1'></div>")


    it("შექმნილ div#page1 ელემენტში შექმენით h1 ელემენტი,რომლის id იქნება page1-title,ეწერება Page 1 და იქნება პოზიციით შუაში",() => {
        const h1 = document.querySelector("div#app > div#page1 > h1#page1-title");
        expect(h1 != null || h1 != undefined).to.be.true;

        expect(h1.innerText == "Page 1").to.be.true;

        expect(h1.style.textAling == "center" || window.getComputedStyle(h1).getPropertyValue("text-align") == "center").to.be.true;
    })
    it("<h1 id='page1-title'></h1> \n თქვენი გადასაწყვეთია ამავე ელემენტში დაამატებთ style-ს თუ თვითონ id-ს გასტილავთ")

    it("შექმნილ div#page1 ელემენტში შექმენით ახალი div, რომლის id იქნება page1-content", () => {
        const div = document.querySelector("div#app > div#page1 > div#page1-content");
        expect(div != null || div != undefined).to.be.true;
    })
    it("<div id='page1-content'></div>")


    it("შექმნილი div#page1-content ელემენტი გასტილეთ ისე, რომ სურათი მოექცეს შუაში",() => {
        const div = document.querySelector("div#app > div#page1 > div#page1-content");

        const divStyle = window.getComputedStyle(div);

        expect(div.style.display == "flex" || divStyle.getPropertyValue("display") == "flex").to.be.true;
        expect(div.style.justifyContent == "center" || divStyle.getPropertyValue("justify-content") == "center").to.be.true;
    })
    it("#page1-content{\n display:flex; \n justify-content:center \n }")

    it("შექმნილ div#page1-content ელემენტში შექმენით img ელემენტი, სადაც გამოიყენებთ ნებისმიერ სურათს.სურათი უნდა იყოს დამატებული თქვენივე ლეპტოპიდან",() => {
        const img = document.querySelector("div#app > div#page1 > div#page1-content >img");
        expect(img != null || img != undefined).to.be.true;

        const src = img.getAttribute("src");
        expect(src != null || src != undefined);

        expect(strStartsWith(src,"http")).to.be.false;
    })
    it("<img src='./my-image.jpg' />")
    it("გადმოწერეთ სურათი ან გამოიყენეთ უკვე არსებული სურათი, ჩააგდეთ პროექტის ფოლდერში და სახელი მიუთითეთ src-ში")


    it(`img ელემენტს უნდა ჰქონდეს 15px padding.
        უკანა ფონი უნდა იყოს ნებისმიერი ფერის გარდა თეთრისა და შავისა (white,black).
        სურათის სიგრძე იყოს 60%`, () => {
        const img = document.querySelector("div#app > div#page1 > div#page1-content > img");
        
        const bgColor = img.style.backgroundColor;

        expect(["white","black"].indexOf(bgColor) === -1).to.be.true;

        const padding = img.style.padding;
        expect(padding == "15px").to.be.true;

        const width = img.style.width;
        expect(width == "60%").to.be.true;
    })

})

CONFIG.isStep(steps.page_2) && describe("Page 2",() => {
    it("შექმენით div ელემენტი div#app შიგნით, რომლის id იქნება page2",() => {
        const div = document.querySelector("div#app > div#page2");
        expect(div != null || div != undefined).to.be.true;

    })
    it("<div id='page2'></div>")


    it("შექმნილ div#page2 ელემენტში შექმენით h1 ელემენტი,რომლის id იქნება page2-title,ეწერება Page 2 და იქნება პოზიციით შუაში",() => {
        const h1 = document.querySelector("div#app > div#page2 > h1#page2-title");
        expect(h1 != null || h1 != undefined).to.be.true;

        expect(h1.innerText == "Page 2").to.be.true;

        expect(h1.style.textAling == "center" || window.getComputedStyle(h1).getPropertyValue("text-align") == "center").to.be.true;
    })
    it("<h1 id='page2-title'></h1> \n თქვენი გადასაწყვეთია ამავე ელემენტში დაამატებთ style-ს თუ თვითონ id-ს გასტილავთ")

    it("შექმნილ div#page2 ელემენტში შექმენით ახალი div, რომლის id იქნება page2-content", () => {
        const div = document.querySelector("div#app > div#page2 > div#page2-content");
        expect(div != null || div != undefined).to.be.true;
    })
    it("<div id='page2-content'></div>")

    /**
     * აქვს რამდენიმე სურათი (width: 20%) გვერდიგვერდ 
     * ჩასვან ლინკით (ამის ინსტრუქცია გამოჩნდეს)
     * რომლებიც თავიდან ცოტა გამჭვირვალედ არის
     * mouse hover-ზე მკვეთრდება და ოდნავ იზრდება
     */
    it("ჩასვით div#page2-content მინიმუმ სამი განსხვავებული სურათი, რომლებსაც კლასი ექნებათ page2-image",() => {
        const container = document.querySelector("div#app > div#page2 > div#page2-content");

        const images = container.querySelectorAll("img.page2-image");

        expect(images.length >= 3).to.be.true;

        let imageSrcs = new Set();
        for(image of images){
            const src = image.getAttribute("src");
            expect(src.length > 0).to.be.true;
            expect(strStartsWith(src,"http")).to.be.false;
            imageSrcs.add(src);
        }

        expect(imageSrcs.size == images.length).to.be.true;
    })
    it("თითოეულ სურათს უნდა ჰქონდეს სიგრძეც და სიგანეც 350px, ხოლო opacity: 20%",() => {
        const container = document.querySelector("div#app > div#page2 > div#page2-content");
        const image = container.querySelector("img.page2-image");

        const imageStyle = window.getComputedStyle(image);
        expect(imageStyle.getPropertyValue("width") == "350px").to.be.true;
        expect(imageStyle.getPropertyValue("height") == "350px").to.be.true;
        expect(imageStyle.getPropertyValue("opacity") == "0.2").to.be.true;
    })

    //TODO: check if opacity is 1 on :hover

    // it("თუ სურათზე მაუსის კურსორს გადავატარებთ, opacity უნდა გახდეს 100%, ანუ მთლიანად უნდა გამოჩნდეს.",() => {
    //     const container = document.querySelector("div#app > div#page2 > div#page2-content");
    //     const image = container.querySelector("img.page2-image");

    //     const imageStyle = window.getComputedStyle(image);
    //     console.log(imageStyle)
    //     expect(imageStyle.getPropertyValue("opacity") == "1").to.be.true;
    // })

    it("სურათები გაბნეული უნდა იყვნენ სივრცეში",() => {
        const container = document.querySelector("div#app > div#page2 > div#page2-content");

        const containerStyle = window.getComputedStyle(container);
        expect(containerStyle.getPropertyValue("display") == "flex" && containerStyle.getPropertyValue("justify-content") == "space-around").to.be.true;
    })
    it("ამისთვის დაგჭირდებათ, რომ page2-content display იყოს flex და justify-content იყოს space-around")

})

CONFIG.isStep(steps.menu) && describe("Menu",() => {
    it("შექმენით div#app ელემენტში div ელემენტი, რომელსაც id ექნება menu",() => {
        const div = document.querySelector("div#app > div#menu");
        expect(div != null || div != undefined).to.be.true;
    })


    it("შექმნილ დივში უნდა გვქონდეს ორი ლინკი, რომელიც ასქროლავს page1 და page2-ზე. ლინკებს უნდა ჰქონდეთ კლასი page-navigator",() => {
        const div = document.querySelector("div#app > div#menu");
        
        const children = div.querySelectorAll("a.page-navigator");
        expect(children.length == 2).to.be.true;

        expect(children[0].getAttribute("href") == "#page1").to.be.true;
        expect(children[1].getAttribute("href") == "#page2").to.be.true;

    })
    it("თუ a ელემენტის href ატრიბუტში მიუთითებთ მაგალითისთვის href='#app', დაჭერის შემდეგ გვერდი აისქროლება მითითებული id-ს მქონდე ელემენტთან")

    it("შექმნილი div#menu უნდა იყოს ფიქსირებული და სქროლვისას უნდა ჩანდეს ზედა მარჯვენა მხარეს. ამ ელემენტს უნდა ჰქონდეს 2px სისქის solid gold border",() => {
        const div = document.querySelector("div#app > div#menu");
        
        const divStyle = window.getComputedStyle(div);
        expect(divStyle.getPropertyValue("position") == "fixed").to.be.true;
        expect(divStyle.getPropertyValue("top") == "0px").to.be.true;
        expect(divStyle.getPropertyValue("right") == "0px").to.be.true;
        expect(divStyle.getPropertyValue("border") == "2px solid rgb(255, 215, 0)").to.be.true;

    })
    it("იმისათვის, რომ ელემენტი ფიქსირებული იყოს, დაგჭირდებათ position:fixed")
    it("პოზიციის მისათითებლად, შეგიძლიათ გამოიყენოთ top right bottom left. მაგალითად, bottom:200px ნიშნავს, რომ ქვევიდან 200 პიქსელში იყოს ელემენტი მოთავსებული");

})

CONFIG.isStep(steps.footer) && describe("Footer",() => {
    it("შექმენით div#app-ში ელემენტი footer",() => {
        const footer = document.querySelector("div#app > footer");
        expect(footer != null || footer != undefined).to.be.true;
    })
    it("footer ელემენტში შექმენით p ელემენტები, ერთში ჩაწერეთ თქვენი სახელი, ხოლო მეორეში გვარი.\n ხოლო მესამეში, ჩაწერეთ 'c თბილისის თავისუფალი უნივერსიტეტი, 2021' ",() => {
        const footer = document.querySelector("div#app > footer");
        
        const childs = footer.querySelectorAll("p");
        
        expect(childs.length == 3).to.be.true;
        expect(childs[0].innerText.length > 0).to.be.true;
        expect(childs[1].innerText.length > 0).to.be.true;
        expect(childs[2].innerText == "c თბილისის თავისუფალი უნივერსიტეტი, 2021").to.be.true;
    })
})

function strStartsWith(str, prefix){
    return str.indexOf(prefix,0) !== -1;
}

function strEndsWith(str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
}


function setupGuessingPasswordHeader(passwordsDiv){
    let title = document.createElement("div");
    title.setAttribute("id","random-password-header");

    title.innerHTML = `ეცადე იპოვო პაროლი Inspect Element საშუალებით. პაროლის div ელემენტს აქვს კლასი '.real-password'`;
    title.style = "text-align: center";
    passwordsDiv.appendChild(title);
}


function setupGuessingPasswordBody(passwordsDiv, count = 104 * 5){
    const max = 999999
    const min = 100000

    let passwordsBodyContainer = document.createElement("div");
    passwordsBodyContainer.setAttribute("id","random-passwords-body");

    

    for (let c = 0; c < count; c++) {
        const randomNumber = Math.floor(Math.random() * (max - min) + min)
        passwordsBodyContainer.innerHTML += '<p class="fake-password"> ' + randomNumber + ' </p>';
    }

    passwordsDiv.appendChild(passwordsBodyContainer);

    let realPassword = Math.floor(Math.random() * (max - min) + min)
    if (CONFIG.password) {
            realPassword = CONFIG.password
    } else {
        CONFIG.password = realPassword;
        saveConfig();
    }
   
    let randomPasswordIndex = Math.floor(Math.random() * count)
    let realPasswordDiv = document.getElementsByClassName("fake-password")[randomPasswordIndex];

    realPasswordDiv.classList = "real-password";
    realPasswordDiv.innerText = realPassword;


    /* TODO: Remove This After Development Process */
    realPasswordDiv.style = "color: red";

}

// function getActualPassword(){
//     return document.querySelector(".password").innerText;
// }

// function submitPassword(){

//     window.location.reload();

//     /*
//     let actualPassword = getActualPassword();
//     let retrievePassword = document.getElementById("password-input").value;

//     if(actualPassword === retrievePassword)
//         console.log("Wow");
//     else
//         console.log("Puf");
//     */

// }

// function setupGuessingPasswordFooter(passwordsDiv){
//     passwordsDiv.innerHTML += `<div class="login-container">
//     <p> შემდეგი ნაბიჯისთვის შეიყვანე სწორი პაროლი </p>
//     <input id="name-input" type="text" placeholder="Name"><br>
//     <input id="password-input" type="text" placeholder="Password"><br>
//     <button type="submit" id="password-submit" onclick="submitPassword()">Submit</button>
//     </div>`
// }

function setupGuessingPassword(count=70) {
    let passwordsDiv = document.createElement("div");
    passwordsDiv.setAttribute("id","random-password-list");

    document.getElementById("app").appendChild(passwordsDiv);

    setupGuessingPasswordHeader(passwordsDiv);
    setupGuessingPasswordBody(passwordsDiv);
    //setupGuessingPasswordFooter(passwordsDiv);
}