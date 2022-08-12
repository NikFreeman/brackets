module.exports = function check(str, bracketsConfig) {
  // your solution
  if (str.length % 2 !== 0) {
    return false;
  }
  const bracketsOpen = bracketsConfig.reduce(function (target, key) {
    target[key[0]] = key[1];
    return target;
  }, {});
  const bracketsClose = {};
  for (key in bracketsOpen) {
    bracketsClose[bracketsOpen[key]] = key;
  }

  const checkArray = str.split("");
  let checkStack = [];
  for (item in checkArray) {
    if (bracketsOpen[checkArray[item]]) {
      if (
        checkStack[checkStack.length - 1] === bracketsOpen[checkArray[item]]
      ) {
        checkStack.pop();
      } else {
        checkStack.push(checkArray[item]);
      }
    } else {
      if (bracketsClose[checkArray[item]]) {
        if (
          checkStack[checkStack.length - 1] === bracketsClose[checkArray[item]]
        ) {
          checkStack.pop();
        } else {
          return false;
        }
      }
    }
  }
  return checkStack.length === 0;
};
// const config6 = [
//   ["1", "2"],
//   ["3", "4"],
//   ["5", "6"],
//   ["7", "7"],
//   ["8", "8"],
// ];
// console.log(check("11111556622222556612", config6));
