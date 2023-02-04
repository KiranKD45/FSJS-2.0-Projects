function checkPrime(num) {
    let flag = true;
    for(let i = 2; i <= Math.floor(Math.sqrt(num)); i++){
        if(num%i==0){
            flag = false;
            break;
        }
    }
    return flag;
}

document.write("<h1> All prime number between 0 to 100 :</h1>");

for(let i = 0; i <= 100; i++){
    if (checkPrime(i)) {
        document.write(`<span style="font-size:25px;">${i} </span>`);
    }
}