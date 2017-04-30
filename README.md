# linguacode-translator

## Description
**linguacode-translator** is a library which allows to translate text to code and the opposite.

## How to install

#### yarn
```sh
yarn add https://github.com/linguacode/linguacode-translator --save
```
#### npm
```sh
npm install https://github.com/linguacode/linguacode-translator --save
```

### Usage

```javascript
var translator = require('linguacode-translator');

var text = 'տպել("բարեւ")';

var textToCode = translator.toCode(text, 'hy'); //@output("բարեւ")
var textToCodeToText = translator.toText(textToCode, 'hy'); //'տպել("բարեւ")'
console.log(text == textToCodeToText) //true

var translation = translator.translate(textToCode, 'hy', 'ru'); //'вывести("բարեւ")'

```

## License

translator is [licensed under MIT](https://github.com/LinguaCode/linguacode-translator/blob/master/LICENSE).
