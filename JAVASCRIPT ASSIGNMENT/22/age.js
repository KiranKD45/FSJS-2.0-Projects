const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25,24];


//Sort the array and find the min and max age

const sortedAges = ages.sort();
console.log("The sorted array is :", sortedAges);

const min = sortedAges[0];
const max = sortedAges[(sortedAges.length)-1];

console.log(`The min value is ${min} and the max value is ${max} .`);




//Find the median age(one middle item or two middle items divided by two)
const median = Math.floor((sortedAges.length)/2);

if(median % 2 != 0){
    const result1 = (sortedAges[median] + sortedAges[median+1]) / 2;
    console.log(`The median is ${result1} .`);
}
else{
    const result2 = (sortedAges[median] + sortedAges[median+1]) / 2;
    console.log(`The median is ${result2} .`);
}



//Find the average age(all items divided by number of items)
let sum =0;
for(let i = 0; i <= ((sortedAges.length)-1) ; i++){
    sum += sortedAges[i];
}

let average = sum / (sortedAges.length);
console.log("The average of all is : ",average);



//Find the range of the ages(max minus min)
let range = (max - min);
console.log(`The range is ${range}`);



//Compare the value of (min - average) and (max - average), use abs() method

let m = Math.abs(min - average);
let M = Math.abs(max - average);

if (m >= M) {
    console.log(`After comparison by  use of abs() we can say that m is greater than M .`);
} else {
    console.log(`After comparison by  use of abs() we can say that M is greater than m .`);   
}