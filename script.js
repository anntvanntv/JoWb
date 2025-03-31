

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
  

//COOKIES

let cookieModal = document.querySelector(".cookie-consent-modal")
let cancelCookieBtn = document.querySelector(".cookies-btn.cancel")
let acceptCookieBtn = document.querySelector(".cookies-btn.accept")


cancelCookieBtn.addEventListener("click", function(){
    cookieModal.classList.remove("active")
})

acceptCookieBtn.addEventListener("click", function(){
    cookieModal.classList.remove("active")
    localStorage.setItem("cookieAccepted", "yes")
})

setTimeout(function (){
    let cookieAccepted = localStorage.getItem("cookieAccepted")
    if (cookieAccepted != "yes"){
        cookieModal.classList.add("active")
    }
}, 2000)


