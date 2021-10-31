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
        console.log("n", n)
        console.log("p", CONFIG.password)
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

    it(`head ელემენტში შექმენით title და ჩაწერეთ თქვენი საიტის სახელი. აი
    ასე: <title>ჩემი საიტი</title>`, () => {
        let title = document.querySelector("head > title");
        expect(title != null || title != undefined).to.be.true;

        let text = title.innerText;
        expect(text.length > 0).to.be.true;

    })

    // TODO: Can't check if file really exists or not.
    it(`head ელემენტში შექმენით link, რომლის საშუალებითაც შეცვლით browser tab icon-ს`, () => {
        let link = document.querySelector("head > link[rel='icon']")
         
        expect(link != null || link != undefined).to.be.true;

        expect(link.href != null).to.be.true;
        
        let currentPath = window.location.href;

        expect(link.href.length != 0).to.be.true
        expect(link.href != currentPath).to.be.true;

    })

    it('head ელემენტში შექმენით style ელემენტი',() => {
        const style = document.querySelector("head > style");
        expect(style != null || style != undefined).to.be.true;

    })
    it("div#app ელემენტში შექმენით div ელემენტი, რომლის id იქნება website-title-container",() => {
        const elem = document.querySelector("div#app > div#website-title-container");
        expect(elem != null || elem != undefined).to.be.true;
    })

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

    it("დამალეთ პაროლი. ამისათვის საკმარისია, რომ მისი სტილი გახადოთ display: none",() => {
        const passwordDiv = document.getElementById("write-password-here");

        const passwordDivStyle = window.getComputedStyle(passwordDiv);

        expect(passwordDiv.style.display == "none" || passwordDivStyle.getPropertyValue("display") == "none").to.be.true;
    })


})

CONFIG.isStep(steps.page_1) && describe("Page 1",() => {

    it("შექმენით div ელემენტი, რომელის id იქნება page1",() => {
        const div = document.querySelector("div#app > div#page1");
        expect(div != null || div != undefined).to.be.true;

    })
    it("შექმნილ div#page1 ელემენტში შექმენით h1 ელემენტი,რომლის id იქნება page1-title,ეწერება Page 1 და იქნება პოზიციით შუაში",() => {
        const h1 = document.querySelector("div#app > div#page1 > h1#page1-title");
        expect(h1 != null || h1 != undefined).to.be.true;

        expect(h1.innerText == "Page 1").to.be.true;

        expect(h1.style.textAling == "center" || window.getComputedStyle(h1).getPropertyValue("text-align") == "center").to.be.true;
    })
    it("შექმნილ div#page1 ელემენტში შექმენით ახალი div, რომლის id იქნება page1-content", () => {
        const div = document.querySelector("div#app > div#page1 > div#page1-content");
        expect(div != null || div != undefined).to.be.true;
    })
    it("შექმნილი div#page1-content ელემენტი გასტილეთ ისე, რომ სურათი მოექცეს შუაში. (justify content)",() => {
        const div = document.querySelector("div#app > div#page1 > div#page1-content");

        const divStyle = window.getComputedStyle(div);

        expect(div.style.display == "flex" || divStyle.getPropertyValue("display") == "flex").to.be.true;
        expect(div.style.justifyContent == "center" || divStyle.getPropertyValue("justify-content") == "center").to.be.true;
    })
    it("შექმნილ div#page1-content ელემენტში შექმენით img ელემენტი, სადაც გამოიყენებთ ნებისმიერ სურათს.სურათი უნდა იყოს დამატებული თქვენივე ლეპტოპიდან",() => {
        const img = document.querySelector("div#app > div#page1 > div#page1-content >img");
        expect(img != null || img != undefined).to.be.true;

        const src = img.getAttribute("src");
        expect(src != null || src != undefined);

        expect(strStartsWith(src,"http")).to.be.false;
    })
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