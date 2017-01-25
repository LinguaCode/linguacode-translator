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
const translator = require('linguacode-translator');

const text = 'տպել("բարեւ")';
const textToCode = translator.toCode(text, 'hy'); //@output("բարեւ")
const textToCodeToText = translator.toText(textToCode, 'hy'); //'տպել("բարեւ")'

console.log(text == textToCodeToText) //true
```

##License
translator is [licensed under MIT](https://github.com/otanim/translator/blob/master/LICENSE).
