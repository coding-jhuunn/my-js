function convertToRoman(num) {
  let resultString = "";
  while (num != 0) {
    if (num >= 1000) {
      resultString += "M";
      num -= 1000;
    } else if (num >= 900) {
      resultString += "CM";
      num -= 900;
    } else if (num >= 500) {
      resultString += "D";
      num -= 500;
    } else if (num >= 400) {
      resultString += "CD";
      num -= 400;
    } else if (num >= 100) {
      resultString += "C";
      num -= 100;
    } else if (num >= 90) {
      resultString += "XC";
      num -= 90;
    } else if (num >= 50) {
      resultString += "L";
      num -= 50;
    } else if (num >= 40) {
      resultString += "XL";
      num -= 40;
    } else if (num >= 10) {
      resultString += "X";
      num -= 10;
    } else if (num >= 9) {
      resultString += "IX";
      num -= 9;
    } else if (num >= 5) {
      resultString += "V";
      num -= 5;
    } else if (num >= 4) {
      resultString += "IV";
      num -= 4;
    } else {
      resultString += "I";
      num -= 1;
    }
  }
  return resultString;
}

console.log(convertToRoman(36));
