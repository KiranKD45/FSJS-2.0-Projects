let date = new Date();

let year = date.getFullYear();
let month = date.getMonth()+ 1;
let newdate = date.getDate();
let hour = date.getHours();
let min = date.getMinutes();

let Format1 = year + "-" + month + "-" + newdate + " " + hour + ":" + min;
let Format2 = newdate + "-" + month + "-" + year + " " + hour + ":" + min;
let Format3 = newdate + "/" + month + "/" + year + " " + hour + ":" + min;

console.log("Format 1 :" + Format1);
console.log("Format 2 :" + Format2);
console.log("Format 3 :" + Format3);