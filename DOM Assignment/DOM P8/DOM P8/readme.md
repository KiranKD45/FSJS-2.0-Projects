# Assignment 08

## Task 01

<!-- To select aside section --> 
const aside = document.querySelector(".new");


<!--Border to the  aside section  -->
aside.style.border = "5px solid red";


<!-- Create custom heading section  -->
const hrLine = document.createElement("hr");
const heading = document.createElement("h2");
const para = document.createElement("p");


<!-- Gives the class name to achive same appearence as of othe elements -->
hrLine.className = "hr-line";
heading.className = "new-head";
para.className = "new-p";


<!-- Text content added to  custom section-->
heading.textContent = "This is my custom heading";
para.textContent = "This is my custom para ";


<!-- Appended custom elments to aside section -->
aside.appendChild(hrLine);
aside.appendChild(heading);
aside.appendChild(para);


<!-- Scroll over y-axis added -->
aside.style.overflowY = "scroll";
aside.style.overflowX = "hidden";

## Task 02

### In task 2 i have to change background image to  white.
```
document.body.style.backgroundImage = "none";
```

## Task 03


<!-- Fetching the required elements from html file as given below -->
const navbar = document.querySelector(".navbar");
const logo = document.querySelector(".navbar-brand");
const button = document.querySelector(".navbar-toggler");
const navList = document.querySelector("#navbarTogglerDemo01");

<!-- Creating a new div element and appending button and navlist to it -->
const div  = document.createElement("div");
div.appendChild(button);
div.appendChild(navList);

<!-- appending div to main navbar -->
navbar.appendChild(div);

<!-- Adding event listner to the button -->
button.addEventListener("click",() => {
    
    <!-- this will bring logo on right position -->
    logo.style.position = "relative";
    logo.style.bottom = "87px";

    <!-- This will bring button in right size and position -->
    button.style.width = "max-content";
    button.style.marginLeft = "50px";
    button.style.marginBottom = "20px";
    
    <!-- This will make navlist visible  -->
    navList.removeAttribute("class","collapse");

    <!-- This will set all parameters as default -->
    button.addEventListener("click",() => {

        navList.setAttribute("class", "collapse");
        logo.style.position = "static";
    });
});    




