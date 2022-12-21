var btn = document.querySelector('.btn');

var overlay = document.querySelector('.overlay');

var h1 = overlay.querySelector('h1');

btn.addEventListener("click",()=> {

    overlay.classList.toggle('overlay-on');

    h1.classList.toggle('show');

});