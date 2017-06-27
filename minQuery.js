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

  M$.prototype.eq = chainer( function( index ){
    this.elm = this.elm[ index ]
  })

  M$.prototype.toggleClass = chainer( function( className ){
    this.elm.classList.toggle( className )
  })
  // experimental browser implementation
  M$.prototype.closest = chainer( function( queryString ){
    // if (window.Element && !Element.prototype.closest) {
    //   Element.prototype.closest =
    //   function(s) {
    //       var matches = (this.document || this.ownerDocument).querySelectorAll(s),
    //           i,
    //           el = this;
    //       do {
    //           i = matches.length;
    //           while (--i >= 0 && matches.item(i) !== el) {};
    //       } while ((i < 0) && (el = el.parentElement));
    //       return el;
    //   };
    // }
    // else{
      this.elm = this.elm.closest( queryString )
    // }
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

  // NOT CHAINABLE FUNCTIONS

  M$.prototype.html = function(){
    return this.elm.innerHTML
  }
  M$.prototype.text = function(){
    return this.elm.innerText
  }
  M$.prototype.keywords = function(){
    return document.body.innerText
  }


  return new M$

})()




