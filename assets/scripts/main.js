function removeClass ( el, className ) {
  el.classList.remove( className );
}

function addClass ( el, className ) {
  el.classList.add( className );
}

var hiddenClass = 'hidden';
var closedClass = 'closed';
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

document.getElementById( 'mainNavToggle' ).addEventListener( 'click', toggleMainNav, false );

var toggles = document.getElementsByClassName('step-by-step-toggle');

for (i = 0; i < toggles.length; i++) {
    toggles[i].addEventListener('click', toggleStepPanel(toggles[i]), false);
}

function toggleStepPanel(el) {
  addClass( el.parentNode, closedClass );
  el.parentNode.style.height = el.parentNode.height;

  return function () {
    if ( this.parentNode.className.indexOf( closedClass ) !== -1 ) {
      removeClass( this.parentNode, closedClass );

      return;
    }

    addClass( this.parentNode, closedClass );
  }
}
