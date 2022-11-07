let loginForm = document.querySelector(".login-form");

document.querySelector("#login-btn").onclick = () => {
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    navBar.classList.remove('active');
}

let searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
    searchForm.classList.toggle('active');
    loginForm.classList.remove('active');
    navBar.classList.remove('active');
}

window.onscroll = () => {
    loginForm.classList.remove("active");
    searchForm.classList.remove("active");
    navBar.classList.remove("active");
}





var typed = new Typed("#typing", {
    strings:["", "Web Designer", "Web Developer", "Grafic Designer", "YouTuber"],
    typeSpeed:100,
    Backspeed:60,
    loop:true 
})

