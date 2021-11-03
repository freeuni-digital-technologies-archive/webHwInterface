const { expect, assert } = chai

// აქ ჩამოვწერთ რომელი მერამდენე იყოს რომ შემთხვევით
// რიცხვების შეცვლა არ დაგვავიწყდეს

CONFIG.allowedFiles = ['index.html']
const steps = {
    introduction: 1,
    setup_and_password: 2,
    /**
     * სტილი შეუცვალოს პაროლს და დამალოს
     * head title საიტის სახელი
     * browser tab icon
     * h1 სტუდენტის სახელის საიტი (ტესტში შეამოწმე რომ მთავრდება 'ს საიტი')
     * h1 id იყოს მათი emailid (ეს შემოწმდება სერვერზე)
     * div სათაურისთვის (გრძელი bar რამე ფერით, h1 იყოს მარჯვნივ)
     */
    header: 3,
    /**
     * აქვს სურათი მთლიან ბექგრაუნდზე (ლეპტოპის ეკრანის სიგანე და შესაბამისი სიმაღლე რაც გამოვა)
     * სურათი უნდა გადმოწერონ (src შევამოწმებთ რომ http-ით არ იწყება)
     * პარაგრაფი არის მარჯვნივ (მაგრამ ბოლომდე მიწეული არა) 
     * აქვს ფერადი ფონი (რომ სურათს გამოეყოს) და padding
     * h2 გვერდის სახელი id page1
     */
    page_1: 4,
    /**
     * აქვს რამდენიმე სურათი (width: 20%) გვერდიგვერდ 
     * ჩასვან ლინკით (ამის ინსტრუქცია გამოჩნდეს)
     * რომლებიც თავიდან ცოტა გამჭვირვალედ არის
     * mouse hover-ზე მკვეთრდება და ოდნავ იზრდება
     */
    page_2: 5,
    /**
     * internal hrefs to page 1 and page2, aligned right. with padding
     * ყველა ჩასქროლვაზე ჩანს
     */
    menu: 6,
    /**
     * ონი არის ნახევრად გამჭვირვალე. 
     * ეწერება სტუდენტის სახელი და გვარი, 
     * c თბილისის თავისუფალი უნივერსიტეტი, 2021. 
     */
    footer: 7,
    done: 8
}

CONFIG.isStep(steps.introduction) && describe("", () => {
    CONFIG.hints = 'on'
    it(`გამარჯობა :) კეთილი იყოს შენი მობრძანება ვების პირველ დავალებაში. 
    დანარჩენი სემესტრი ბევრი სიახლე გელოდება და ნელ-ნელა ისწავლი
    იმის მსგავს სამუშაო გარემოს, რომელსაც "ნამდვილი" პროგრამისტები იყენებენ`)
    it(`პირველ რიგში, ყურადღებით მიყევი ინსტრუქციას და არაფერს გადაახტე, რადგან
    მეილზე ინფორმაციის სათითაოდ ყველასთვის გამეორებას არ ვაპირებთ`)
    it(`ყველა დავალებას ექნება ხოლმე ტესტები.`)
    it(`ეს ტესტი ამოწმებს, რომ 2+2=4. თუ კოდი ტესტზე "გადის", მაშინ გამოჩნდება ხოლმე
    "შემდეგი ნაბიჯის" ღილაკი, როგორც ახლა მარჯვნივ. ჯერ არ დააჭირო, წაიკითხე ბოლომდე`, 
    () => expect(2 + 2).eql(4))
    it(`თუ ტესტის ტექსტი გაუგებარია, სცადე "დახმარება"-ში "მინიშნებების ჩვენება. 
    ამის შემდეგ ასეთი ლურჯი ფერით გამოჩნდება ხოლმე მინიშნებები (ამ გვერდზე ავტომატურად
    უკვე ნაჩვენებია). შენ თვითონ დაარეგულირე
    რამდენად ხშირად გამოიყენებ მინიშნებებს (და მაგის მაგივრად, მაგალითად, დაგუგლავ
    ან სემინარში მოძებნი პასუხს`)
    it(`ტესტები ისეა დაწერილი, რომ  `)
    toggle('help')
    
    showMessage('პირობები', 'სამუშაო-გარემო')
    
})

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
    it(`კოდის ედიტორის საშუალებით გახსენი html ფაილი, მოძებნე ხაზი, სადაც წერია div#write-password-here და ჩაწერე იქ პაროლი.
    პაროლის სანახავად გამოიყენე inspect element`, () => {
        const n = Number(document.querySelector('div#write-password-here').innerText)
        expect(n).eql(CONFIG.password)
    })

    toggle('help')
    showMessage('inspect-element-გამოყენება', 'ედიტორის-გამოყენება')

})

