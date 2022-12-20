function showSolution(){
    var button = document.getElementById("solution");
    button.style.display == "none" ? button.style.display = "block" : button.style.display = "none"; 
}

const menu_toggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');

menu_toggle.addEventListener('click', ()=> {
    menu_toggle.classList.toggle('is-active');
    sidebar.classList.toggle('is-active');
})

// prevent scrollTo() from jumping to iframes
var originalScrollTo = window.scrollTo;

window.scrollTo = function scrollTo (x, y) {
  if (y === 0) {
    originalScrollTo.call(this, x, y);
  }
}