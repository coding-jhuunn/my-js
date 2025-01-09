function palindrome(str) {
  let replaceStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  let result = replaceStr.split("").reverse().join("");
  if (result === replaceStr) {
    return true;
  }
  return false;
}

console.log(palindrome("eye"));
console.log(palindrome("A man, a plan, a canal. Panama"));
console.log(palindrome("1234"));
console.log(palindrome("_eye"));
console.log(palindrome("race car"));
console.log(palindrome("five|_/|four"));
console.log(palindrome("My age is 0, 0 si ega ym."));
