
var tr = document.createElement("tr");

function add(){
var text = document.getElementById('Nome').value;
var t = document.createTextNode(text);
var td = document.createElement("td");
td.appendChild(t);
tr.appendChild(td);


var text = document.querySelector("select").value;
var t = document.createTextNode(text);
var td = document.createElement("td");
td.appendChild(t);
tr.appendChild(td);


var text = document.getElementById('identidade').value;
var t = document.createTextNode(text);
var td = document.createElement("td");
td.appendChild(t);
tr.appendChild(td);

document.getElementById('AddLinha').appendChild(tr);

tr = document.createElement("tr");
}

const exp = new RegExp(/^[a-z]$|^[A-Z]{2}$/)

let re = new RegExp(/^ab*c$/);
function reg(){
  console.log( exp.test('A'))
 // console.log( re.test('bc'))


}