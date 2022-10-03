const lengthOfLongestSubstring = function(s) {

  let result = 0;
  let arr = [''];
  let n = 0;
  let b = false;

  for (let i = 0; i < s.length; i++) {

    for (let k = 0; k < arr[n].length; k++) {
      if (arr[n][k] === s[i]) {
        b=true;
        n += 1;
        arr[n] = s[i];
        k = i;
      }
 }

    if (b) {
      b = false;
    } else {
      arr[n] += s[i];
    }

  }
  console.log(arr)
  for (let l = arr.length - 1; l >= 0; l--) {

    if (result < arr[l].length) {
      result = arr[l].length;
    }
  }

  return result;

};

console.log(lengthOfLongestSubstring('dvdf'))