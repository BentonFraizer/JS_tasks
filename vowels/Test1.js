const string = "Привет, сенсей! Не всё понимаю в коде, но вроде он работает";
function getVowels (string) {
   newString = string.replace(/[^аеёиоуыэюя]/ig, '');
   return newString
}
console.log(getVowels(string));