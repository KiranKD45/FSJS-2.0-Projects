let num = Number(prompt("Enter a number :"));
let flag = false;

for (let index = 2; index < Math.floor(Math.sqrt(num)); index++) {
    if (num % index == 0) {
        flag = true;
        break;
    }
}
if (flag) {
    document.write(`${num} is not a prime number`);
}
else {
    document.write(`${num} is a prime number`);
}