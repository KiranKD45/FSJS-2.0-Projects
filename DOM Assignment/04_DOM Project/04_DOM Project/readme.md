# Assignment 04 

### In this assignment first have to change the card colors and has to change the width.

```
const barbarian = document.querySelector(".clash-card__unit-stats--barbarian");
barbarian.style.backgroundColor = "#F2CD5C";

const archer = document.querySelector(".clash-card__unit-stats--archer");
archer.style.backgroundColor = "#F56EB3";

const giant = document.querySelector(".clash-card__unit-stats--giant");
giant.style.backgroundColor = "#FF8B13";

const goblin = document.querySelector(".clash-card__unit-stats--goblin");
goblin.style.backgroundColor = "#82CD47";

const wizard = document.querySelector(".clash-card__unit-stats--wizard");
wizard.style.backgroundColor = "#39B5E0";

const stat = document.querySelectorAll(".stat");
const stat_value = document.querySelectorAll(".stat-value");

const stat_arr = [...stat];
const stat_value_arr = [...stat_value];

stat_arr.map((ele)=> ele.style.color = "white");
stat_value_arr.map((ele)=> ele.style.color = "white");

```