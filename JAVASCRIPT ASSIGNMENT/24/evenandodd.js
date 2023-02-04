let even = [];
let odd = [];

for(let i = 0; i<=100; i++){
    if(i&1){
        odd.push(i);
    }
    else{
        even.push(i);
    }
}
console.log("Even Numbers are: ",even);
console.log("Odd Numbers are: ",odd);