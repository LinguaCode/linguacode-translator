exports.partitionReplace = (sourceCode, toReplace, firstPartEndIndex, secondPartBeginIndex) => {
  const firstPart = sourceCode.substring(0, firstPartEndIndex);
  const secondPart = sourceCode.substring(secondPartBeginIndex);
  const fullReplacement = `${firstPart}${toReplace}${secondPart}`;

  return fullReplacement;
};