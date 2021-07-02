// przyciski
const navBarButton = document.getElementById('navbar__button');
const navMenuButton = document.getElementById('nav__menu--button');


// kontenery
const navbarToggle =document.querySelector('.navbar--toggle');
const navMenu = document.querySelector('.nav__menu');


const menuHamburger = "http://localhost:1234/icon-hamburger.4d46a600.svg";
const menuClosed = "http://localhost:1234/icon-close.672c8e2b.svg";

navBarButton.addEventListener('click',()=>{
 
//  nav = (nav.src === menuHamburger) ? nav.src = menuClosed : nav = menuHamburger;

//  pokaz liste 'nav__menu--second'
navbarToggle.classList.toggle('nav--visible');
 //schowaj menu glowne ('.nav__cta');
 navMenu.classList.toggle('nav--visible');

})

navMenuButton.addEventListener('click', ()=>
{
  navbarToggle.classList.toggle('nav--visible');
  navMenu.classList.toggle('nav--visible');
})






//dziala
//const navToggleAll = document.querySelectorAll('.nav__toggle');


// for(const menuCta of navToggleAll){
//     menuCta.addEventListener('click',function(e){
        
//         menuCta.src = (menuCta.src === menuHamburger) ? menuCta.src = menuClosed : menuCta.src = menuHamburger;

        
//     });
// }