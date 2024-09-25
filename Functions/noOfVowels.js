function returnsVowels(strs) {
  let count = 0;
  for (str of strs) {
    if (
      str.toLowerCase() === "a" ||
      str.toLowerCase() === "e" ||
      str.toLowerCase() === "i" ||
      str.toLowerCase() === "o" ||
      str.toLowerCase() === "u"
    ) {
      count++;
    }
  }

  return count;
}

console.log(returnsVowels("HelloSandesh"));

// using arrow function

const funct = (string) => {
  let count = 0;
  for (str of string) {
    if (
      str.toLowerCase() === "a" ||
      str.toLowerCase() === "e" ||
      str.toLowerCase() === "i" ||
      str.toLowerCase() === "o" ||
      str.toLowerCase() === "u"
    ) {
      count++;
    }
  }
  return count;
};

console.log(funct("Sandesh Prasai"));
