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


})


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