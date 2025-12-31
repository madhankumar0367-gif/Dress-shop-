let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Add to Cart
function addToCart(name, price, image) {
  cart.push({ name, price, image });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(name + " added to cart ");
}

// Buy Now
function buyNow(name, price, image) {
  localStorage.setItem(
    "cart",
    JSON.stringify([{ name, price, image }])
  );
  window.location.href = "checkout.html";

}