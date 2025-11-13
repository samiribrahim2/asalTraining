'use strict'

document.getElementById('menu-icon').addEventListener('click' , () =>{
    console.log("clicked");
    document.querySelector('.mobile-menu').classList.toggle('hidden')
});
document.querySelector('.mobile-menu').addEventListener('click' , () =>{
    console.log("clicked");
    document.querySelector('.mobile-menu').classList.toggle('hidden')
});