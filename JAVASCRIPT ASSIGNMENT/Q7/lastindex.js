let array = ["pw skills","physics", "google","facebook","insta", "youtube","microsoft","telegram","pw skills"];
let firstOccurrence = array.lastIndexOf("pw skills",-(array.length)+1);
let lastOccurrence = array.lastIndexOf("pw skills");

console.log("First Occurence of 'pw skills' in is(index): ", firstOccurrence);
console.log("Last Occurence of 'pw skills' in  is(index): ", lastOccurrence);