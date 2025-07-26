// dish jason

let dishes = [
    {
      title: "Gelbe Beete Tartar",
      price: 13.50,
      description: "Mit cranberry chutney | schafskäse | vollkorntaler",
    },
    {
      title: "Ziegenkäse Cremebrulee",
      price: 14.50,
      description: "Mit Crostini I Oliventapenade	",
    },
    {
      title: "Tataki vom Lachs",
      price: 15.50,
      description:
        "Mit geröstetem Ciabatta  I pikanter Gurkensalat I Teriyaki Sauce | Wasabimayo",
    },
    {
      title: "ARGENTINISCHES RUMP STEAK MIT PFEFFERSAUCE",
      price: 29.50,
      description: "argentinisches Roast Beef mit charakteristischem Fettrand",
    },
    {
      title: "ARGENTINISCHES RINDERFILET MIT PORTWEINJUS",
      price: 38.50,
      description:
        "Beschrzartes und saftiges Filetsteak aus der Lende mit sehr feiner Struktureibung",
    },
    {
      title: "RIB EYE / ENTRECÔTE AUS ARGENTINIEN MIT SAUCE BERNAISE",
      price: 38.50,
      description:
        "saftig, kräftig marmoriertes Steak, aus der Hochrippe geschnitten",
    },
    {
      title: "Cheesecake im Glas",
      price: 9.50,
      description: "Haferkeks-Streusel | Frischkäsecreme | Ananas-Mango-Salat",
    },
    {
      title: "Peanutbutter Bar",
      price: 12.50,
      description: "Mit Himbeercoulis | Bananencreme",
    },
    {
      title: "Hausgemachter Apfelstrudel",
      price: 13.90,
      description: "Mit Rosinen | Vanilleeis",
    },
    {
      title: "Dessert Wine",
      price: 7.50,
      description: "Chateau Jany | Sauternes, 0,1l",
    },
  ];


  function renderMenuTemplate(index,dishReplacedPrice) {
 
    return `<div class="menu-item-description"><b><div ><p class="menu-item"><span>${dishes[index].title}</span> ${dishReplacedPrice}€
        <button class="add-button" onclick="toCart(this)">+</button></p></b></div>
        <p>${dishes[index].description}</p></div>`;
  }

  function renderCartTemplate(index,dishReplacedPrice) {
   
    return `<p class="cart-item">${cart[index].title} 
    <div class="quantity-management"><button onclick="decrease('${cart[index].title}')">-</button><span class="cart-index-quant">${cart[index].quant}</span><button onclick="increase('${cart[index].title}')">+</button> ${dishReplacedPrice}€<button onclick="deleteOfCart('${cart[index].title}')">\u{1F5D1}</button></div></p><br>`; // template function

  }

 