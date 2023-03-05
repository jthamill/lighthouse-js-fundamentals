// Challenge
// We will be writing a program that prints the numbers from 100 to 200 to the console, with three exceptions:

// If the number is a multiple of 3, print the string "Loopy" instead of the number.
// If the number is a multiple of 4, print the string "Lighthouse" instead of the number.
// If the number is a multiple of both 3 and 4, print the string "LoopyLighthouse" instead of the number.
// By print, we are referring to console.log.


//nice job
function loopyLighthouse(range, multiples, words) {
  for (let n = range[0]; n <= range[range.length - 1]; n++) {
    if (n % multiples[0] === 0 && n % multiples[1] === 0) {
      console.log(words[0]+" "+words[1]);
    }
    else if (n % multiples[0] === 0) {
      console.log(words[0]);
    }
    else if (n % multiples[1] === 0) {
      console.log(words[1]);
    }
    else {
      console.log(n);
    }
  }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);