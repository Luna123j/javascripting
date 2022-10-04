/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function(s) {
  const obj1 = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }

  const obj2 = {
    "IV": 2,
    "IX": 2,
    "XL": 20,
    "XC": 20,
    "CD": 200,
    "CM": 200
  }
  let num = 0;

  for (let l in obj1) {
    let reg = new RegExp(l, 'g')
    let count = s.match(reg)
    if (count) {
      num += obj1[l] * count.length;
    }

  }

  for (let l in obj2) {
    let reg = new RegExp(l, 'g')
    let count = s.match(reg)
    if (count) {
      num -= obj2[l] * count.length;
    }
  }

  return num;
};