const translator = require('..');

const tests = [{
  name: 'simple function',
  text: 'տպել("բարեւ")',
  language: 'hy'
}, {
  name: 'with content',
  text: 'եթե (4 > 2)\n    տպել("բարեւ")',
  language: 'hy'
}];

describe('tests', () => {
  tests.forEach((test) => {
    it(test.name, (done) => {

      const text = test.text;
      console.log(`text = "${text}"`);

      const textToCode = translator.toCode(text, 'hy');
      console.log(`textToCode = "${textToCode}"`); //@output("բարեւ")

      const textToCodeToText = translator.toText(textToCode, 'hy');
      console.log(`textToCodeToText = "${textToCodeToText}"\n`); //'տպել("բարեւ")'

      if (text == textToCodeToText) {
        return done();
      }
      done(new Error('source text doesn\'t equal to reconverted text'));
    });
  });
});