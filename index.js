var check = require('./src/check');
var tool = require('./src/tool');
var TRANSLATION = require('linguacode-translations');

var toCode = exports.toCode = function (data, lng) {
  data = data || '';

  var re, reStr;
  return data
    .split('\n')
    .map(function (line) {
      for (var i = 0; i < TRANSLATION[lng].length; i++) {
        var instance = TRANSLATION[lng][i];

        var definition = instance.definition;
        re = new RegExp('[^@](' + definition + ')|^' + definition, 'ig');
        while ((reStr = re.exec(line)) !== null) { //in line
          var index = reStr[1] ? reStr.index + 1 : reStr.index;
          var value = reStr[1] ? reStr[1] : reStr[0];

          var isPartOfCode = check.isPartOfCode(line, index);
          var isPartOfCommand = check.isPartOfCommand(line, value, index);

          if (isPartOfCode && !isPartOfCommand) {
            var toReplace = instance.command.replace(/\\/g, '');

            var firstPartEndIndex = index;
            var secondPartBeginIndex = index + value.length;
            line = tool.partitionReplace(line, toReplace, firstPartEndIndex, secondPartBeginIndex);
          }
        }
      }

      return line;
    })
    .join('\n');
};

var toText = exports.toText = function (data, lng) {
  data = data || '';

  var re, reStr;
  return data
    .split('\n')
    .map(function (line) {
      line = ' ' + line + ' ';
      for (var i = 0; i < TRANSLATION[lng].length; i++) {
        var instance = TRANSLATION[lng][i];

        var command = instance.command;
        re = new RegExp(command, 'ig');
        while ((reStr = re.exec(line)) !== null) { //in line
          var index = reStr.index;
          var value = reStr[0];

          var isPartOfCode = check.isPartOfCode(line, index);
          var isPartOfCommand = check.isPartOfCommand(line, value, index);

          if (isPartOfCode && !isPartOfCommand) {
            var toReplace = instance.definition.split('|')[0];

            var firstPartEndIndex = index;
            var secondPartBeginIndex = index + value.length;
            line = tool.partitionReplace(line, toReplace, firstPartEndIndex, secondPartBeginIndex);
          }
        }
      }

      return line.slice(1, -1);
    })
    .join('\n');
};

exports.translate = function (source, languageInitial, languageDestination) {
  var code = toCode(source, languageInitial);
  var text = toText(code, languageDestination);

  return text;
};