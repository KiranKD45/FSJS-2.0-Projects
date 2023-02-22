# Assignment 05

<!-- adding subscription button -->

const div = document.querySelectorAll(".nav-center div");

const subscription = document.createElement("a");
subscription.className = "subscription_btn";
subscription.innerText = "Pro Subscription";
subscription.style.padding = "12px";
subscription.style.backgroundColor = "#6C4AB6";
subscription.style.borderRadius = "5px"
subscription.style.color = "#fff";
subscription.style.fontSize = "20px";

div[div.length-1].appendChild(subscription);



<!-- chinese added in column -->

const parent_div = document.querySelector(".tags-container div");
const chinese = document.createElement("a");
chinese.setAttribute("href","#");
chinese.innerText = "Chinese(7)";
parent_div.appendChild(chinese);



<!-- 6th card adding -->

const recipe_gallery = document.querySelector(".recipe-gallery");

const card_6 = document.createElement("div");
card_6.className = "card";

const recipe_text = document.createElement("a");
recipe_text.className = "recipe-text";
recipe_text.setAttribute("href","#");

const image = document.createElement("img");
image.className = "recipe-img";
image.setAttribute("src","./img/recipe-1.jpeg");

const recipe_name = document.createElement("h5");
recipe_name.className = "recipe-name";
recipe_name.innerText = "6th card added";


recipe_text.appendChild(image);
recipe_text.appendChild(recipe_name);
card_6.appendChild(recipe_text);
recipe_gallery.appendChild(card_6);

const name1 = document.querySelector(".page-footer p a");
name1.innerText = "Kiran Madiwalar";