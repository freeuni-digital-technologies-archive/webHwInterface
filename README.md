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
# commit your changes
yarn publish
```

publish homework starter files
```
yarn publish -- zip
```