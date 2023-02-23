# Assignment 09

## Task 01

### In this task we have to change heading color, so i done it by targetting classes of heading and using 'style' changed the color.

```
const heading  = document.querySelector(".caption .title");
heading.style.color = "#D61355";
```

## Task 02

### In this task we have to get red color on click, i done it by using ' addeventlistener ' and used arrow function to change the color to 'red'.


```
const over = document.querySelector(".caption button")
over.addEventListener("click", ()=>{ over.style.backgroundColor = "red"});
```