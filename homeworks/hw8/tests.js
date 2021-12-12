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