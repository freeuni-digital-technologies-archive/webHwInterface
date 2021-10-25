/**
 * ამ ფაილში არის ნავიგაციის ფუნქციები
 */

// თუ ბოლო ტესტია, next არ გამოჩნდეს
// თუ პირვლეი ტესტია, prev არ გამოჩნდეს

function setupTestsDiv() {
    const d = document.createElement('div')
    d.innerHTML = `
        <button id='prev-button'>წინა</button>
        <button id='next-button'>შემდეგი</button>
    `
    document.getElementById('tests').appendChild(d)
}


/**
 * ეს ფუნქცია ჩატვირთვის შემდეგ შეამოწმებს, რომ ახლანდელი ნაბიჯის ყველა 
 * ტესტი წარმატებითაა. რადგან მხოლოდ ახლანდელი ნაბიჯის ტესტები ეშვება, 
 * უბრალოდ უნდა შემოწმდეს, რომ ყველა ტესტი ჩაბარდა
 * ამის მიხედვით აინთება Next/Prev ღილაკი
 * TODO NEXT რამე celebration ანიმაცია გამოჩნდეს, ამას მე გავაკეთებ
 * celebration ერთხელ უნდა გამოჩნდეს, ანუ 
 */
function checkProgress() {
    // might be useful: https://mochajs.org/api/tutorial-custom-reporter.html
    /*
    if (CONFIG.checkAll) {
        checkAll()
        // ეს ფუნქცია თავისით გადატვირთავს გვერდს ამიტომ
        // დანარჩენს აღარ გააგრძელებს
    }
    */
    
}

/**
 * localstorage-ში ინახავს კონკრეტულ step-ზე
 */
function celebrate() {
    // CONFIG.save()
}


function nextStep() {
    // ერთი პრობლემა რომელზეც დასაფიქრებელია არის ის, რომ ახალ ცვლილებაზე
    // წინა ტესტი თუ ჩაიჭრა, დროულად უნდა შევამოწმოთ
    // CONFIG.checkAll = true
    // CONFIG.save()
    // reload
}

/* next-ს როდესაც დააჭერს, პირველ reload-ზე 
 ყველა წინა უნდა შემოწმდეს (isStep ფუნქციაშია ამის შენიშვნა)
*/
function checkAll() {
    // testConfig-ში step-ის შეცვლა
    // გვერდის გადატვირთვა (და რადგან testConfig-ში უკვე შეცვლილი იქნება,
    // შემდეგი ტესტები გამოჩნდება)
    // CONFIG.save()
    // ამ ფუნქციას ჭირდება რომ ტესტების რაოდენობა იცოდეს (counter-ის გაზრდისას)
    // reload
}


// ეს ფუნქცია ჯერ არ გვინდა :დ
function previousStep() {
    
}


setTimeout(() => {
    mocha.run()
    .on('end', () => {
        checkProgress()
        setupTestsDiv()
    })
}, 1000)