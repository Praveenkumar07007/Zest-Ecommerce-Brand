//addToCart Slider

const bar = document.getElementById("bar");
const close = document.getElementById("close");
const navbar = document.getElementById("navbar");


//Open cart
bar.onclick = ()=>{
  navbar.classList.add("active");
}

//Close cart
close.onclick = ()=>{
  navbar.classList.remove("active");
}


import { Carousel, initMDB } from "mdb-ui-kit";

initMDB({ Carousel });
// ------------------------------------------
const loginButton = document.getElementById('loginButton');

// Add click event listener to the login button
loginButton.addEventListener('click', function() {
  // Redirect to index.html
  window.location.href = 'index.html';
});