CONFIG.isStep(steps.header) && describe(`header`, () => {
    

    it(`head ელემენტში შექმენი title და ჩაწერე შენი საიტის სახელი. საიტს რამე თემა მოუფიქრე 😎`, () => {
        let title = document.querySelector("head > title");
        expect(title != null || title != undefined).to.be.true;

        let text = title.innerText;
        expect(text.length > 0).to.be.true;

    })
    it("<title> საიტის სახელი</title> - ეს ხაზი დაამატე <head>-ის შემდეგ")

    it(`ახლა საიტს ლოგოსავით რამე დავამატოთ, ბრაუზერის tab-ებში რომ მარტივად
    გამოჩნდეს. head ელემენტში შექმენი link, რომლის საშუალებითაც შეცვლი browser tab icon-ს.
    სურათის საპოვნელად დაგუგლე "შენი საიტის თემა ico". გახსენი სურათი, გააკეთე right click
    და copy image address. შემდეგ ედიტორში paste-ს რომ გააკეთებ, სურათის ბმულს ჩასვამს.
    გაითვალისწინე, რომ ფაილი უნდა იყოს .ico ფორმატის. ამის შესამოწმებლად ჩასმულ ბმულს
    დააკვირდი - ico-თი უნდა მთავრდებოდეს`, () => {
        let link = document.querySelector("head > link[rel='icon']")
         
        expect(link != null || link != undefined).to.be.true;

        expect(link.href != null).to.be.true;
        
        let currentPath = window.location.href;

        expect(link.href.length).not.equal(0)
        expect(link.href != currentPath).to.be.true;
        expect(link.href.endsWith('.ico')).to.be.true
        expect(link.href.startsWith('http')).to.be.true
    })
    it("<link rel='icon' href='___' />")
    it("___ მაგივრად ჩაწერე icon-ის ბმული")

   
    // TODO აქ emailid უნდა ჩაწერონ class-ში (შემოწმება)
    it(`შექმენი div ელემენტი, რომლის id იქნება website-title-container და
    მასში დაამატე h1, რომლის id იქნება website-title. ხოლო კლასი უნდა ქონდეს შენი emailid
        ჩაწერე სათაური, რომელიც იქნება შემდეგი ფორმატის, მაგალითად: გიგის საიტი. აუცილებელია, რომ ზუსტად
        ეს სიტყვები გამოიყენო`,() => {
            const elem = document.querySelector("div#website-title-container");
        expect(elem != null || elem != undefined).to.be.true;
        const h1 = document.querySelector("div#website-title-container > h1#website-title");

        expect(h1 != null || h1 != undefined).to.be.true;
        
        const h1_id = h1.getAttribute("id");
        expect(h1_id != null || h1_id != undefined).to.be.true;

        const text = h1.innerText;
        expect(strEndsWith(text,'ს საიტი')).to.be.true;
        expect(text.length >= 9)
    })

    it(`<div id='website-title-container'><h1 id='website-title' class='imghv14'>
        ვინმეს საიტი</h1></div>`)

    it('head ელემენტში შექმენი style ელემენტი',() => {
        const style = document.querySelector("head > style");
        expect(style != null || style != undefined).to.be.true;
    })
    it("<style></style>")

    it(`h1-ის div-ს უნდა ქონდეს 2px სისქის border, რომელიც იქნება წყვეტილი(იგულისხმება dotted) და ლურჯი (rgb) ფერის(blue). 
        style თაგში გამოიყენე #website-title სელექტორი. ტექსტზე ძალიან მიბჯენილი რომ არ გამოვიდეს, 10px padding დაუმატე`,() => {
        const h1 = document.querySelector("div#website-title-container > h1#website-title");
        

        // const paddingPixels = h1style.getPropertyValue("padding");
        // expect(paddingPixels == "10px").to.be.true;

        // // const textAlign = h1style.getPropertyValue("text-align");
        // // expect(textAlign == "center").to.be.true;

        // const border = h1style.getPropertyValue("border");
        // expect(border == "2px dotted rgb(0, 0, 255)").to.be.true;

        const h1styleTag = window.getComputedStyle(h1);
        const h1styleAttr = h1.style;

        const paddingPixelsTag = h1styleTag.getPropertyValue("padding");
        const paddingPixelsAttr = h1styleAttr.padding;

        expect(paddingPixelsTag == "10px" || paddingPixelsAttr == "10px").to.be.true;

        const borderTag = h1styleTag.getPropertyValue("border");
        const borderAttr = h1styleAttr.border;

        const expectBorder = "2px dotted rgb(0, 0, 255)";

        expect(borderTag == expectBorder || borderAttr == expectBorder).to.be.true;


    })
    it(`#website-title{`)
    it(`    border: 2px dotted rgb(0, 0, 255);`)
    it(`}`)

    it("დამალე პაროლი. ამისათვის საკმარისია, რომ მისი სტილი გახადო display: none",() => {
        const passwordDiv = document.getElementById("write-password-here");


        const passwordDivStyleTag = window.getComputedStyle(passwordDiv);
        const passwordDivStyleAttr = passwordDiv.style;


        const displayTag = passwordDivStyleTag.getPropertyValue("display");
        const displayAttr = passwordDivStyleAttr.display;

        expect(displayAttr == "none" || displayTag == "none").to.be.true;
    })
    it(`გამოიყენე სელექტორი. ისევე, როგორც #website-title`)

})

