console.log("hola guap@ <3")

const menuButton = document.querySelector('.menu-button');
const menuContent = document.querySelector('.menu-mobile-background');
let menuOpen = false;

menuButton.addEventListener('click', () => 
{
    if(!menuOpen) 
    {
        menuButton.classList.add('open');
        menuContent.classList.add('open');
        menuOpen = true;
    } else {
        menuButton.classList.remove('open');
        menuContent.classList.remove('open');
        menuOpen = false;
    }
});

const menuHome = document.querySelector('.mobile-inicio');

menuHome.addEventListener('click', () => 
{
        menuButton.classList.remove('open');
        menuContent.classList.remove('open');
        menuOpen = false;
});

const menu2 = document.querySelector('.mobile2');

menu2.addEventListener('click', () => 
{
        menuButton.classList.remove('open');
        menuContent.classList.remove('open');
        menuOpen = false;
});

const menu3 = document.querySelector('.mobile3');

menu3.addEventListener('click', () => {
    menuButton.classList.remove('open');
    menuContent.classList.remove('open');
    menuOpen = false;
})