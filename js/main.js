//Carusel
$(document).ready(function(){
$('.slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive:[
  		{
  			breakpoint:850,
  			settings:{
  				slidesToShow:2
  			},
  			breakpoint:640,
  			settings:{
  				slidesToShow:2
  			}
  			
  		}
  ]
});
});
//Nav icon
const navBtn = document.querySelector('.nav_toggle');
const menuIcon = document.querySelector('.menu-icon');
const nav = document.querySelector('.nav');

navBtn.onclick = function(){
	nav.classList.toggle('nav_mobile');
    menuIcon.classList.toggle('menu-icon-active');
};