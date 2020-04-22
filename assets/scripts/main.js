var hiddenClass = 'hidden';
var closedClass = 'closed';
var inactiveClass = 'inactive';

function removeClass ( el, className ) {
  el.classList.remove( className );
}

function addClass ( el, className ) {
  el.classList.add( className );
}

function show ( el ) {
  removeClass( el, hiddenClass );
  removeClass( el, inactiveClass );
}

function hide ( el ) {
  addClass( el, hiddenClass );
  addClass( el, inactiveClass );
}

function open ( el, twiddle ) {
  removeClass( el, closedClass );
  twiddle.innerText = "-";
}

function close ( el, twiddle ) {
  addClass( el, closedClass );
  twiddle.innerText = "+";
}

function expand ( el ) {
  removeClass( el, closedClass );
}

function contract ( el ) {
  addClass( el, closedClass );
}

function toggleMainNav (el) {
  var nav = el;

  return function toggleMainNavHelper (ev) {
    ev.stopPropagation();
    ev.preventDefault();

    if ( nav.className.indexOf( hiddenClass ) !== -1 ) {
      show( nav );
      return;
    }

    hide( nav );
  }
}

function toggleStepPanel (el) {
  var panel = el.parentNode;
  var twiddle = el.childNodes[el.childNodes.length - 1];

  addClass( panel, closedClass );
  twiddle.innerText = "+";

  return function toggleStepPanelHandler (ev) {
    ev.stopPropagation();
    ev.preventDefault();

    if ( panel.className.indexOf( closedClass ) !== -1 ) {
      open ( panel, twiddle );
      return;
    }

    close ( panel, twiddle );
  }
}

function toggleCaseStudyPanel (el) {
  var panel = el.parentNode.nextSibling.nextSibling;

  addClass( panel, closedClass );

  return function toggleCaseStudyPanelHandler (ev) {
    ev.stopPropagation();
    ev.preventDefault();

    if ( panel.className.indexOf( closedClass ) !== -1 ) {
      expand ( panel );
      return;
    }

    contract ( panel );
  }

}

var mainNav = document.getElementById( 'mainNav' );
document.getElementById( 'mainNavToggle' ).addEventListener( 'click', toggleMainNav( mainNav ), false );

var toggles = document.getElementsByClassName('step-by-step-toggle');
for (i = 0; i < toggles.length; i++) {
    toggles[i].addEventListener('click', toggleStepPanel(toggles[i]), false);
}

var caseStudyLinks = document.getElementsByClassName('case-study-link');
for (i = 0; i < caseStudyLinks.length; i++) {
    caseStudyLinks[i].addEventListener('click', toggleCaseStudyPanel(caseStudyLinks[i]), false);
}
