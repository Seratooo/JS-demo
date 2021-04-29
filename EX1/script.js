
var div = document.querySelector("main section.content div");
var form = document.querySelector("main section.form");

function add(){
var texto = document.getElementById('Nome').value +" "+document.getElementById('Sobrenome').value;
var t = document.createTextNode(texto);

var elementoP = document.createElement("p");
elementoP.appendChild(t);
div.appendChild(elementoP);

document.getElementById('Nome').value = "";
document.getElementById('Sobrenome').value ="";
}


