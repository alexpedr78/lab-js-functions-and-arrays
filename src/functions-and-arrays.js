// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
  if (num1 < num2) {
    return num2;
  } else if (num1 > num2) {
    return num1;
  } else {
    return num1 || num2;
  }
}

// Iteration 2 | Find the Longest Word
const words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
];

function findLongestWord(array) {
  let longestWord = "";
  //   why not array === '0' return '0'
  if (array.length === 0) {
    return 0;
  } else if (array.length === 1) {
    return array[0];
  }
  for (const element of array) {
    if (element.length > longestWord.length) {
      longestWord = element;
    } else if (element.length === longestWord.length) {
      longestWord = longestWord;
    }
  }
  return longestWord;
}

// Iteration 3 | Sum Numbers
const arrayOfNumbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arrayOfNumbers) {
  let sum = 0;
  if (arrayOfNumbers.length === 0) {
    return 0;
  } else if (arrayOfNumbers.length === 1) {
    return arrayOfNumbers[0];
  }
  for (let numm of arrayOfNumbers) {
    sum += numm;
  }
  return sum;
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(array) {
  if (array.length === 0) {
    return 0;
  } else if (array.length === 1) {
    return array[0];
  }

  let average = sumNumbers(array) / array.length;
  return average;
}

// Iteration 5 | Find Elements
const words2 = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];

function doesWordExist(arrayOfWord, ww) {
  if (arrayOfWord.length === 0) {
    return null;
  }
  for (let elem of arrayOfWord) {
    if (elem === ww) {
      return true;
    }
  }
  return false;
}
