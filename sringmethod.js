// String method is a way to perform operations on a string
let a = `Asif`;
console.log(a.length); // it returns the length of the string
console.log(a.toUpperCase()); // it returns the string in uppercase
console.log(a.toLowerCase()); // it returns the string in lowercase
console.log(a.charAt(0)); // it returns the character at the given index
console.log(a.indexOf("s")); // it returns the index of the given character
console.log(a.lastIndexOf("s")); // it returns the index of the last occurrence of the given character
console.log(a.search("s")); // it returns the index of the given character
console.log(a.slice(0, 3)); // it returns the substring from the given index to the end of the string
console.log(a.split("")); // it returns an array of characters from the given string
console.log(a.replace("Asif", "Asif Khan")); // it replaces the given string with the given string
console.log(a.repeat(3)); // it repeats the given string the given number of times
console.log(a.trim()); // it removes the whitespace from the beginning and end of the string
console.log(a.trimStart()); // it removes the whitespace from the beginning of the string
console.log(a.trimEnd()); // it removes the whitespace from the end of the string
console.log(a.trimLeft()); // it removes the whitespace from the beginning of the string
console.log(a.trimRight()); // it removes the whitespace from the end of the string
console.log(a.trimStart().trimEnd()); // it removes the whitespace from the beginning and end of the string
console.log(a.startsWith("Asif")); // it returns true if the string starts with the given string
console.log(a.endsWith("Khan")); // it returns true if the string ends with the given string
console.log(a.includes("s")); // it returns true if the string contains the given string
console.log(a.concat("BCA")); // it concatenates the given string with the given string