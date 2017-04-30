[![Build Status](https://travis-ci.org/LinguaCode/linguacode-translator.svg?branch=master)](https://travis-ci.org/LinguaCode/linguacode-translator)
[![Coverage Status](https://coveralls.io/repos/github/LinguaCode/linguacode-translator/badge.svg?branch=master&v=6)](https://coveralls.io/github/LinguaCode/linguacode-translator?branch=master)
[![Code Climate](https://codeclimate.com/github/LinguaCode/linguacode-translator/badges/gpa.svg?v=1)](https://codeclimate.com/github/LinguaCode/linguacode-translator)
[![Dependency Status](https://david-dm.org/LinguaCode/linguacode-translator.svg)](https://david-dm.org/LinguaCode/linguacode-translator)
[![devDependency Status](https://david-dm.org/LinguaCode/linguacode-translator/dev-status.svg)](https://david-dm.org/LinguaCode/linguacode-translator#info=devDependencies)
[![License](http://img.shields.io/:license-gpl3-blue.svg?style=flat-square)](http://www.gnu.org/licenses/gpl-3.0.html)

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
