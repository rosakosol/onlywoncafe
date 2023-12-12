// When hamburger clicked, toggle active class
$('.hamburger').click (function(){
    $(this).toggleClass('is-active');
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

ScrollReveal().reveal('.fadeIn', {
  move: 0
});

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


// Get appended food order string for Catering form
function getOrderValues() {  
  var checkboxes = document.getElementsByName('order');
  var result = "";
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      result += checkboxes[i].value + " ";
    }
  }
  return result;
}  

// Catering order form emailJS
function sendMail() {
  // Validate form first
  if ((document.forms["contactForm"]["name"].value) == "") {
    alert("Name must be filled out!");
    return false;
  }
  else if ((document.forms["contactForm"]["email"].value) == "") {
    alert("Email must be filled out!");
    return false;
  } 
  else if ((document.forms["contactForm"]["phone"].value) == "") {
    alert("Phone must be filled out!");
    return false;
  } 

  // If form is valid, then send email order to emailJS
  const serviceID = "service_vfum7yj";
  const templateID = "template_xv88by8";

  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    events: document.querySelector('input[name="events"]:checked').value,
    order: getOrderValues(),
    budget: document.getElementById("budget").value,
    message: document.getElementById("message").value,
  }

  emailjs.send(serviceID, templateID, params)
  .then(
    res=>{
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("phone").value = "";
      document.querySelector('input[name="events"]:checked').value = "",
      result = "",
      document.getElementById("budget").value = "",
      document.getElementById("message").value = "",
      console.log(res);
      alert("Your catering enquiry has been sent succcessfully!");
    })
  .catch(err=>console.log(err));
}


// Shopping cart on order now
let shop = document.getElementById("shop")

let basket = [];

let shopItemsData = [{
  id:"kfc",
  name:"Korean Fried Chicken",
  price:"14.99",
  desc:"Crispy Korean-style fried chicken with your choice of flavour, from sweet to spicy.",
  img:"assets/img/kfc.jpg"
},
{
  id:"bulgogi",
  name:"Bulgogi Rice Bowl",
  price:"4.99",
  desc:"Crispy Korean-style fried chicken with your choice of flavour, from sweet to spicy.",
  img:"assets/img/bulgogi.jpg"
},
{
  id:"bibimbap",
  name:"Bibimbap",
  price:"14.99",
  desc:"Crispy Korean-style fried chicken with your choice of flavour, from sweet to spicy.",
  img:"assets/img/bibimbap.jpg"
},
{
  id:"tteokbokki",
  name:"Tteokbokki",
  price:"14.99",
  desc:"Crispy Korean-style fried chicken with your choice of flavour, from sweet to spicy.",
  img:"assets/img/tteokbokki.jpg"
},
{
  id:"eggplant",
  name:"Korean fried chicken",
  price:"14.99",
  desc:"Crispy Korean-style fried chicken with your choice of flavour, from sweet to spicy.",
  img:"assets/img/eggplant.jpg"
},
{
  id:"noodles",
  name:"Korean fried chicken",
  price:"14.99",
  desc:"Crispy Korean-style fried chicken with your choice of flavour, from sweet to spicy.",
  img:"assets/img/noodles.jpg"
},
{
  id:"porkbelly",
  name:"Korean fried chicken",
  price:"14.99",
  desc:"Crispy Korean-style fried chicken with your choice of flavour, from sweet to spicy.",
  img:"assets/img/porkbelly.jpg"
},
{
  id:"jajangmyeon",
  name:"Korean fried chicken",
  price:"14.99",
  desc:"Crispy Korean-style fried chicken with your choice of flavour, from sweet to spicy.",
  img:"assets/img/jajangmyeon.jpg"
},
{
  id:"spicynoodles",
  name:"Korean fried chicken",
  price:"14.99",
  desc:"Crispy Korean-style fried chicken with your choice of flavour, from sweet to spicy.",
  img:"assets/img/spicynoodles.jpg"
},
];

console.log(shop);



let generateShop =()=>{
  return (shop.innerHTML = shopItemsData.map((x)=>{
    let {id, name, price, desc, img} = x;
    return `
    <div id=product-id-${id} class="col-md-4 card item">
                <img class="card-img-top" src=${img} alt="Card image cap">
                <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <p class="card-text">${desc}</p>
                <div class="price-quantity">
                  <h3>$ ${price}</h3>
                  <div class="quantity-btns">
                    <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                    <div id=${id} class="quantity"><h3>0</h3></div>
                    <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                    <button type="button" class="btn btn-dark">Add to cart </button>
                  </div>
                </div>
              </div>
            </div>
            `;
  })
  .join(""));
};

generateShop();

let increment = (id) => {
  let selectedItem = id;
  let search = basket.find((x)=> x.id === selectedItem.id);
  
  if(search === undefined){
    basket.push({
      id: selectedItem.id,
      item: 1,
    });
  }
  else{
    search.item += 1;
  }
  console.log(basket);
  update(selectedItem.id);
};

let decrement = (id)=> {
  let selectedItem = id;
  let search = basket.find((x)=> x.id === selectedItem.id);
  
  if(search === undefined){
    basket.push({
      id: selectedItem.id,
      item: 1,
    });
  }
  else{
    search.item -= 1;
  }

  update(selectedItem.id);
};

let update = (id) => {
  let search = basket.find((x) => x.id === id)
  // 
  document.getElementById(id).innerHTML = search.item;
  calculation();
};

let calculation =()=>{
  console.log("calculation function is running");
};