# webHwInterface

## გარემოს გამართვა
### პრერეკვიზიტები
- node >= 12
- yarn
- hub (github-ის cli)
- windows-ის შემთხვევაში: git და git bash ან wsl


### აუცილებელი ნაბიჯები
1. Github-დან კლონირება
2. კლონირების შემდეგ webHwInterface დირექტორიაში უნდა გაეშვას ბრძანება
    ```sh
    yarn
    ```

## Development WorkFlow
1. ყოველ ჯერზე ხელახლა წერის თავიდან ასაცილებლად ცვლილებები არ შეიტანო პირდაპირ index.html ფაილში, 
   არამედ შექმენი index_solution.html, გადააკოპირე კოდი index.html-დან და დაიწყე კოდის index_solution.html-ში წერა
   (ზოგადად ყველა _solution ფაილს git აიგნორებს, ამიტომ ლოკალურად ტესტირებისთვის კომფორტულია)

2. დეველოპენტისთვის საჭიროა, რომ index_solution.html-ში არსებული სკრიპტ თეგი შეიცვალოს შემდეგნაირად:
   ```html
   <script type="module" src="./main.js"></script>
   ```
3. შემდეგ ტერმინალში უნდა გაიშვას ბრძანება, რომელიც localhost-ზე გახსნის მითითებულ html ფაილს:
   ```sh
   yarn start ./homeworks/hwN/index_solution.html
   ```
   სადაც N აღნიშნავს შესაბამისი დავალების ნომერს.

## Utility Commands
1. ლოკალურად არსებული ტესტების დაბილდვა, რომელიც თითოეული დავალებისთვის შექმნის ფაილს სადაც ყველა ტესტი და საჭირო კოდი ერთიანად იქნება თავმოყრილი:
   ```sh
   yarn build-student-tests
   ```
2. სერვერის ტესტების დაბილდვა (მე-3 ნომრის მსგავსად ერთ დიდ ფაილებად):
   ```sh
   yarn build-server-tests
   ```
3. დავალებების დაზიპვა (საბოლოო ფორმატი, როგორც სტუდტებს ეგზავნებათ)
   ```sh
   yarn createZips
   ```

## publish homework (შეტანილი ცვლილებების გამოქვეყნება)
1. ტესტების დაბილდვა და remote-ად ატანა (ანუ საწყის index.html ფაილში სკრიპტის რა ლინკიც იყო ჩასმული მანდ ცვლილებებს შეიტანს)
   ```sh
   # commit your changes
   yarn publish-files
   ```
   Note: სანამ ამ ბრძანებას გამოიძახებ დარწმუნდი, რომ ყველა ცვლილება დაკომიტებულია.
2. საწყისი ფაილების დაბილდვა და remote-ად ატანა (გამოიყენე თუ იმ ფაილებში მოახდენ ცვლილებას, რაც სტუდენტებს ეგზავნებათ)
   ```sh
   yarn publish-files -- zip
   ```

## Github integration (Issues, branches, pull requests)
- Issues სექციაში New Issues გამოყენებით ვქმნით ახალ Issues
- ახალი issue-ს სახელი github-ზე იწყება აქედან ერთ-ერთით:
   - `FEATURE|BUGFIX|IMPROVEMENT|HOTFIX|QA`
- შექმნის შემდეგ github issue-ს გვერდზე მარჯვნივ `Development` სექციაში დააჭირე `create new branch`, დააკოპირე ბრენჩის სათაური
- ლოკალურად გაუშვი
   ```sh
   git pull
   git checkout --track origin/<დაკოპირებული სახელი>
   ```
- როცა პროგრესი მზად არის გადასახედად, ვხსნით pull request-ს (აქ საჭიროა hub, github-ის cli)
   ```shell
   hub pull-request -i <issue number>
   ```
- pull request-ს ვმერჯავთ squash commit-ით

