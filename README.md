# BOX MODEL

Pilares do Box Model 

### 1. margin
### 2. Padding
### 3. Content
### 4. Border

O box model funciona melhor com elementos com 
display: block;
---------------------------------------------------------------------------
# DOM - Document Object Model
consele.dir(document) - Ver elemento sem ser renderizado
document.getELementById('') - Pega um elemento pelo id
document.getElementByClassName("") - Pega coleção de elementos por Class
document.getElementByTagName("") - Pega coleção de elementos por TagName
document.querySelector("seletor do css"); - Pega um elemento type selector
document.querySelectorAll("") - Pega coleção de elementos type selector

### Percorrer Elementos

```html
let as = document.getElemetByTagName("")
for(a of as){

}
```
ou

```html
let as = document.querySelectorAll("")
as.forEach(a => {

} )
```
ou

```html
let as = document.getElementByClass("")
for(var i=0;i < as.length;i++){

}
```

### Manipular o texto
as.textContent; ==> ver o texto
as.innerText = " " ==> Muda o texto

### Manipular Estilos
as.style.backgroundColor = "gray"
as.style.border = "7px solid red"

### ParentElements - Elementos Pai
as.parentNode ==> elemento Pai
as.parentElement ==> elemento Pai

### ChildElements - Elementos Filho
as.childNodes ==> Pega elementos filhos incluindo espaços
as.children ==> Pega Elementos filhos
as.childElementCount ==> Conta Elementos filhos
as.lasstChild ==> Pega último filho
as.firstChild ==> Pega primeiro filho
as.remove() ==> remove elemento

### SiblingElements - Elementos Irmãos
as.nextSibling ==> Pega o próximo elemento irmão
as.nextElementSibling ==> Pega o próximo elemento irmão
as.previousSibling ==> Pega elemento irmão anterior

### Criar Elementos
as.createElement ==> cria elementos

### Afiliar Elemento
as.append("") ==> Afillia elemento depois do 'as'
as.prepend("") ==> Afillia elemento antes do 'as'
as.inserBefore(sp1,sp2) ==> Insere entre sp1 e sp2

### Atributos
as.setAttribute("id","my-ID") ==> Define um atributo
as.removeAttribute("id") ==> Remove o atributo
as.getAttribute("id") ==> Pega um Atributo


### Funcão
window.addEventListner("tipo do evento",funcao) ==> Função que ouve eventos
----------------------------------------------------------------------------