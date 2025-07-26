let stickyCart = document.getElementById("sticky-cart");
let hiddenCart = document.getElementById("hidden-cart-content");
let cSum = 0;
let currentSum = 0;
let tSum = 0;
let totalCurrentSum = document.getElementById("current-sum");
let totalTotalSum = document.getElementById("total-sum");
let hiddenCartCurrentSum = document.getElementById("hidden-current-sum");
let hiddenCartTotalSum = document.getElementById("hidden-total-sum");
let orderBtn = document.getElementById("order-btn");
let hiddenOrderButton = document.getElementById("hidden-order-btn");
let docBody = document.getElementById("document-body");
let hiddenCartOpen = document.getElementById("click-outside-hidden-cart");
let cart = [];
let orderNote = document.getElementById("order-note");
let hiddenOrderNote = document.getElementById("hidden-order-note");
// ids to position the rendering in the html

let starters = document.getElementById("starters");
let mainCourses = document.getElementById("main-courses");
let desserts = document.getElementById("desserts");

function renderDishes() {
  for (let index = 0; index < 3; index++) {
    let dishPrice = dishes[index].price.toString();
    let dishReplacedPrice = dishPrice.replace('.',',');
    starters.innerHTML += renderMenuTemplate(index, dishReplacedPrice);
  }
 
  for (let index = 3; index < 6; index++) {
    let dishPrice = dishes[index].price.toString();
    let dishReplacedPrice = dishPrice.replace('.',',');
    mainCourses.innerHTML += renderMenuTemplate(index);
  }
  for (let index = 6; index < 10; index++) {
    let dishPrice = dishes[index].price.toString();
    let dishReplacedPrice = dishPrice.replace('.',',');
    desserts.innerHTML += renderMenuTemplate(index);
  }
}



function toCart(button) {
  cartContent = button.parentElement.firstChild.textContent;
  
  totalCurrentSum.style.display = "";
  totalTotalSum.style.display = "";

  let itemInCart = cart.find((element) => element.title == cartContent);
  if (itemInCart) {
    itemInCart.quant += 1;
  } else {
    cart.push({ title: cartContent, quant: 1 });
  }
  updateCart();
}

function updateCart() {
  resetCart();
  for (let index = 0; index < cart.length; index++) {
    let indexDish = dishes.find(
      (element) => element.title == cart[index].title
    );
    currentSum = cart[index].quant * indexDish.price;
    cartInput(index);
  }
  getTheCartNumbers();
}

function resetCart() {
    stickyCart.innerHTML = ""; 
    hiddenCart.innerHTML = "";
    orderBtn.disabled = true;
    hiddenOrderButton.disabled = true;
    cSum = 0;
    tSum = 0;
}

function cartInput(index) {
  let indexDish = dishes.find(
    (element) => element.title == cart[index].title
  );
    let dishPrice = indexDish.price.toString();
    let dishReplacedPrice = dishPrice.replace('.',',');
    stickyCart.innerHTML += renderCartTemplate(index, dishReplacedPrice);
    hiddenCart.innerHTML += renderCartTemplate(index, dishReplacedPrice);
    
    cSum += currentSum;
    tSum = cSum + 5;
    orderBtn.disabled = false;
    hiddenOrderButton.disabled = false;
}

function getTheCartNumbers() {
  cSumReplace = cSum.toString().replace('.',',');
  totalCurrentSum.innerHTML = "Zwischensumme: " + cSumReplace + "€";
  tSumReplace = tSum.toString().replace('.',',');
  totalTotalSum.innerHTML = "Gesamtkosten:" + tSumReplace + "€";
  hiddenCartCurrentSum.innerHTML = "Zwischensumme: " + cSumReplace + "€";
  hiddenCartTotalSum.innerHTML = "Gesamtkosten:" + tSumReplace + "€";
}

// button + - del 
function decrease(dishName) {
  let inCart = cart.find((element) => element.title == dishName);
  if (inCart.quant > 1) {
    inCart.quant -= 1;
  } else {
    let indexInCart = cart.findIndex((element) => element.title == dishName);
    cart.splice(indexInCart, 1);
  }

  updateCart();
}

function increase(dishName) {
  let inCart = cart.find((element) => element.title == dishName);
  if (inCart) {
    inCart.quant += 1;
  }

  updateCart();
}

function deleteOfCart(dishName) {
  let inCart = cart.find((element) => element.title == dishName);
  let indexInCart = cart.findIndex((element) => element.title == dishName);
  if (inCart) {
    cart.splice(indexInCart, 1);
  }

  updateCart();
}

// https://www.w3schools.com/jsref/met_win_settimeout.asp
// Order Notification after onclick the Bestellen Button

function order() {


  orderNote.style.display = "";
  hiddenOrderNote.style.display = "";
  cart = [];
  cSum = 0;
  tSum = 0;
  setTimeout(Notification, 3000);
  totalCurrentSum.style.display = "none";
  totalTotalSum.style.display = "none";
  updateCart();
}

function Notification() {
  orderNote.style.display = "none";
  hiddenOrderNote.style.display = "none";
}


function openHiddenCart() {

  hiddenCartOpen.classList.remove("d_none");
  docBody.classList.add("overflow-hidden-y");
  
} 

function closeHiddenCart() {
    hiddenCartOpen.classList.add("d_none");
    docBody.classList.remove("overflow-hidden-y");
}

function toggleHiddenCart() {
    hiddenCartOpen.classList.toggle("d_none");
    docBody.classList.toggle("overflow-hidden-y");
}

function preventBubbling(event) {
  event.stopPropagation()
}

