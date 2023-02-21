# Assignment 01
**Task 01**

### In this task the given file has contact in navabar and i have to change it to projects and hire me. i just removed contact in navbar and created two "li" element and inserted the text as 'projects' and 'hire me' and appended to the variable.
 
 ## output

![Task1](./firstAssignmentImage/task1Output.png)

```
const changing = document.querySelector("ul");
const chnager = document.createElement("li");
chnager.innerText = "Projects";
changing.appendChild(chnager);
changing.children[2].remove();
const chnager2 = document.createElement("li");
chnager2.innerText = "Hire Me";
changing.appendChild(chnager2);
```


**Task 02**

### In this task the output file has a placeholder of "serach my projects" in place of 'search' so i changed that by using setattribute and changed the placeholder.

 ## output

![Task2](./firstAssignmentImage/task2Output.png)

```
const ass2 = document.querySelector("ul");
ass2.children[2].remove();
const add = document.createElement("li");
add.innerText = "Projects";
ass2.append(add);
const search = document.querySelector("input");
const set = search.setAttribute("placeholder", "Search My Projects");
```

**Task 03**

### In this task we have the paragraph in that we have to change National and International Client to 'iNeuron Intelligence Pvt Ltd.' i done this by targetting lastelementchild and inserted text to it.

 ## output

![Task3](./firstAssignmentImage/task3Output.png)

``` 
const para = document.querySelector("p");
const change = para.lastElementChild;
change.innerText = "iNeuron Intelligence Pvt Ltd.";
```

**Task 04**

### in this task i have to change the image to hitesh sir picture so i done that by targetting image and giving a source with URL.

 ## output

![Task4](./firstAssignmentImage/task4Output.png)

```
const ass2 = document.querySelector("ul");
ass2.children[2].remove();
const add = document.createElement("li");
add.innerText = "Projects";
ass2.append(add);
const iMg = document.querySelector("img");
iMg.src = "https://hiteshchoudhary.com/static/a8d73d1aac4c79e9bb689640e6090367/2eaab/person-image.jpg"
```

**Tak 05**

### In this task i have to add a button in hero section buttons with a text 'support me' i done that by creating button and append to the hero buttons section. 

 ## output

![Task5](./firstAssignmentImage/task5Output.png)

```
const last = document.querySelector(".hero-right-section-btns");
const creat = document.createElement("button");
creat.innerText = "Support Me";
last.append(creat);
```
# Assignment 02

**Task 01**
### first i selected class with h3 tag and coverted it to an array next using arrow function with the method 'map' i changed the color. 

## output

![Task1](./secondAssignmentImage/task1Output.png)

```
const h3_background = document.querySelectorAll(".accordian h3"); 
let bg_color = [...h3_background];
bg_color.map((ele)=> ele.style.backgroundColor = "#DADAF8");
```


**Task 02**

### first i selected a main div and created a new element 'skills' with a class of accordian  also with the element 'p' and inserted text and append to main h3.

## output

![Task 02](./secondAssignmentImage/task2Output.png)

```
const wrapper = document.querySelector(".accordian-wrapper");
const skills = document.createElement("div");
skills.setAttribute("class","accordian");

const skill_h3 = document.createElement("h3");
skill_h3.innerText = "Skills";
skills.appendChild(skill_h3);

const skills_p = document.createElement("p");
skills_p.innerText = "I posses a very good command over the Full Stack Development technologies like MERN which can be seen in my work over the Github.";
skills.appendChild(skills_p);

wrapper.appendChild(skills);
```

# Assignment 03

**Task 01**

## In this task the all form elements has to be replaced by some text so i done it by using "set attribute" element and targeted by using class and with 'nth child'

## output

![Task 1](./thirdAssignmentImage/task1Output.png)


```
<!-- left section -->
document.querySelector(".mainLeftDetails :nth-child(1)").setAttribute("placeholder","FSJS 2.0");

document.querySelector(".mainLeftDetails :nth-child(2)").setAttribute("placeholder","fsjs@ineuron.ai");

document.querySelector(".mainLeftDetails :nth-child(3)").setAttribute("placeholder","Hello World");

<!-- right section -->
document.querySelector(".mainRight form :nth-child(1)").setAttribute("placeholder","FSJS 2.0");

document.querySelector(".mainRight form :nth-child(2)").setAttribute("placeholder","fsjs@ineuron.ai");

document.querySelector(".mainRight form :nth-child(3)").setAttribute("placeholder","Hello World");

```

