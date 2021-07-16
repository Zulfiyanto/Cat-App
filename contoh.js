// let hasil = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let hasil2 = [];
// let index = 0;

// // for (let char of hasil) {
// //   let last = hasil2[hasil2.length - 1];
// //   if (!last || last.length === 4) {
// //     hasil2.push([char]);
// //   } else {
// //     last.push(char);
// //   }
// // }

// while (index < hasil.length) {
//   hasil2.push(hasil.slice(index, index + 4));
//   index += 4;
// }
// console.log(hasil2);

// let contoh = 'rail safety';
// let contoh2 = 'fairy tale';
// const anagrams = (str1, str2) => {
//   const filter = str => {
//     return str.replace(/[^\w]/g, '').split('').sort().join('');
//   };

//   if (filter(str1) === filter(str2)) {
//     return console.log('sama');
//   } else {
//     return console.log('tidak sama');
//   }
// };

// anagrams(contoh, contoh2);

function capitalize(str) {
  let hasil = [];
  for (let char of str.split(' ')) {
    hasil.push(char[0] + char.slice(1));
  }
  return hasil;
}

console.log(capitalize('nama saya fikar'));

// let str = 'nama saya fikar';
// let chars = {};
// let max = 0;
// let maxChar = '';

// for (let char of str) {
//   chars[char] ? chars[char]++ : (chars[char] = 1);
// }

// for (let char in chars) {
//   if (chars[char] > max) {
//     max = chars[char];
//     maxChar = char;
//   }
// }

// console.log(maxChar);
