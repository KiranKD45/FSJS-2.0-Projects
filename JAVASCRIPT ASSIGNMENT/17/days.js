let takeDate = prompt("Enter the year and month (YYYY,MM)");
let splitDate = takeDate.split(',');

let year = Number(splitDate[0]);
let month = Number(splitDate[1]);

let dte = new Date(year, month,0);
let numOfDays = dte.getDate();

document.write("Number of days in " + month + "th month of ," + year + " is: ", numOfDays);