CONFIG.isStep(steps.page_1) && describe("Page 1",() => {

    it("შექმენი div ელემენტი, რომლის id იქნება page1",() => {
        const div = document.querySelector("div#page1");
        expect(div != null || div != undefined).to.be.true;
    })
    it("<div id='page1'></div>")

    it(`div#page1 ელემენტის დასაწყისში (კონტენტის და სურათის თავზე)
    შექმენი h1 ელემენტი, რომლის id იქნება page1-title. ჩაწერე რამე შენთვის მნიშვნელოვანი
    და სურათთან დაკავშირებული სიტყვები (პოეტურობა არ დაიშურო)`,() => {
        const h1 = document.querySelector("div#page1 > h1#page1-title");
        expect(h1 != null || h1 != undefined).to.be.true;

        // expect(h1.innerText == "Page 1").to.be.true;

        //expect(h1.style.textAlign == "center" || window.getComputedStyle(h1).getPropertyValue("text-align") == "center").to.be.true;
    })
    it("<h1 id='page1-title'></h1>")

    it("div#page1 ელემენტში შექმენი ახალი div, რომლის id იქნება page1-content", () => {
        const div = document.querySelector("div#page1 > div#page1-content");
        expect(div != null || div != undefined).to.be.true;
    })
    it("<div id='page1-content'></div> - ეს ჩაამატე h1-ის შემდეგ")

    it(`ამ გვერდს დიდი ლამაზი ფონი გავუკეთოთ. 
    div#page1-content ელემენტში შექმენი img ელემენტი, სადაც გამოიყენებ ეკრანის რეზოლუციის სურათს (wallpaper კარგი
        keyword-ია ასეთის მოსაძებნად))
    ოღონდ სურათი უნდა იყოს დამატებული შენივე ლეპტოპიდან (გადმოწერე და პროექტის ფოლდერში გადაიტანე). 
    იმისთვის, რომ სურათმა მთელი გვერდი დაიკავოს, მისი სიგანე 100% გავხადოთ, სიმაღლეს
    კი ავტომატურად შეეცვლება ზომა`,() => {
        const img = document.querySelector("div#page1 > div#page1-content >img");
        expect(img != null || img != undefined).to.be.true;

        const src = img.getAttribute("src");
        expect(src != null || src != undefined);

        expect(strStartsWith(src,"http")).to.be.false;
    })
    it("<img src='./my-image.jpg'/>")
    it("#page1 img { width: 100% }")
    it(`my-image მაგივრად უნდა ეწეროს გადმოწერილი სურათის სახელი. იმისთვის, რომ გაიგო, jpg არის თუ png, გადმოწერისას შეხედე
    ბმულს, ან გადმოწერილ ფაილზე right click > get info ან properties და იქ გაჩვენებს სრულ სახელს.
    `)

    /*
    it(`img ელემენტს უნდა ჰქონდეს 15px padding.
        უკანა ფონი უნდა იყოს ნებისმიერი ფერის გარდა თეთრისა და შავისა (white,black).
        სურათის სიგრძე იყოს 60%`, () => {
    
        const img = document.querySelector("div#page1 > div#page1-content > img");
        
        // const bgColor = img.style.backgroundColor;

        // expect(["white","black"].indexOf(bgColor) === -1).to.be.true;

        // const padding = img.style.padding;
        // expect(padding == "15px").to.be.true;

        // const width = img.clientWidth;
        // ეს არ მუშაობს
        // console.log(width, img.style)
        // expect(width === "100%").to.be.true;
    })
    */

    it('დამატებითი ჩელენჯი თუ გინდა, დაგუგლე, როგორ მოექცეს წარწერა სურათის თავზე', () => {})

    it(`თუ შენი მშვენიერი საიტით დატკბობა მოგინდება ხოლმე "დახმარება"-ში დამალე 
    ტესტები. თავიდან გამოსაჩენად გვერდი გადატვირთე`, () => {})
    // it("შექმნილი div#page1-content-ს სტილი ისე შეუცვალე, რომ სურათი მოექცეს შუაში",() => {
    //     const div = document.querySelector("div#page1 > div#page1-content");

    //     const divStyle = window.getComputedStyle(div);

    //     expect(div.style.display == "flex" || divStyle.getPropertyValue("display") == "flex").to.be.true;
    //     expect(div.style.justifyContent == "center" || divStyle.getPropertyValue("justify-content") == "center").to.be.true;
    // })
    // it("#page1-content{")
    // it(' display:flex;')
    // it(' justify-content:center')
    // it("}")


})

