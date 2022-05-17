const nav=document.querySelector('nav');

function navScroll(){
      nav.style.opacity='0.6';
      nav.style.position='fixed';
  }

  nav.onscroll= navScroll();