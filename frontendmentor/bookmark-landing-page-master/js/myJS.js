const navToggle = document.querySelector('.nav__toggle');


// const navImg = document.querySelector('.nav__menu');
let nav = document.getElementById('nav__menu--first');
let hideNav = document.querySelector('.nav__cta');
// let navImg = document.getElementById('nav__menu--second');
let nav__listButton = document.getElementById('nav__menu--second');
let navList = document.querySelector('.nav__list');



const submenu = document.getElementById('nav__menu--second')

// const menuHamburger = "/images/icon-hamburger.svg";
// const menuClosed = "/images/icon-close.svg";



// const menuHamburger = "../icon-hamburger.4d46a600.svg";
// const menuClosed = "../icon-close.672c8e2b.svg";


const menuHamburger = "http://localhost:1234/icon-hamburger.4d46a600.svg";
const menuClosed = "http://localhost:1234/icon-close.672c8e2b.svg";

// PO CO ZMIENIAC IKONY SKORO I TAK ICH NIE BEDZIE WWWWWWWWIIIIIIIIIIIDDDDDDDDDDDDDDDDDDDAAAAAAAAAAAAAC
// KURRRRRRRWWWWWWW

navToggle.addEventListener('click',()=>{

//  nav = (nav.src === menuHamburger) ? nav.src = menuClosed : nav = menuHamburger;

//  pokaz liste 'nav__menu--second'
 navList.classList.toggle('nav--visible');
 //schowaj menu glowne ('.nav__cta');
 hideNav.classList.toggle('nav--visible');

})

// nav__menu--second'
nav__listButton.addEventListener('click', ()=> {
    
    // nav = (nav.src === menuHamburger) ? nav.src = menuClosed : nav = menuHamburger;

  //  pokaz liste 'nav__menu--second'
 navList.classList.toggle('nav--visible');
 //schowaj menu glowne ('.nav__cta');
 hideNav.classList.toggle('nav--visible');



});

//dziala
//const navToggleAll = document.querySelectorAll('.nav__toggle');


// for(const menuCta of navToggleAll){
//     menuCta.addEventListener('click',function(e){
        
//         menuCta.src = (menuCta.src === menuHamburger) ? menuCta.src = menuClosed : menuCta.src = menuHamburger;

        
//     });
// }