const { expect, assert } = chai

// აქ ჩამოვწერთ რომელი მერამდენე იყოს რომ შემთხვევით
// რიცხვების შეცვლა არ დაგვავიწყდეს


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
    it(`კოდის ედიტორის საშუალებით გახსენი html ფაილი, მოძებნე ხაზი, სადაც წერია div#write-password-here და ჩაწერე იქ პაროლი`, () => {
        const n = Number(document.querySelector('div#write-password-here').innerText)

        expect(n).eql(CONFIG.password)

        increaseStep();
        window.location.reload();
    })

})

let headerStepTestCount = 0;
let headerStepFinished = false;

async function increateHeaderStepTestCount(){
    headerStepTestCount++;

    if(headerStepTestCount == 3)
        headerStepFinished = true;
}

// todo rewrite description
CONFIG.isStep(steps.header) && describe(`header`, () => {


    /**
     * ყველა მათგანი მოწმდება ცალკე ტესტით
     * სათაური
     * მენიუსავით რამე div ზემოთ
     */

    it(`head ელემენტში შექმენით title და ჩაწერეთ თქვენი საიტის სახელი`, () => {

        let title = document.querySelector("head > title");
        expect(title != null || title != undefined).to.be.true;

        let text = title.innerText;
        expect(text.length > 0).to.be.true;

        increateHeaderStepTestCount();

    })

    // TODO: Can't check if file really exists or not.
    it(`head ელემენტში შექმენით link, რომლის საშუალებითაც შეცვლით browser tab icon-ს`, () => {
        let link = document.querySelector("head > link[rel='icon']")
         
        expect(link != null || link != undefined).to.be.true;

        expect(link.href != null).to.be.true;
        
        let currentPath = window.location.href;

        expect(link.href.length != 0).to.be.true
        expect(link.href != currentPath).to.be.true;

        increateHeaderStepTestCount();


    })

    it('head ელემენტში შექმენით style ელემენტი',() => {
        const style = document.querySelector("head > style");
        expect(style != null || style != undefined).to.be.true;

        increateHeaderStepTestCount();

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


    let randomPasswordIndex = Math.floor(Math.random() * count)
    let realPasswordDiv = document.getElementsByClassName("fake-password")[randomPasswordIndex];
    realPasswordDiv.classList = "real-password";


    /* TODO: Remove This After Development Process */
    realPasswordDiv.style = "color: red";

    let realPassword = realPasswordDiv.innerText;
    console.log(realPassword);
    CONFIG.password = Number(realPassword);

    saveConfig();

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