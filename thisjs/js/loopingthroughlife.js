// // let myNumber=0;
// // while(myNumber<50){
// //     console.log(myNumber);
// //     myNumber++;
// // }
// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }
let name = "Kretzinger";
let counter = 0;
let myletter;
while (counter <= 9) {
  myletter = name[counter];
  console.log(myletter);
  if (counter === 6) {
    counter += 2;
    continue;
  }
  if (myletter === "g") break;
  counter++;
}
console.log(counter);
