// case1 without ethiopia
console.log("Case 1\n");
let countries = ['India', 'Pakistan', 'Australia', 'USA', 'England'];

if (!(countries.includes('Ethiopia'))){
    countries.push('ETHIOPIA');
    console.log("'ETHIOPIA' is added in countries list");
    console.log("Countries List: ",countries);
}
else{
    console.log("'ETHIOPIA' is already present in countries list");
}

//case 2 with ethiopia
console.log("\nCase 2\n");
let countries2 = ['India', 'Pakistan', 'Australia', 'USA', 'England','Ethiopia'];

if (!(countries2.includes('Ethiopia'))) {
    countries2.push('ETHIOPIA');
    console.log("'ETHIOPIA' is added in countries list");
    console.log("Countries2 List: ", countries2);
}
else {
    console.log("'ETHIOPIA' is already present in countries list");
}