# Assignment 07

## Task 01

<!-- This will fetch all languages -->
const all_lang_name = document.querySelectorAll(".main__languages a");

<!-- This will convert node list of all languages to array -->
const all_lang_arr = [...all_lang_name];

<!-- This will remove all languages with 2.0 string -->
all_lang_arr.forEach((ele) => {
   return ele.textContent.includes("2.0")? ele.style.display = "none":``;
});


## Task 02

<!-- This will fetch and update input attributes placeholder -->
const input = document.querySelector(".main__form-input");
input.removeAttribute("disabled");
input.setAttribute("placeholder","iNeuron");

<!-- This will enables submit button -->
const submit = document.querySelector(".main__form-btn");
submit.removeAttribute("disabled");


<!-- This is adding submit functionality to form and preventDefault method to bring back all languages -->
const form = document.querySelector("form");
form.addEventListener("submit",(e)=>{
   for(let ele of all_lang_arr){
      if (ele.textContent.includes("2.0")) {
         ele.style.display = "inline";
      }
   }
   input.value  = "";
   e.preventDefault();

});
