/**
 * ამ ფაილში არის ნავიგაციის ფუნქციები
 */

function setupTestsDiv() {
    const d = document.getElementById('progress-bar')
    // CONFIG.testCount რაოდენობის მართკუთხედი უნდა დაემატოს
    // CONFIG.currentStep ზე ნაკლებები იყოს გამწვანებული
    // CONFIG.currentStep რამე სტილით
    // CONFIG.currentStep -ზე მეტი იყოს ნაცრისფრად
    const c = CONFIG.failed ? 'uncompleted' : 'completed'
    const click = CONFIG.failed ? '' : 'onclick="nextStep()"'
    // TODO აქ ჩაემატოს ტესტების div-ის დამალვის ღილაკი რომ თავისი საიტი ნახონ ხოლმე
    d.innerHTML = `
        <button class="next-step ${c}" ${click}>შემდეგი ნაბიჯი</button>
    `
    setupGuessingPassword()

    // document.getElementById('tests').appendChild(d)
}


/**
 * checkAll იმპლემენტაცია არ არის ახლა საჭირო
 * ეს ფუნქცია ჩატვირთვის შემდეგ შეამოწმებს, რომ ახლანდელი ნაბიჯის ყველა 
 * ტესტი წარმატებითაა. რადგან მხოლოდ ახლანდელი ნაბიჯის ტესტები ეშვება, 
 * უბრალოდ უნდა შემოწმდეს, რომ ყველა ტესტი ჩაბარდა
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
 * localstorage-ში ინახავს კონკრეტულ step-ზე უკვე აჩვენა თუ არა
 * ამ ეტაპზე შეგვიძლია უბრალოდ დავალების ბოლოს იყოს
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
    // ამის იმპლემენტაცია არ არის ახლავე საჭირო, უბრალოდ კომენტარები იყოს
    CONFIG.currentStep++
    CONFIG.save()
    window.location.reload()
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

/*

const {
    EVENT_TEST_PASS,
    EVENT_TEST_FAIL,
    EVENT_TEST_END,
} = Mocha.Runner.constants;

const Base = Mocha.reporters.html;

function MyReporter(runner, options) {
    Base.call(this, runner, options);

    runner.on(EVENT_TEST_PASS, function (test) {
        console.log("pass: %s", test.fullTitle());
    });

    runner.on(EVENT_TEST_FAIL, function (test, err) {
        console.log("fail: %s -- error: %s", test.fullTitle(), err.message);
    });

    runner.on(EVENT_TEST_END, function () {
        console.log("end: %d/%d", runner.stats.passes, runner.stats.tests);
        checkProgress()
        setupTestsDiv()
    });
}
mocha.reporter(MyReporter);
*/

setTimeout(() => {
    mocha.run()
    .on('fail', t => CONFIG.failed = true)
    .on('end', () => {
        checkProgress()
        setupTestsDiv()
    })
}, 1000)