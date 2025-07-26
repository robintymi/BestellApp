let warenkorb = document.getElementById("sticky-cart");
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
// ids to position the rendering in the html
let starters = document.getElementById("starters");
let mainCourses = document.getElementById("main-courses");
let desserts = document.getElementById("desserts");

function renderDishes() {
  // render function , calls template function
  for (let index = 0; index < 3; index++) {
    starters.innerHTML += renderMenuTemplate(index);
  }
  // for every section, appetizers, main-coureses ,desserts an own for loop
  for (let index = 3; index < 6; index++) {
    mainCourses.innerHTML += renderMenuTemplate(index);
  }
  for (let index = 6; index < 10; index++) {
    desserts.innerHTML += renderMenuTemplate(index);
  }
}

let cart = []; // array , will be an array of objects with our push ({title: cartContent, quant: 1})

function zumWarenkorb(button) {
  cartContent = button.parentElement.firstChild.textContent; // get the correct added item name
  let test = button;
  console.log(test.parentElement.firstChild.textContent);

  console.log(cart);
  totalCurrentSum.style.display = "";
  totalTotalSum.style.display = "";

  let itemInCart = cart.find((element) => element.title == cartContent); // check if element in cart
  if (itemInCart) {
    // if element in array of objects, add 1 to quantity of the item
    itemInCart.quant += 1;
  } else {
    // if not in cart object array , it will be added
    cart.push({ title: cartContent, quant: 1 });
  }
  updateCart();
}

function updateCart() {
  // warenkorb aktualisieren
  warenkorb.innerHTML = ""; // clear cart else every object will be added again
  hiddenCart.innerHTML = "";
  orderBtn.disabled = true;
  hiddenOrderButton.disabled = true;
  cSum = 0;
  tSum = 0;

  for (let index = 0; index < cart.length; index++) {
    let indexDish = dishes.find(
      (element) => element.title == cart[index].title
    );
    warenkorb.innerHTML += renderCartTemplate(index);

    hiddenCart.innerHTML += renderCartTemplate(index);
    currentSum = cart[index].quant * indexDish.price;
    console.log(currentSum);

    orderBtn.disabled = false;
    hiddenOrderButton.disabled = false;
    cSum += currentSum;
    tSum = cSum + 5;
  }
  console.log(cSum);
  getTheCartNumbers();
}

function getTheCartNumbers() {
  totalCurrentSum.innerHTML = "Zwischensumme: " + cSum + "€";
  totalTotalSum.innerHTML = "Gesamtkosten:" + tSum + "€";
  hiddenCartCurrentSum.innerHTML = "Zwischensumme: " + cSum + "€";
  hiddenCartTotalSum.innerHTML = "Gesamtkosten:" + tSum + "€";
}
// button + - del

function decrease(dishName) {
  let inCart = cart.find((element) => element.title == dishName); // check if in cart

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
    console.log(indexInCart);
    cart.splice(indexInCart, 1);
  }

  updateCart();
}

// https://www.w3schools.com/jsref/met_win_settimeout.asp
// Order Notification after onclick the Bestellen Button
let orderNote = document.getElementById("order-note");
let hiddenOrderNote = document.getElementById("hidden-order-note");
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

let hiddenCartOpen = document.getElementById("click-outside-hidden-cart");
function openHiddenCart() {
  hiddenCartOpen.classList.remove("hidden");
} 

function closeHiddenCart() {
  hiddenCartOpen.classList.add("hidden");
}


// update cart
// cartInput
// resetCart