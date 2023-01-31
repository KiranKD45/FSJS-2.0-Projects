console.log("`4 > 3` result  `true`.  Answer is: ", 4 > 3);
console.log("`4 >= 3` result  `true`.  Answer is: ", 4 >= 3);
console.log("`4 < 3` result  `false`.  Answer is: ", 4 < 3);
console.log("`4 <= 3` result  `false`.  Answer is: ", 4 <= 3);
console.log("`4 == 4` result  `true`.  Answer is: ", 4 == 4);
console.log("`4 === 4` result  `true`.  Answer is: ", 4 === 4);
console.log("`4 != 4` result  `false`.  Answer is: ", 4 != 4);
console.log("`4 !== 4` result  `false`.  Answer is: ", 4 !== 4);
console.log("`4 != '4'` result `false`.  Answer is: ", 4 != '4');
console.log("`4 == '4'` result  `true`.  Answer is: ", 4 == '4');
console.log("`4 === '4'` result `false`.  Answer is: ", 4 === '4');


let strPython = "python";
let strJargon = "jargon";

let lengthOfPython = strPython.length;
let lengthOfJargon = strJargon.length;

//for true value


// if(strPython.length === strJargon.length){
//     console.log("Length of 'python' and 'jargon' is Equal");
// }
// else {
//     console.log("Length of 'python' and 'jargon' is not Equal");
// }


// for falsy value

if(`${lengthOfPython}` === lengthOfJargon){
    console.log("Length of 'python' and 'jargon' is Equal");
}
else {
    console.log("Length of 'python' and 'jargon' is not Equal");
}