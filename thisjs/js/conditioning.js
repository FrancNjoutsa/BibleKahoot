// // in this  we are going to learn the condition statement in js
// // if
// for (let i = 1; i < 100; i++) {
//   if (i % 3 == 0) console.log("Fizz");
//   else if (i % 5 == 0) console.log("Buzz");
//   else if (i % 3 == 0 && i % 5 == 0) console.log("FizzBuzz");
//   else console.log("AHHHHR");
// }
// // ternary

// average = 50;
// let grade =
//   average >= 90
//     ? "A"
//     : average >= 80
//       ? "B"
//       : average >= 70
//         ? "c"
//         : average >= 60
//           ? "D"
//           : "F";
// console.log(grade);
// switch
let s1 = 95;
s2 = 90;
s3 = 98;
note = (s1 + s2 + s3) / 3;
console.log(note);
switch (true) {
  case note >= 90 && note <= 100:
    console.log("A");
    break;
  case note >= 80:
    console.log("B");
    break;
  case note >= 70:
    console.log("C");
    break;
  case note >= 60:
    console.log("D");
    break;
  default:
    console.log("F");
}
