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
+ `consele.dir(document)` Ver elemento sem ser renderizado
+ `document.getELementById('')` Pega um elemento pelo id
+ `document.getElementByClassName("")` Pega coleção de elementos por Class
+ `document.getElementByTagName("")` Pega coleção de elementos por TagName
+ `document.querySelector("seletor do css")` Pega um elemento type selector
+ `document.querySelectorAll("")` Pega coleção de elementos type selector

### Percorrer Elementos

```javascript
let as = document.getElemetByTagName("")
for(a of as){

}
```
ou

```javascript
let as = document.querySelectorAll("")
as.forEach(a => {

} )
```
ou

```javascript
let as = document.getElementByClass("")
for(var i=0;i < as.length;i++){

}
```

### Manipular o texto
+ `as.textContent` ver o texto
+ `as.innerText = " "` Muda o texto

### Manipular Estilos
+ `as.style.backgroundColor = "gray"`
+ `as.style.border = "7px solid red"`

### ParentElements - Elementos Pai
+ `as.parentNode` elemento Pai
+ `as.parentElement` elemento Pai

### ChildElements - Elementos Filho
+ `as.childNodes` Pega elementos filhos incluindo espaços
+ `as.children` Pega Elementos filhos
+ `as.childElementCount` Conta Elementos filhos
+ `as.lasstChild` Pega último filho
+ `as.firstChild` Pega primeiro filho
+ `as.remove()` remove elemento

### SiblingElements - Elementos Irmãos
+ `as.nextSibling` Pega o próximo elemento irmão
+ `as.nextElementSibling` Pega o próximo elemento irmão
+ `as.previousSibling` Pega elemento irmão anterior

### Criar Elementos
+ `as.createElement` cria elementos

### Afiliar Elemento
+ `as.append("")` Afillia elemento depois do 'as'
+ `as.prepend("")` Afillia elemento antes do 'as'
+ `as.inserBefore(sp1,sp2)` Insere entre sp1 e sp2

### Atributos
+ `as.setAttribute("id","my-ID")` Define um atributo
+ `as.removeAttribute("id")` Remove o atributo
+ `as.getAttribute("id")` Pega um Atributo


### Funcão
+ `window.addEventListner("tipo do evento",funcao)` Função que ouve eventos
----------------------------------------------------------------------------
# RESPONSIVIDADE
### Unidades css

Layout Fixo
+ `px` - Pixels (Fixo)

Layout Fluído
+ `%` - Percentagem (Adaptável)
+ `auto` - Automática (Adaptável)
+ `vh` - ViewPort Heigth (altura visivel da tela)
+ `vw` - ViewPort Width (comprimento visivel da tela)

### Textos Fixos
+ `1px` = 0.75pt
+ `16px` = 12pt

### Textos Fluídos
+ `em` - Multiplicado pelo valor do tamanho do elemento Pai
+ `rm` - Multiplicado pelo valor do tamanho do root

### Regras Media Queries

Precisamos incluir o seguinte codigo para habilitar

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
Neste caso, todo css colocado entre parentesses
só estará disponível quando o largura máxima da tela
for igual ou inferior a 768px
```css
@media (max-width: 768px){
#form h3 {
    font-size: 2rem;
  }
}
```

### HTML Media Attrib.
Posso utilizar o atribuito media no link do meu HTML, ao importar um arquivo css, usando as propriedades da mesma forma que usaria na regra @media do css.
```html
<link 
    rel="stylesheet"
    href="responsive.css" 
    media="screen and (max-width: 768px)"
/>

<link rel="stylesheet" href="print.css" media="print">
```

### Imagens
+ `<pictures>` Possibilita aplicar diferentes imagens em tamanhos diferentes
ou seja Usamos a tag `<picture>` para que as imagens sejam responsivas.

```html
<picture class="image" alt="Imagem">
    <source media="(min-width: 768px)" 
        srcset="https://i.ytimg.com/vi/GykTLqODQuU/maxresdefault.jpg">
    <source media="(min-width: 320px)" 
        srcset="https://i.ytimg.com/vi/GykTLqODQuU/hqdefault.jpg">
    <source media="(min-width: 10px)" 
        srcset="https://i.ytimg.com/vi/GykTLqODQuU/mqdefault.jpg">

    <img 
        src="https://i.ytimg.com/vi/GykTLqODQuU/hqdefault.jpg" 
        alt="Imagem" />
</picture>
```