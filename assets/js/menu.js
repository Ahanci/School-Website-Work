const nav=document.querySelector('nav');

function navScroll(){
      nav.style.opacity='0.6';
      nav.style.position='fixed';
  }

  nav.onscroll= navScroll();

// const menuOpen= document.querySelector('.menu-icon');
// const menu=document.querySelector('.menu-items');
// const list=document.querySelectorAll('.menu-item');
// const menuClose=document.querySelector('.close');

// menuOpen.addEventListener('click', openMenu);
// menuClose.addEventListener('click', closeMenu);

//  function openMenu() { 
//     menu.classList.remove('menu-items');
//     //menuOpen.style.display='none';
//     //menuOpen.firstElementChild.style.display='none';
//     menu.classList.add('active');
//     //menuOpen.classList.add('hamburgerclosed');
//     menuOpen.firstElementChild.style.display='none';
//     menu.lastElementChild.style.display='block' ;
// };
//   function closeMenu() { 
//     //menuOpen.classList.remove('hamburgerclosed');
//       // menuOpen.style.display='inline-block';
//      //menuOpen.firstElementChild.style.display='inline-block';
//      menuOpen.firstElementChild.style.display='block';
//      menu.classList.add('menu-items');
//      menu.classList.remove('active');
//      menu.lastElementChild.style.display='none'
// }