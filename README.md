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

# CSS GRID
### GRID
- Bimensional
- Divisão de toda a página em linhas e colunas
- Colocar elementos onde quiser nessa divisão
# GRID OU FLEXBOX
- Grid: Duas dimensões (colunas e linhas)
- Flexbox: Uma dimensão (ou coluna ou linha)
- Um complementa o trabalho do outro
- Verificar quais navegadores ainda não estão aceitando o Grid
### PROPRIEDADES
- Vamos separar em 2 grupos: container e item(s)
- CONTAINER
+ `display: grid;`
+ `grid-template-columns;`
+ `grid-template-rows;`
+ `grid-gap;`
+ `grid-row-gap;`
+ `grid-column-gap;`
+ `grid-template-areas;`

- ITEM(s)
+ `grid-column`
+ `grid-column-start`
+ `grid-column-end`
+ `grid-row`
+ `grid-row-start`
+ `grid-row-end`
+ `grid-area`

# Alinhamento de Container
### Grid: Alinhamento
Existem 6 propriedades para alinhamento:

+ justify-content
+ align-content
+ justify-items
+ align-items
+ justify-self
+ align-self

Vamos separá-los em 2 grupos

+ justify e align
+ content, items e self

### Justify e Align
Sabendo que o grid é bidimensional, nós temos o eixo x e o y.

O eixo x é o posicionamento horizontal, da esquerda para a direita.

O eixo y é o posicionamento vertical, de cima para baixo

+ Justify trabalhará o eixo x.

+ Align trabalhará o eixo y.

### Content, Items e Self
Juntando o `justify`, ou `align`, com esses elementos: `content`, `items` e `self`; nós observamos nossas propriedades

O uso dessas propriedades são raras, pois só é aplicado caso o grid seja menor que a area definida. (Por exemplo, quando usamos em px o tamanho do grid, poderemos terminar com um grid pequeno, para o tamanho da area do grid)

Podemos usar 7 valores:

+ start
+ end
+ center
+ stretch
+ space-between
+ space-around
+ space-evenly

### Items
justify-items e align-items vai permitir alinhar os items do nosso grid, em qualquer espaço disponível, na célula que ele habitar.

Podemos usar 4 valores:

+ start
+ end
+ center
+ stretch

### Self
justify-self e align-self vai nos permitir alinhar o item em si.

Faz a mesma coisa que o justify-items e align-items, porém, aplicado diretamente no item de um grid
