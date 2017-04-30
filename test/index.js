var translator = require('..');

var tests = [{
  name: 'simple function',
  text: 'ելք("բարեւ")',
  language: 'hy-AM'
}, {
  name: 'with content',
  text: 'եթե (4 > 2)\n    ելք("բարեւ")',
  language: 'hy-AM'
}];

describe('tests', function () {
  tests.forEach(function (test) {
    it(test.name, function (done) {

      var text = test.text;
      console.log('text = "' + text + '"');

      var textToCode = translator.toCode(text, 'hy-AM');
      console.log('textToCode = "' + textToCode + '"'); //@output("բարեւ")

      var textToCodeToText = translator.toText(textToCode, 'hy-AM');
      console.log('textToCodeToText = "' + textToCodeToText + '"\n'); //'ելք("բարեւ")'

      if (text === textToCodeToText) {
        return done();
      }
      done(new Error('source text doesn\'t equal to reconverted text'));
    });
  });
});

describe('translator', function () {
  it("hy-AM -> en", function (done) {

    var text = 'ելք("բարեւ")';
    console.log('hy: "' + text + '"');

    var translation = translator.translate(text, 'hy-AM', 'ru');
    console.log('ru: "' + translation + '"');

    var expected = 'вывод("բարեւ")';

    if (translation === expected) {
      return done();
    }
    done(new Error('\nExpected: ' + expected + '\nResult:   ' + translation));
  });
});