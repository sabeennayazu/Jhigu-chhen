let openShopping = document.querySelector(".shopping");
let closeShopping = document.querySelector(".closeShopping");
let list = document.querySelector(".list");
let listCard = document.querySelector(".listCard");
let body = document.querySelector("body");
let total = document.querySelector(".total");
let quantity = document.querySelector(".quantity");

openShopping.addEventListener("click", () => {
  body.classList.add("active");
});
closeShopping.addEventListener("click", () => {
  body.classList.remove("active");
});

let products = [
  {
    id: 1,
    name: "Alu Sandheko",
    image: "Alu_Sandheko.png",
    price: 90,
  },
  {
    id: 2,
    name: "Anda bara",
    image: "anda bara.jpg",
    price: 120,
  },
  {
    id: 3,
    name: "Bhatmas Sandheko",
    image: "Bhatmas_Sandheko.png",
    price: 60,
  },
  {
    id: 4,
    name: "Buff chhoila",
    image: "Buff_chhoila.png",
    price: 180,
  },
  {
    id: 5,
    name: "Chicken chhoila",
    image: "Chicken_Chhoila.png",
    price: 200,
  },
  {
    id: 6,
    name: "Chicken Chilli",
    image: "Chicken_Chilli.png",
    price: 150,
  },
  {
    id: 7,
    name: "Chicken sadheko",
    image: "Chicken_Sandheko.png",
    price: 150,
  },
  {
    id: 8,
    name: "Crispy chicken",
    image: "Crispy_Chicken.png",
    price: 150,
  },
  {
    id: 9,
    name: "Masala papad",
    image: "Masala_Pappad.png",
    price: 40,
  },
  {
    id: 10,
    name: "Mushroom chhoila",
    image: "Mushroom_Chhoila.png",
    price: 120,
  },
  {
    id: 11,
    name: "Mushroom chilli",
    image: "Mushroom_Chilli.png",
    price: 150,
  },
  {
    id: 12,
    name: "Muton sekuwa",
    image: "Mutton_Sekuwa.png",
    price: 150,
  },
  {
    id: 13,
    name: "Peanut sadheko",
    image: "Peanut_Sandheko.png",
    price: 60,
  },
  {
    id: 14,
    name: "Yomari",
    image: "Yomari.jpg",
    price: 50,
  },
  {
    id: 15,
    name: "Anda chatamari",
    image: "anda chatamari.JPG",
    price: 110,
  },
  {
    id: 16,
    name: "Safu micha",
    image: "safu micha.jpg",
    price: 120,
  },
  {
    id: 17,
    name: "Bhutan",
    image: "bhutan.png",
    price: 120,
  },
];
let listCards = [];
function initApp() {
  products.forEach((value, key) => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("item");
    newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Order</button>`;
    list.appendChild(newDiv);
  });
}
initApp();
function addToCard(key) {
  if (listCards[key] == null) {
    // copy product form list to list card
    listCards[key] = JSON.parse(JSON.stringify(products[key]));
    listCards[key].quantity = 1; 
  }
  reloadCard();
}
function reloadCard() {
  listCard.innerHTML = "";
  let count = 0;
  let totalPrice = 0;
  listCards.forEach((value, key) => {
    totalPrice = totalPrice + value.price;
    count = count + value.quantity;
    if (value != null) {
      let newDiv = document.createElement("li");
      newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${
        value.quantity - 1
      })">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${
        value.quantity + 1
      })">+</button>
                </div>`;
      listCard.appendChild(newDiv);
    }
  });
  total.innerText = totalPrice.toLocaleString();
  quantity.innerText = count;
}
function changeQuantity(key, quantity) {
  if (quantity == 0) {
    delete listCards[key];
  } else {
    listCards[key].quantity = quantity;
    listCards[key].price = quantity * products[key].price;
  }
  reloadCard();
}
