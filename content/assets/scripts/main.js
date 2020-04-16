function removeClass ( el, className ) {
  el.classList.remove( className );
}

function addClass ( el, className ) {
  el.classList.add( className );
}

var hiddenClass = 'hidden';
var inactiveClass = 'inactive';
var mainNav = document.getElementById( 'mainNav' );

function show ( el ) {
  removeClass( el, hiddenClass );
  removeClass( el, inactiveClass );
}

function hide ( el ) {
  addClass( el, hiddenClass );
  addClass( el, inactiveClass );
}

function toggleMainNav () {
  if ( mainNav.className.indexOf( hiddenClass ) !== -1 ) {
    // show
    show( mainNav );
    return;
  }

  // hide
  hide( mainNav );
}

document.getElementById( 'mainNavToggle' ).addEventListener( 'click', toggleMainNav );
