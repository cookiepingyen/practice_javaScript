// 編號：CANDY-015
// 程式語言：JavaScript
// 題目：把原本的字串拆解成 2 個字元一組，若不足 2 個字則補上底線
// 範例：
//      "abcdef" -> ['ab', 'cd', 'ef']
//      "abcdefg" -> ['ab', 'cd', 'ef', 'g_']

function splitString(str) {
  // 實作寫在這裡
  result = [];
  for (let i = 0; i <= str.length - 2; i = i + 2) {
    result.push(str.slice(i, i + 2));
  }
  if (str.length % 2 == 1) {
    result.push(str.slice(-1) + "_");
  }
  return result;
}

console.log(splitString("abcdef")); // ["ab", "cd", "ef"]
console.log(splitString("abcdefg")); // ["ab", "cd", "ef", "g_"]
console.log(splitString("")); // []
