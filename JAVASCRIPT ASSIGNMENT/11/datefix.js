let date = new Date();
let currentyear = date.getFullYear();
let currentmonth = date.getMonth()+1;
let currentDate = date.getDate();
let currentDay = date.getDay(); 
let currentHour = date.getHours(); 
let currentMinute = date.getMinutes();

console.log("date "+currentDate);
console.log("day "+currentDay);
console.log("hour "+currentHour);
console.log("minute "+currentMinute);
console.log("month "+currentmonth);
console.log("year "+currentyear);


let pastDate = new Date(1970,0);
let curDate = new Date();
let numOfSec = Math.floor((curDate - pastDate)/1000); 
console.log(`Total the numbers of seconds elapsed from January 1, 1970 to now is :`,numOfSec);
