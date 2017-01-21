const check = require('./src/check');
const tool = require('./src/tool');
const TRANSLATION = require('linguacode-translations');

exports.toCode = (data, lng) => {
  let re, reStr;
  return data
    .split('\n')
    .map(line => {
      for (let i = 0; i < TRANSLATION[lng].length; i++) {
        const instance = TRANSLATION[lng][i];

        const definition = instance.definition;
        re = new RegExp(`[^#](${definition})|^${definition}`, 'ig');
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