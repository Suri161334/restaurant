let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar')

menu.onclick = () => {
    menu.classList.toggle('.navbar');
    navbar.classList.toggle('active');
} 

window.onscroll = () => {
    menu.classList.remove('fa-items');
    navbar.classList.remove('active'); 
}  

ScrollReveal().reveal('.image,.content,.box,.one',{
    // delay:300, 
    // easing:"ease-in-out", 
    // // interval:800, 
    // scale:0.5,
    reset:true,
});
// window.sr = ScrollReveal();
// sr.reveal('.image',{delay:300,reset:true,easing:"ease-in-out",scale:0.5,interval:200 });
// sr.reveal('.content',{delay:300,reset:true,easing:"ease-in-out",scale:0.5,interval:200 });
// sr.reveal('.box',{delay:300,reset:true,easing:"ease-in-out",scale:0.5,interval:200 });
// sr.reveal('.one',{delay:300,reset:true,easing:"ease-in-out",scale:0.5,interval:200 });

