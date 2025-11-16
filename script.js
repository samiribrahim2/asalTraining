"use strict";

document.getElementById("menu-icon").addEventListener("click", () => {
  // console.log("clicked");
  document.querySelector(".mobile-menu").classList.toggle("hidden");
});
document.querySelector(".mobile-menu").addEventListener("click", () => {
  console.log("clicked");
  document.querySelector(".mobile-menu").classList.toggle("hidden");
});
let darkMode = false;
document.getElementById("dark-mode").addEventListener("click", () => {
    // console.log("clicked");
    if(!darkMode){
        document.documentElement.style.setProperty("--secondry-color" , "#302e2e")
        document.documentElement.style.setProperty("--dark-primary-color" , "#f2f2f2")
    }
    else{
          document.documentElement.style.setProperty("--secondry-color" , "#f2f2f2")
          document.documentElement.style.setProperty("--dark-primary-color" , "#302e2e")
    }

    darkMode = !darkMode ;
});
const colorPicker = document.getElementById("inputcolor");
document.getElementById("color").addEventListener("click" , ()=>{

  document.getElementById("inputcolor").classList.toggle("hidden");
})

colorPicker.addEventListener("input" , ()=>{
  document.documentElement.style.setProperty("--primary-color" , colorPicker.value )
})