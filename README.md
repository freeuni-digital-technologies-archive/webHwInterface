# webHwInterface

```sh
yarn install
```

## development
დეველოპმენტისთვის მხოლოდ საჭიროა რომ დროებით სკრიპტ თეგში იყოს
```html
<script type="module" src="./hw<X>.js"></script>
```
ამის შემდეგ `yarn start` ბრძანებით ცვლილებები ავტომატურად აისახება ლოკალჰოსტის მისამართზე

```sh
yarn start -- homeworks/hw<X>/index_solution.html
```
## publish homework
```sh
git checkout dist
git merge hw-branch-name # აქტიური დავალება თუა  ჯერ მასტერში დამერჯილი შეიძლება არ იყოს
./scripts/createZips
git add -f docs
git commit
git push
git checkout master
```

## to push changes
```sh
git checkout dist
git merge hw-branch-name # აქტიური დავალება თუა  ჯერ მასტერში დამერჯილი შეიძლება არ იყოს
yarn build-student-tests
git add -f docs
git commit
git push
git checkout master
```

