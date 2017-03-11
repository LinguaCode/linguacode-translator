var translator = require('..');

var tests = [{
  name: 'simple function',
  text: 'տպել("բարեւ")',
  language: 'hy'
}, {
  name: 'with content',
  text: 'եթե (4 > 2)\n    տպել("բարեւ")',
  language: 'hy'
}];

describe('tests', function () {
  tests.forEach(function (test) {
    it(test.name, function (done) {

      var text = test.text;
      console.log('text = "' + text + '"');

      var textToCode = translator.toCode(text, 'hy');
      console.log('textToCode = "' + textToCode + '"'); //@output("բարեւ")

      var textToCodeToText = translator.toText(textToCode, 'hy');
      console.log('textToCodeToText = "' + textToCodeToText + '"\n'); //'տպել("բարեւ")'

      if (text == textToCodeToText) {
        return done();
      }
      done(new Error('source text doesn\'t equal to reconverted text'));
    });
  });
});

describe('translator', function () {
  it("hy -> en", function (done) {

    var text = 'տպել("բարեւ")';
    console.log('hy: "' + text + '"');

    var translation = translator.translate(text, 'hy', 'ru');
    console.log('ru: "' + translation + '"');

    var expected = 'вывести("բարեւ")';

    if (translation == expected) {
      return done();
    }
    done(new Error('\nExpected: ' + expected + '\nResult:   ' + translation));
  });
});