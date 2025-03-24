

let aparece = document.getElementById("aparecer")
let menuIcon = document.getElementById("menu-icon")
let navegador = document.querySelector(".primary-navigation")


  function myFunction(){
    
    if (window.getComputedStyle(aparece).display === "none"){
        navegador.style.height = "100vh";
        aparece.style.display = "flex";
         menuIcon.textContent = "close";
    } else {
        aparece.style.display = "none";
        menuIcon.textContent = "menu";
        navegador.style.height = "108px";

    }
};
  

/* 
function myFunction(){
    aparece.classList.toggle("visible");

    if(aparece.classList.contains("visible")) {
        menuIcon.textContent = "close";
    } else {
        menuIcon.textContent = "menu";
    }
} */
