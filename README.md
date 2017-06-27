# miniQuery
A smaller jQuery

## Purpose

I found that it's a very few but useful functions I normally need from jQuery. Therefor I created a much smaller
library.

Today all common browsers supports the most common DOM manipulation. So no cross-browser checks or hacks in this library.

What this library really ***does*** is ***2 things***. Makes common ***DOM queries cleaner and chainable***.

## Examples

***result***
```
m$.removeClass('my-class')
```
***simplified implementation***
```
this.elm.classList.remove( className )
```
***full implementation***
```
M$.prototype.removeClass = chainer( function( classNames ){
  classNames.split(' ').forEach( className => {
    this.elm.classList.remove( className )
  })
})
````

## Function list

Classes are names as jQuery so if you one day feel you want to use jQuery the transition will be easy.

find()
findAll()
first()
last()
addClass()
removeClass()
remove()
html()
toggleClass()
bind()