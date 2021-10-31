const { expect, assert } = chai

// აქ ჩამოვწერთ რომელი მერამდენე იყოს რომ შემთხვევით
// რიცხვების შეცვლა არ დაგვავიწყდეს
const steps = {
    setup_and_password: 1,
    header: 2,

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
    it(`გახსენი html ფაილი კოდის ედიტორში, მოძებნე ხაზი, რომელზეც div#write-password-here
    არის და ჩაწერე იქ პაროლი`, () => {
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
    it(``, () => {
        
    })
    it(``, () => {

    })
})


CONFIG.isStep(2) && describe("step 2. bla bla bla", () => {
    it("this will fail", () => {
        expect(true).eql(false)
    })
})



function setupGuessingPassword(count=70) {
    const numbersList = document.getElementById('random-number-list')

    const max = 999999
    const min = 100000
    let passwordAdded = false

    // todo update description with tips
    numbersList.innerHTML = `ეცადე იპოვო პაროლი ეცადე იპოვო პაროლი ეცადე იპოვო პაროლი
        ეცადე იპოვო პაროლი ეცადე იპოვო პაროლი ეცადე იპოვო პაროლი ეცადე იპო
        ვო პაროლი ეცადე იპოვო პაროლი ქვემოთ შეავსე`

    for (let c = 0; c < count; c++) {
        const randomNumber = Math.floor(Math.random() * (max - min) + min)
        if (!passwordAdded && Math.random() > 0.95) {
            numbersList.innerHTML += '<p class="password" style="color: red"> ' + randomNumber + ' </p>';
            passwordAdded = true
        } else {
            numbersList.innerHTML += '<p> ' + randomNumber + ' </p>';
        }
    }
    if (!passwordAdded) {
        numbersList.innerHTML += '<p class="password"> '
            + Math.floor(Math.random() * (max - min) + min) + ' </p>';
        passwordAdded = true
    }

    numbersList.innerHTML += `<div class="login-container">
                                  <p> შემდეგი ნაბიჯისთვის შეიყვანე სწორი პაროლი </p>
                                  <input id="name-input" type="text" placeholder="Name"><br>
                                  <input id="password-input" type="text" placeholder="Password">
                              </div>`
}