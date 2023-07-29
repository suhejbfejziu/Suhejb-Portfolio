/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        });
    };
};
showMenu('nav-toggle','nav-menu')

ScrollReveal().reveal('.home__data');
ScrollReveal().reveal('.about__container')
ScrollReveal().reveal('.skills__container')
ScrollReveal().reveal('.qualification__sections')
ScrollReveal().reveal('.content__services')
ScrollReveal().reveal('.work__border')
ScrollReveal().reveal('.footer__container')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}

navLink.forEach( n => n.addEventListener('click', linkAction))

function scrollup(){
    const scrollup = document.getElementById('scroll-up');
    // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 200) scrollup.classList.add('show-scroll'); else scrollup.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollup)

/*===========SERVICE MODAL=================*/
const modalViews = document.querySelectorAll('.services__modal'),
modalBtns= document.querySelectorAll('.services__button'),
modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
};

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click',() =>{
        modal(i)
    });
});

modalCloses.forEach((modalClose) =>{
    modalClose.addEventListener('click', () =>{
        modalViews.forEach((modalView) =>{
            modalView.classList.remove('active-modal')
        });
    });
});
/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)
        
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification__active')
        });
        target.classList.add('qualification__active')
        
        tabs.forEach(tab => {
            tab.classList.remove('qualification__active')
        });
        tab.classList.add('qualification__active')
    });
});
document.getElementById("year").innerHTML = new Date().getFullYear();