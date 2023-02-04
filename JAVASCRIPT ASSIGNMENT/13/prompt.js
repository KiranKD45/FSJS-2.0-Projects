
// Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

let age = prompt("Enter Your Age");

if(age>=18) {
    alert('You are old enough to drive'); 
}
else{
    alert(`Wait for ${18 - age} years you become adult`);
}
