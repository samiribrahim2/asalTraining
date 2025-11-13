'use strict'

document.getElementById('menu-icon').addEventListener('click' , () =>{
    console.log("clicked");
    document.querySelector('.mobile-menu').classList.toggle('hidden')
});
document.getElementById('close-menu').addEventListener('click' , () =>{
    console.log("clicked");
    document.querySelector('.mobile-menu').classList.toggle('hidden')
});