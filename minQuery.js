const m$ = ( function(){

  function chainer( fn ){
    return function( ...args ){
      fn.apply( this, args )
      return this
    }
  }

  var M$ = function(){}

  M$.prototype.find = chainer( function( queryString ){
    this.elm = document.querySelector( queryString )
  })

  M$.prototype.findAll = chainer( function( queryString ){
    this.elm = document.querySelectorAll( queryString )
  })

  M$.prototype.first = chainer( function(){
    this.elm = this.elm[0]
    console.log( this.elm)
  })

  M$.prototype.last = chainer( function(){
    this.elm = this.elm[ this.elm.length - 1]
  })

  M$.prototype.addClass = chainer( function( classNames ){
    classNames.split(' ').forEach( className => {
      this.elm.classList.add( className )
    })
  })

  M$.prototype.removeClass = chainer( function( classNames ){
    classNames.split(' ').forEach( className => {
      this.elm.classList.remove( className )
    })
  })

  M$.prototype.remove = chainer( function(){
    this.elm.remove()
  })

  M$.prototype.html = chainer( function(){
    return this.elm.innerHTML
  })

  M$.prototype.toggleClass = chainer( function( className ){
    this.elm.classList.toggle( className )
  })

  M$.prototype.bind = chainer( function( eventName, callback ){
    if( this.elm.length > 1 ){
      this.elm.forEach( elm => {
        elm.addEventListener( eventName, callback )
      })
    }
    else{
      this.elm.addEventListener( eventName, callback )
    }
  })

  return new M$

})()




