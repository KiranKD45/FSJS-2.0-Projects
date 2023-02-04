let input = document.querySelector("#URL");
let btn = document.querySelector("#btn");
let ele = document.querySelector("#Element")


btn.addEventListener('click', findExtension)
input.addEventListener('input', removeElement)

function findExtension() {
    if (input.value.indexOf('.') != -1) {
        ele.textContent = "Extension is " + input.value.slice(input.value.lastIndexOf('.') + 1, input.value.length)
    }
}
function removeElement() {
    if (input.value.length == 0) {
        ele.textContent = ""
    }
}