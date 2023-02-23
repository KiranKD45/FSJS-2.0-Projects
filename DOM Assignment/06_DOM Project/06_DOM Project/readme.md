# Assignment 06

## Task 01
```
const logo = document.querySelector(".logo");
logo.setAttribute("src","./assets/ineuron-logo.png");
```

## Task 02

```
<!-- This code part will change the price value -->

const app_price = document.querySelector(".app_price span");
app_price.textContent = "$10";

<!-- selects the footer section -->

const footer_social = document.querySelector(".footer_social");


<!-- This will add the new linkedin icon in footer section -->

const footer_social_ico = document.createElement("div");
footer_social_ico.className = "footer_social_ico";
footer_social_ico.innerHTML = ` <i class="fa-brands fa-linkedin"></i> `;

footer_social.appendChild(footer_social_ico);
 ```