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
  var twiddle = el.childNodes[el.childNodes.length - 1];
  twiddle.innerText = "+";

  return function () {
    if ( this.parentNode.className.indexOf( closedClass ) !== -1 ) {
      removeClass( this.parentNode, closedClass );
      twiddle.innerText = "-";

      return;
    }

    addClass( this.parentNode, closedClass );
    twiddle.innerText = "+";
  }
}
