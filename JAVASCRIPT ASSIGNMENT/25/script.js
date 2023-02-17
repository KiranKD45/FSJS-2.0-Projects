let weight = document.querySelector("#weight");
let height = document.querySelector("#height");
let btn = document.querySelector("#btn");
let show = document.querySelector("#result");

btn.addEventListener('click',checkBMI);
height.addEventListener('input',clearShow)
weight.addEventListener('input',clearShow)


function checkBMI() {
    let bmi = (Number(weight.value)/(Number(height.value)*Number(height.value))).toFixed(1)
    console.log(bmi)
    if (bmi < 18.5) {
        result.innerHTML = "Underweight"
    }
    else if(bmi >= 18.5 && bmi <= 24.9) {
        result.innerHTML = "Normal weight"
    }
    else if (bmi >= 25 && bmi < 29.9) {
        result.innerHTML = "Overweight"
    }
    else {
        result.innerHTML = "Obese"
    }
}

function clearShow() {
    result.innerHTML = ""
}