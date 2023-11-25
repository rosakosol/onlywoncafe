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
let navbarHeight = navbar.offsetHeight;

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.padding = "0px 15px";
  } else {
    document.getElementById("navbar").style.padding = "15px 15px";
  }
} 

// When the user scrolls down window height, change navbar colour
$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > (height - 400)) {
	    $(".navbar").css("background-color" , "rgba(0, 0, 0, 0.9)");
	  }
	  else{
		  $(".navbar").css("background" , "transparent");  	
	  }
  })
})

// Animate elements on scroll into viewport
ScrollReveal({
  reset: true,
  distance: '60px',
  duration: 1000,
  delay: 0
})

ScrollReveal().reveal('.fadeInTop', {
  origin: 'top'
});

ScrollReveal().reveal('.fadeInRight', {
  origin: 'right',
});

ScrollReveal().reveal('.fadeInRight2', {
  origin: 'right',
  delay: 400
});

ScrollReveal().reveal('.fadeInRight3', {
  origin: 'right',
  delay: 800
});

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
    title: 'Bulgogi Rice Bowl',
    price: 14.99,
  },
  {
    id: 2,
    image: 'assets/img/bibimbap.jpg',
    title: 'Bibimbap',
    price: 14.99,
  },
  {
    id: 3,
    image: 'assets/img/tteokbokki.jpg',
    title: 'Tteokbokki',
    price: 14.99,
  },
  {
    id: 4,
    image: 'assets/img/noodles.jpg',
    title: 'Rice Noodle Soup',
    price: 14.99,
  },
  {
    id: 5,
    image: 'assets/img/eggplant.jpg',
    title: 'Eggplant Rice Bowl',
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
    <p>$ ${price}</p>`+
    "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
    `</div>
    </div>`
  )
}).join('')

var cart =[];

function addtocart(a) {
  cart.push({...categories[a]});
    displaycart();
}

function delElement(a){
  cart.splice(a, 1);
  displaycart();
}

function displaycart(a){
  let j = 0, total=0;
  if(cart.length==0) {
    document.getElementById('cartItem').innerHTML = "Your cart is empty";
    document.getElementById("total").innerHTML = "$ "+0+".00";
  }
  else {
    document.getElementById('cartItem').innerHTML = cart.map((items)=>
    {
      var { image, title, price} = items;
      total=total+price;
      document.getElementById("total").innerHTML = "$ "+total;
      return(
        `<div class='cart-item'>
        <p style='font-size:14px;'>${title}</p>
        <p style='font-size:14px;'>$ ${price}</p>`+
        "<i class='bi bi-trash' style='color:black;' onclick='delElement("+ (j++) +")'></i></div>"
      );
    }).join('');
  }
}