CONFIG.isStep(steps.page_2) && describe("Page 2",() => {
    it(`შექმენი div ელემენტი, რომლის id იქნება page2. ამ გვერდს რამე ფერი შეურჩე (დაგუგლე 
        color picker). იმისთვის, რომ 
    ფონის ფერი გამოჩნდეს, ელემენტს სიმაღლე მიეცი - 600px`,() => {
        const div = document.querySelector("div#page2");
        expect(div != null || div != undefined).to.be.true;

        const styleTag = window.getComputedStyle(div);
        const styleAttr = div.style;

        const heightTag = styleTag.getPropertyValue("height");
        const heightAttr = styleAttr.height;

        expect(heightTag == "600px" || heightAttr == "600px").to.be.true;

        const colorTag = styleTag.getPropertyValue("background-color");
        const colorStyle = styleAttr.backgroundColor;


        expect(colorTag != "rgba(0, 0, 0, 0)" || colorStyle != '').to.be.true;
    })
    it("<div id='page2'></div>")
    it("#page2 { height: 600px; background-color: rgb();")


    it(`div#page2 ელემენტში შექმენი h1 ელემენტი,რომლის id იქნება page2-title და ჰორიზონტალურად 
    შუაში იქნება მოქცეული. ძალიან მიბჯენილი რომ არ გამოვიდეს წინა გვერდზე, მოდი
    margin-top იყოს 250 პიქსელი`,() => {
        const h1 = document.querySelector("div#page2 > h1#page2-title");
        expect(h1 != null || h1 != undefined).to.be.true;

        expect(h1.innerText.length > 3).to.be.true;

        expect(h1.style.textAlign == "center" || window.getComputedStyle(h1).getPropertyValue("text-align") == "center").to.be.true;
        expect(h1.style.marginTop == "250px" || window.getComputedStyle(h1).getPropertyValue("margin-top") == "250px").to.be.true;
    })
    it("<h1 id='page2-title'></h1>")
    it("#page2-title {")
    it("  text-align: center")
    it("  margin-top: 250px")

    it("div#page2 ელემენტში შექმენი ახალი div, რომლის id იქნება page2-content", () => {
        const div = document.querySelector("div#page2 > div#page2-content");
        expect(div != null || div != undefined).to.be.true;
    })
    it("<div id='page2-content'></div>")

    /**
     * აქვს რამდენიმე სურათი (width: 20%) გვერდიგვერდ 
     * ჩასვან ლინკით (ამის ინსტრუქცია გამოჩნდეს)
     * რომლებიც თავიდან ცოტა გამჭვირვალედ არის
     * mouse hover-ზე მკვეთრდება და ოდნავ იზრდება
     */
    it(`ჩასვი div#page2-content მინიმუმ სამი განსხვავებული სურათი, რომლებსაც კლასი ექნებათ image-row. სურათები
    ამჯერად როგორც გინდა ისე ჩასვი (ბმულით ან გადმოწერით)`,() => {
        const container = document.querySelector("div#page2 > div#page2-content");

        const images = container.querySelectorAll("img.image-row");

        expect(images.length >= 3).to.be.true;

        let imageSrcs = new Set();
        for(image of images){
            const src = image.getAttribute("src");
            expect(src.length > 0).to.be.true;
            // expect(strStartsWith(src,"http")).to.be.false;
            imageSrcs.add(src);
        }

        expect(imageSrcs.size == images.length).to.be.true;
    })
    it("თითოეულ სურათს უნდა ჰქონდეს სიგანეც 350px, ხოლო opacity: 70%",() => {
        const container = document.querySelector("div#page2 > div#page2-content");
        const image = container.querySelector("img.image-row");

        const imageStyle = window.getComputedStyle(image);
        console.log(imageStyle.getPropertyValue("width"),imageStyle.getPropertyValue("opacity"))
        expect(imageStyle.getPropertyValue("width") == "350px").to.be.true;
        // expect(imageStyle.getPropertyValue("height") == "350px").to.be.true;
        expect(imageStyle.getPropertyValue("opacity") == "0.7").to.be.true;
    })
    it(".image-row { width: ...")

    //TODO: check if opacity is 1 on :hover

    // it("თუ სურათზე მაუსის კურსორს გადავატარებთ, opacity უნდა გახდეს 100%, ანუ მთლიანად უნდა გამოჩნდეს.",() => {
    //     const container = document.querySelector("div#page2 > div#page2-content");
    //     const image = container.querySelector("img.image-row");

    //     const imageStyle = window.getComputedStyle(image);
    //     console.log(imageStyle)
    //     expect(imageStyle.getPropertyValue("opacity") == "1").to.be.true;
    // })

    it(`სურათები თანაბრად უნდა იყვნენ დაშორებული ერთმანეთს და გვერდის კიდეებს.`,() => {
        const container = document.querySelector("div#page2 > div#page2-content");

        const containerStyle = window.getComputedStyle(container);
        expect(containerStyle.getPropertyValue("display") == "flex" && containerStyle.getPropertyValue("justify-content") == "space-around").to.be.true;
    })
    it("ამისთვის დაგჭირდებათ, რომ page2-content display იყოს flex და justify-content იყოს space-around")

    it(`ერთი ჩელენჯი გვაქვს, შეგიძლია, ისე გააკეთო, რომ სურათზე მაუსის მიტანისას
        სურათი ნაწილობრივ გამჭვირვალე აღარ იყოს?
        მინიშნება: (css elmeent hover opacity)`, () => {})

})

