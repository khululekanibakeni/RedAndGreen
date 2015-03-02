
function RedOrGreen (elementTag) {
// body...
var newElement = document.createElement(elementTag);
this.makeGreen = function() {
// body...
newElement.style.backgroundColor = "green";
newElement.innerHTML = "Congrats!!";
};
this.makeRed = function() {
// body...
newElement.style.backgroundColor = "red";
newElement.innerHTML = "Oops!!";
};
document.body.appendChild(newElement);
};
