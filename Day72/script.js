console.log("HashMap Data Structure");

// First Hashing Function
// function hash(name) {
//   return name.charAt(0);
// }

// function hashFull(name, surname) {
//   return name.charAt(0) + surname.charAt(0);
// }

// function stringToNumber(string) {
//   let hashCode = 0;
//   for (let i = 0; i < string.length; i++) {
//     hashCode += string.charCodeAt(i);
//   }
//   return hashCode;
// }

function stringToNumber(string) {
  let hashCode = 0;

  const primeNumber = 31;
  for (let i = 0; i < string.length; i++) {
    hashCode = primeNumber * hashCode + string.charCodeAt(i);
  }

  return hashCode;
}
function hash(name, surname) {
  return stringToNumber(name) + stringToNumber(surname);
}
