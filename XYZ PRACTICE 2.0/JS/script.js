//1)adding 2 numbers
// const num1 = parseInt(prompt("enter a first number")) ;
// const num2 = parseInt(prompt("enter a second number")) ;

// document.write(sum = num1 + num2)  ;
// console.log(sum);

// 2) swapping 2 numbers
// let a = prompt("enter a value of a");
// let b =  prompt("enter a value of b");

// [a, b] = [b, a];

// console.log( `value of a ${a}`);
// console.log(`value of b ${b}`);

// document.write(`value of b ${b} `);
// document.write(`value of a ${a}`);

// 3)factoring Number
// program to find the factors of an integer

// take input
const num = prompt('Enter a positive number: ');

console.log(`The factors of ${num} is:`);

// looping through 1 to num
for(let i = 1; i <= num; i++) {

    // check if number is a factor
    if(num % i == 0) {
        console.log(i);
    }
}




// const inputBox = document.querySelector("input");
// const textBox = document.getElementById("text");

// inputBox.addEventListener("input", updateValue);

// function updateValue(e) {
//  var num = e.target.value;
//  var res = "";
//  count = 0;

//  if (num <= 0) {
//    textBox.textContent = "enter a positive value";
//  } 
//  else if (num % 2 == 0) {
//    num++;

//    while (count < 3) {
//      if (num % 2 == 0) {
//        res += " " + num + ","
//        num++;
//        count++;
//      } else {

//        num++;
//      }
//    }
//    textBox.textContent = res;
//  } else {
//     num++;
//    while (count < 3) {

//      if (num % 2 != 0) {
//        res += " " + num + ",";
//        num++;
//        count++;
//      } else {
//        num++;
//      }
//    }
//    textBox.textContent = res;
//  }
// }