var check = require('./src/check');
var tool = require('./src/tool');
var TRANSLATION = require('linguacode-translations');

var toCode = exports.toCode = (data = '', lng) => {
  let re, reStr;
  return data
    .split('\n')
    .map(line => {
      for (let i = 0; i < TRANSLATION[lng].length; i++) {
        const instance = TRANSLATION[lng][i];

        const definition = instance.definition;
        re = new RegExp(`[^@](${definition})|^${definition}`, 'ig');
        while ((reStr = re.exec(line)) !== null) { //in line
          const index = reStr[1] ? reStr.index + 1 : reStr.index;
          const value = reStr[1] ? reStr[1] : reStr[0];

          const isPartOfCode = check.isPartOfCode(line, index);
          const isPartOfCommand = check.isPartOfCommand(line, value, index);

          if (isPartOfCode && !isPartOfCommand) {
            const toReplace = instance.command.replace(/\\/g, '');

            const firstPartEndIndex = index;
            const secondPartBeginIndex = index + value.length;
            line = tool.partitionReplace(line, toReplace, firstPartEndIndex, secondPartBeginIndex);
          }
        }
      }

      return line;
    })
    .join('\n');
};

var toText = exports.toText = (data = '', lng) => {
  let re, reStr;
  return data
    .split('\n')
    .map(line => {
      line = ' ' + line + ' ';
      for (let i = 0; i < TRANSLATION[lng].length; i++) {
        const instance = TRANSLATION[lng][i];

        const command = instance.command;
        re = new RegExp(`(${command})[ (]`, 'ig');
        while ((reStr = re.exec(line)) !== null) { //in line
          const index = reStr.index;
          const value = reStr[1];

          const isPartOfCode = check.isPartOfCode(line, index);
          const isPartOfCommand = check.isPartOfCommand(line, value, index);

          if (isPartOfCode && !isPartOfCommand) {
            const toReplace = instance.definition.split('|')[0];

            const firstPartEndIndex = index;
            const secondPartBeginIndex = index + value.length;
            line = tool.partitionReplace(line, toReplace, firstPartEndIndex, secondPartBeginIndex);
          }
        }
      }

      return line.slice(1,-1);
    })
    .join('\n');
};

exports.translate = (source, languageInitial, languageDestination) => {
  const code = toCode(source, languageInitial);
  const text = toText(code, languageDestination);

  return text;
};