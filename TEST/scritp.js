var myTagListLI = document.getElementsByTagName("li")

for(var i=0;i<myTagListLI.length;i++){
  var span = document.createElement("span")
  var text = document.createTextNode("\u00D7")
  span.className="close"
  span.appendChild(text)
  myTagListLI[i].appendChild(span)
}

var close = document.getElementsByClassName("close")

for(var i=0; i<close.length;i++){
  close[i].onclick = function(){
    var div = this.parentElement;
    div.style.display = "none";
  } 
}

var list = document.querySelector('ul')
list.addEventListener('click',function(ev){
  if(ev.target.tagName == 'LI'){
    ev.target.classList.toggle('checked')
  }
},false)

function newElement(){
  var li = document.createElement("li")
  var inputValue = document.querySelector('input').value
  var t = document.createTextNode(inputValue)
  li.appendChild(t)

  document.getElementById('myUL').appendChild(li)
document.getElementById('myUL').value ="";
 
var span = document.createElement("span")
var txt = document.createTextNode("\u00D7")
span.className ="close"
span.appendChild(txt)
li.appendChild(span);

for(var i=0;close.length;i++){
  close[i].onclick = function(){
    var div = this.parentElement;
    div.style.display = "none";
  }
}
}



