// When hamburger clicked, toggle active class
$('.hamburger').click (function(){
    $(this).toggleClass('is-active');
  });

$('.carousel').carousel({
  interval: false
})

$('.carousel-control-prev').click(function() {
  $('.carousel').carousel('prev');
});

$('.carousel-control-next').click(function() {
  $('.carousel').carousel('next');
});

// Activate modal
$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})

// When the user scrolls down 20px from the top of the document, shrink the navbar padding slightly
window.onscroll = function() {scrollFunction()};
let height = window.innerHeight;
let width = window.innerWidth;

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.padding = "0px 15px";
  } else {
    document.getElementById("navbar").style.padding = "15px 15px";
  }
} 

// When the user scrolls down window height, change navbar to orange
$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > (height)) {
	    $(".navbar").css("background-color" , "rgba(0, 0, 0, 0.9)");
	  }

	  else{
		  $(".navbar").css("background" , "transparent");  	
	  }
  })
})

// 
const product = [
  {
    id: 0,
    image: 'assets/img/kfc.jpg',
    title: 'Korean Fried Chicken',
    price: 14.99,
  },
  {
    id: 1,
    image: 'assets/img/bulgogi.jpg',
    title: 'Korean Fried Chicken',
    price: 14.99,
  },
  {
    id: 2,
    image: 'assets/img/bibimbap.jpg',
    title: 'Korean Fried Chicken',
    price: 14.99,
  },
  {
    id: 3,
    image: 'assets/img/tteokbokki.jpg',
    title: 'Korean Fried Chicken',
    price: 14.99,
  },
  {
    id: 4,
    image: 'assets/img/kfc.jpg',
    title: 'Korean Fried Chicken',
    price: 14.99,
  },
  {
    id: 5,
    image: 'assets/img/kfc.jpg',
    title: 'Korean Fried Chicken',
    price: 14.99,
  },
  {
    id: 6,
    image: 'asset/img/kfc.jpg',
    title: 'Korean Fried Chicken',
    price: 14.99,
  },
  {
    id: 7,
    image: 'asset/img/kfc.jpg',
    title: 'Korean Fried Chicken',
    price: 14.99,
  },
];

const categories = [...new Set(product.map((item)=>
  { return item}))]
  let i = 0;

document.getElementById('root').innerHTML = categories.map((item)=>
{
  var {image, title, price} = item;
  return(
    `<div class='box'>
      <div class='img-box'>
        <img class='images' src=${image}></img>
        </div>
    <div class='bottom'>
    <h2>${title}</h2>
    <p>$ ${price}.00</p>`+
    "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
    `</div>
    </div>`
  )
}).join('')