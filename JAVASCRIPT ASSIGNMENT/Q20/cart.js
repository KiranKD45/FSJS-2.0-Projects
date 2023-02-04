const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

document.write(`<h1> Current in Bag :</h1> <h2>${shoppingCart}</h2>`);
 
if (shoppingCart.includes("Meat")) {
    document.write("<h2>'Meat' is already added in a bag</h2>");
}
else {
    shoppingCart.unshift('Meat');
    document.write("<h2>&rightarrow;'Meat' is added</h2>");
    document.write(`<h1> Current in Bag :</h1> <h2>${shoppingCart}</h2>`);
}


if (shoppingCart.includes("Sugar")) {
    document.write("<h2>'Sugar' is already added in a bag</h2>");
}
else {
    shoppingCart.push('Sugar');
    document.write("<h2>&rightarrow;'Sugar' is added</h2>");
    document.write(`<h1> Current in Bag :</h1> <h2>${shoppingCart}</h2>`);
}
 
if (shoppingCart.includes('Honey')) {
    shoppingCart.splice(shoppingCart.indexOf('Honey'), 1);
    document.write("<h2>&rightarrow; 'Honey' is removed </h2>");
    document.write(`<h1> Current in Bag :</h1> <h2>${shoppingCart}</h2>`);
}
else {
    document.write("<h2>&rightarrow; 'Honey' is not present in bag");
}


shoppingCart.splice(shoppingCart.indexOf('Tea'), 1, 'Green Tea');

document.write("<h2>&rightarrow; 'Tea' replaced by 'Green Tea'</h2>");
document.write(`<h1> Current in Bag :</h1> <h2>${shoppingCart}</h2>`);