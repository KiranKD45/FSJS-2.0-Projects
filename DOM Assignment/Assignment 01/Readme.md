#ass 01

```
const changing = 
document.querySelector("ul");
const chnager = document.createElement("li");
chnager.innerText = "Projects";
changing.appendChild(chnager);
changing.children[2].remove();
const chnager2 = document.createElement("li");
chnager2.innerText = "Hire Me";
changing.appendChild(chnager2);
```


#ASs 02

```
const ass2 = document.querySelector("ul");
ass2.children[2].remove();
const add = document.createElement("li");
add.innerText = "Projects";
ass2.append(add);
const search = document.querySelector("input");
const set = search.setAttribute("placeholder", "Search My Projects");
```

#ASS 03

``` 
const para = document.querySelector("p");
const change = para.lastElementChild;
change.innerText = "iNeuron Intelligence Pvt Ltd.";
```

#ASS 04

```
const ass2 = document.querySelector("ul");
ass2.children[2].remove();
const add = document.createElement("li");
add.innerText = "Projects";
ass2.append(add);
const iMg = document.querySelector("img");
iMg.src = "https://hiteshchoudhary.com/static/a8d73d1aac4c79e9bb689640e6090367/2eaab/person-image.jpg"
```

#ASS 05


```
const last = document.querySelector(".hero-right-section-btns");
const creat = document.createElement("button");
creat.innerText = "Support Me";
last.append(creat);
```