CONFIG.isStep(steps.menu) && describe("Menu",() => {
    it(`ჩვენს უზარმაზარ საიტზე ამდენი სქროლვა ცოტათი დამღლელია, 
    მოდი ნავიგაცია დავამატოთ (და თითქმის მოვრჩით).
    შექმენი div ელემენტი, რომელსაც id ექნება menu`,() => {
        const div = document.querySelector("div#menu");
        expect(div != null || div != undefined).to.be.true;
    })


    it(`შექმნილ დივში უნდა გვქონდეს ორი ლინკი, რომელიც ჩასქროლავს page1 და page2-ზე. 
    ლინკებს უნდა ჰქონდეთ კლასი page-navigator`,() => {
        const div = document.querySelector("div#menu");
        
        const children = div.querySelectorAll("a.page-navigator");
        expect(children.length == 2).to.be.true;

        expect(children[0].getAttribute("href") == "#page1").to.be.true;
        expect(children[1].getAttribute("href") == "#page2").to.be.true;

    })
    it(`თუ a ელემენტის href ატრიბუტში მიუთითებთ მაგალითისთვის href='#app', 
    დაჭერის შემდეგ გვერდი აისქროლება მითითებული id-ს მქონდე ელემენტთან`)

    it(`შექმნილი div#menu უნდა იყოს ფიქსირებული და სქროლვისას უნდა ჩანდეს ზედა მარჯვენა მხარეს. 
    ამ ელემენტს უნდა ჰქონდეს 2px სისქის solid gold border`,() => {
        const div = document.querySelector("div#menu");
        
        const divStyle = window.getComputedStyle(div);
        expect(divStyle.getPropertyValue("position") == "fixed" || div.style.position == "fixed").to.be.true;
        expect(divStyle.getPropertyValue("top") == "0px" || div.style.top == "0px").to.be.true;
        expect(divStyle.getPropertyValue("right") == "0px" || div.style.right == "0px").to.be.true;

        const expectBorder = "2px solid rgb(255, 215, 0)"
        expect(divStyle.getPropertyValue("border") == expectBorder || div.style.border == expectBorder).to.be.true;

    })
    it(`იმისათვის, რომ ელემენტი ფიქსირებული იყოს, დაგჭირდებათ position:fixed`)
    it(`პოზიციის მისათითებლად, შეგიძლიათ გამოიყენოთ top right bottom left. 
    მაგალითად, bottom:200px ნიშნავს, რომ ქვევიდან 200 პიქსელში იყოს ელემენტი მოთავსებული`);

})

