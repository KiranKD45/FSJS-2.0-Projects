**Task 01**

### In this task the given file has contact in navabar and i have to change it to projects and hire me. i just removed contact in navbar and created two "li" element and inserted the text as projects and hire me and appended to the variable.
 
 ## output

![Task1](./outputs/task1Output.png)

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

### In this task the output file has a placeholder of "serach my projects" in place of search so i changed that by using setattribute and changed the placeholder.

 ## output

![Task2](./outputs/task2Output.png)

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

![Task3](./outputs/task3Output.png)

``` 
const para = document.querySelector("p");
const change = para.lastElementChild;
change.innerText = "iNeuron Intelligence Pvt Ltd.";
```

**Task 04**

### in this task i have to change the image to hitesh sir picture so i done that by targetting image and giving a source with URL.

 ## output

![Task4](./outputs/task4Output.png)

```
const ass2 = document.querySelector("ul");
ass2.children[2].remove();
const add = document.createElement("li");
add.innerText = "Projects";
ass2.append(add);
const iMg = document.querySelector("img");
iMg.src = "https://hiteshchoudhary.com/static/a8d73d1aac4c79e9bb689640e6090367/2eaab/person-image.jpg"
```

**Task 05**

### In this task i have to add a button in hero section buttons with a text 'support me' i done that by creating button and append to the hero buttons section. 

 ## output

![Task5](./outputs/task5Output.png)

```
const last = document.querySelector(".hero-right-section-btns");
const creat = document.createElement("button");
creat.innerText = "Support Me";
last.append(creat);
```