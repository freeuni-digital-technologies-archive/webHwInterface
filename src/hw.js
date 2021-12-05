import { MESSAGES } from "./instructions"

/**
 * ამ ფაილში არის ნავიგაციის ფუნქციები
 */

 export class Homework {
    constructor(CONFIG) {
        this.CONFIG = CONFIG
    }

    launchTests(mocha) {
        mocha.run()
            .on('fail', t => this.CONFIG.failed = true)
            .on('end', () => {
                this.checkProgress()
                this.setupTestsDiv()
            })
    }

    setHints(p) {
        const mochaPendings = Array.from([...document.querySelector('#mocha').getElementsByClassName('pending')])
        mochaPendings.forEach(m => {
            const mochaPending = m.style
            if (p) {
                mochaPending.display = p === 'off' ? 'none' : ''
            } else {
                mochaPending.display = mochaPending.display === 'none' ? '' : 'none'
            }
        })   
    }

    checkPath(){
        const unzipPaths = [".zip","Local/Temp/Rar"]
        const url = window.location.href;
        let result = unzipPaths.find(unzipPath => url.includes(unzipPath));

        if(result !== undefined){
            document.innerHTML = "Oops! როგორც ჩანს, ფაილის გახსნას .zip არქივიდან ცდილობ. ასე რაღაცეები არ იმუშავებს. ჯერ გააკეთე extract.\nთუ ეს მესიჯი შეცდომით მიიღე, მოგვწერე მეილზე ";
        }
    }


    setupTestsDiv() {
        const d = document.getElementById('progress-bar')
        // this.CONFIG.testCount რაოდენობის მართკუთხედი უნდა დაემატოს
        // this.CONFIG.currentStep ზე ნაკლებები იყოს გამწვანებული
        // this.CONFIG.currentStep რამე სტილით
        // this.CONFIG.currentStep -ზე მეტი იყოს ნაცრისფრად
        const c = this.CONFIG.failed ? 'uncompleted' : 'completed'
        const click = this.CONFIG.failed ? '' : 'onclick="HW.nextStep()"'
        this.setHints(this.CONFIG.hints)
        d.innerHTML = `
        <button class="align-right" onclick="toggle('help')">დახმარება</button>
        <button class="align-right ${c}" id="next-step" ${click}>შემდეგი ნაბიჯი</button>
        <button class="align-right" onclick="HW.previousStep()">წინა ნაბიჯი</button>
        `

        // const messageButtons = Object.keys(MESSAGES).map(m => `<button onclick="showMessage('${m}')">${m.replaceAll('-', ' ')}</button>`).join('')
        // document.getElementById('help-buttons').innerHTML = `
        //     <button onclick="HW.setHints()">მინიშნებების ჩვენება/დამალვა</button>
        //     <button onclick="toggle('tests')">ტესტების  დამალვა</button>
        //     ${messageButtons}
        //     <button onclick="toggle('help')">დახურვა</button>
        // `

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
    checkProgress() {
        // might be useful: https://mochajs.org/api/tutorial-custom-reporter.html
        /*
        if (this.CONFIG.checkAll) {
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
    celebrate() {
        // this.CONFIG.save()
    }

    nextStep() {
        // ერთი პრობლემა რომელზეც დასაფიქრებელია არის ის, რომ ახალ ცვლილებაზე
        // წინა ტესტი თუ ჩაიჭრა, დროულად უნდა შევამოწმოთ
        // this.CONFIG.checkAll = true
        // this.CONFIG.save()
        // reload
        // ამის იმპლემენტაცია არ არის ახლავე საჭირო, უბრალოდ კომენტარები იყოს
        if (this.CONFIG.checkAll) {

        }
        if (this.CONFIG.currentStep === this.CONFIG.testCount) {

        } else {
            this.CONFIG.currentStep++
            this.CONFIG.save()
            window.location.reload()
        }
    }

    /* next-ს როდესაც დააჭერს, პირველ reload-ზე 
     ყველა წინა უნდა შემოწმდეს (isStep ფუნქციაშია ამის შენიშვნა)
    */
    checkAll() {
        // testConfig-ში step-ის შეცვლა
        // გვერდის გადატვირთვა (და რადგან testConfig-ში უკვე შეცვლილი იქნება,
        // შემდეგი ტესტები გამოჩნდება)
        // this.CONFIG.save()
        // ამ ფუნქციას ჭირდება რომ ტესტების რაოდენობა იცოდეს (counter-ის გაზრდისას)
        // reload
    }


    // ეს ფუნქცია ჯერ არ გვინდა :დ
    previousStep() {
        if (this.CONFIG.currentStep === 1) {

        } else {
            this.CONFIG.currentStep--
            this.CONFIG.save()
            window.location.reload()
        }
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
}