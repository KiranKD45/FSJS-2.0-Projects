let marks = Number(prompt("Enter your marks: "));

if (marks >= 80 && marks <= 100) {
    alert("Your Grade is A")
}
else if (marks >= 70 && marks <= 79) {
    alert("Your Grade is B")
}
else if (marks >= 60 && marks <= 69) {
    alert("Your Grade is C")
}
else if (marks >= 50 && marks <= 59) {
    alert("Your Grade is D")
}
else if (marks >= 0 && marks <= 49) {
    alert("Your Grade is F")
}
else {
    alert("Renter")
}