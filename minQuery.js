'use strict'

const m$ = ( function(){

  const chainer = function(fn) {
    return function( ...args ){
      fn.apply( this, args )
      return this
    }
  }

  var M$ = function(){}

  M$.prototype.find = chainer( function(queryString){
    this.elm = document.querySelector( queryString )
  })
  M$.prototype.findAll = chainer( function(queryString ) {
    this.elm = document.querySelectorAll( queryString )
  })
  M$.prototype.first = chainer( function() {
    this.elm = this.elm[0]
    console.log( this.elm)
  })
  M$.prototype.last = chainer( function() {
    this.elm = this.elm[ this.elm.length - 1]
  })
  M$.prototype.addClass = chainer( function(classNames ) {
    classNames.split(' ').forEach( className => {
      this.elm.classList.add( className )
    })
  })
  M$.prototype.removeClass = chainer( function(classNames ) {
    classNames.split(' ').forEach( className => {
      this.elm.classList.remove( className )
    })
  })
  M$.prototype.remove = chainer(function(){
    this.elm.remove()
  })
  M$.prototype.append = chainer( function(elm) {
    console.log( this.elm, elm )
    this.elm.appendChild( elm )
  })
  M$.prototype.eq = chainer( function(index ) {
    this.elm = this.elm[ index ]
  })
  M$.prototype.toggleClass = chainer( function(className ) {
    this.elm.classList.toggle( className )
  })
  M$.prototype.clone = chainer( function(className ) {
    this.elm = this.elm.cloneNode( true )
  })
  // experimental browser implementation. Might need pollyfill
  M$.prototype.closest = chainer( function(queryString) {
      this.elm = this.elm.closest( queryString )
  })
  M$.prototype.bind = chainer( function( eventName, callback ) {
    if( this.elm.length > 1 ){
      this.elm.forEach( elm => {
        elm.addEventListener( eventName, callback )
      })
    }
    else{
      this.elm.addEventListener( eventName, callback )
    }
  })

  // NOT CHAINABLE FUNCTIONS

  M$.prototype.html = function() {
    return this.elm.innerHTML
  }
  M$.prototype.text = function() {
    return this.elm.innerText
  }
  M$.prototype.keywords = function() {
    return document.body.innerText
  }

  return new M$

})()