CONFIG.isStep(steps.footer) && describe("Footer",() => {
    it(`შენი არ ვიცი და მე და გიგი ძალიან დავიღალეთ ამხელა დავალების კეთებით,
    ამიტომ იძულებული ვართ აქ დავასრულოთ. არადა სურათების ქვემოთ აღწერები და
    მთელი ამბები გვინდოდა გვესწავლებინა. მოკლედ, საიტის ბოლოში დაამატე ახალი div#footer`,() => {
        const footer = document.querySelector("div#footer");
        expect(footer != null || footer != undefined).to.be.true;
    })
    it(`footer ელემენტში შექმენი ორი პარაგრაფი. პირველი პარაგრაფი ორი span ელემენტით. ერთში ჩაწერე შენი სახელი და გვარი.
    მეორეში, ჩაწერე "Ⓒ თბილისის თავისუფალი უნივერსიტეტი, 2021". არ დაგავიწყდეს გაცენტრვა. მეორე პარაგრაფში
    რამე მესიჯი დამიწერე :)`,() => {
        const footer = document.querySelector("div#footer");

        const paragraphs = footer.querySelectorAll("p");
        expect(paragraphs.length).eql(2);


        const spans = paragraphs[0].querySelectorAll("span");
        expect(spans.length).eql(2);

        console.log(spans);
        
        expect(spans[0].innerText.length > 0).to.be.true;

        expect(spans[1].innerText).eql("Ⓒ თბილისის თავისუფალი უნივერსიტეტი, 2021");

        expect(footer.style.textAlign == "center" || window.getComputedStyle(footer).getPropertyValue("text-align") == "center").to.be.true;
    })
    it('copyright symbol დაგუგლე, მონიშე და დააკოპირე')
    it('იმის მაგივრად, რომ თითოეული ტექსტი გაცენტრო, გაცენტრე მთლიანად div#footer')
})

CONFIG.isStep(steps.done) && describe("🥳", () => {
    toggle('help')
    showMessage('success')
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

    // title.innerHTML = `ეცადე იპოვო პაროლი Inspect Element საშუალებით. პაროლის div ელემენტს აქვს კლასი '.real-password'`;
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
        CONFIG.save();
    }
   
    let randomPasswordIndex = Math.floor(Math.random() * count)
    let realPasswordDiv = document.getElementsByClassName("fake-password")[randomPasswordIndex];

    realPasswordDiv.classList = "real-password";
    realPasswordDiv.innerText = realPassword;


}

function setupGuessingPassword() {
    let passwordsDiv = document.createElement("div");
    passwordsDiv.setAttribute("id","random-password-list");

    document.body.appendChild(passwordsDiv);

    setupGuessingPasswordHeader(passwordsDiv);
    setupGuessingPasswordBody(passwordsDiv);
    //setupGuessingPasswordFooter(passwordsDiv);
}