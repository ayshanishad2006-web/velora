let products = [
  {img:"kurti1.jpg", name:"Short Kurti", price:599},
  {img:"kurti2.jpg", name:"Printed Kurti", price:699},
  {img:"kurti3.jpg", name:"Casual Kurti", price:649},
  {img:"kurti4.jpg", name:"Festive Kurti", price:799},
  {img:"kurti5.jpg", name:"Designer Kurti", price:899},
  {img:"kurti6.jpg", name:"Cotton Kurti", price:549},
  {img:"bag1.jpg", name:"Handbag", price:799},
  {img:"bag2.jpg", name:"Mini Bag", price:699}
];

let container = document.getElementById("products");

if(container){
  products.forEach(p=>{
    container.innerHTML += `
      <div class="card">
        <img src="${p.img}">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <button onclick="viewProduct('${p.img}','${p.name}','${p.price}')">View</button>
        <button onclick="addToCart('${p.img}','${p.name}','${p.price}')">🛒</button>
        <button onclick="addWishlist('${p.img}','${p.name}','${p.price}')">❤️</button>
      </div>
    `;
  });
}

/* VIEW */
function viewProduct(img,name,price){
  localStorage.setItem("viewProduct", JSON.stringify({img,name,price}));
  window.location.href="product.html";
}

/* CART */
function addToCart(img,name,price){
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({img,name,price});
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart");
}

/* WISHLIST */
function addWishlist(img,name,price){
  let wish = JSON.parse(localStorage.getItem("wish")) || [];
  wish.push({img,name,price});
  localStorage.setItem("wish", JSON.stringify(wish));
  alert("Added to wishlist");
}