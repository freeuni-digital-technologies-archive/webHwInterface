# webHwInterface

```sh
yarn install
yarn build
```

## development
დეველოპმენტისთვის მხოლოდ საჭიროა რომ დროებით სკრიპტ თეგში იყოს
```html
<script type="module" src="../../src/main.js"></script>
```
ამის შემდეგ `yarn start` ბრძანებით ცვლილებები ავტომატურად აისახება ლოკალჰოსტის მისამართზე

```sh
yarn start
```

## to push changes
```sh
git checkout dist
git merge master
yarn build
git add -f docs
git commit
git push
git checkout master
```

