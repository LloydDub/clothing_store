const cart = [];
let total = 0;

function addToCart(itemName, price) {
  cart.push({ itemName, price });
  total += price;
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById("cart-list");
  const totalElement = document.getElementById("total");

  // Clear existing cart items
  cartList.innerHTML = "";

  // Add items to the cart
  cart.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.itemName} - $${item.price}`;
    cartList.appendChild(li);
  });

  // Update total price
  totalElement.textContent = `Total: $${total}`;
}
(function (w, d, s, o, f, js, fjs) {
  w["Avease-Widget"] = o;
  w[o] =
    w[o] ||
    function () {
      (w[o].q = w[o].q || []).push(arguments);
    };
  (js = d.createElement(s)), (fjs = d.getElementsByTagName(s)[0]);
  js.id = o;
  js.src = f;
  js.async = 1;
  fjs.parentNode.insertBefore(js, fjs);
})(
  window,
  document,
  "script",
  "av",
  "https://widget-staging-avease.nexxtdevelopment.ca/assets/snippet.js"
);
av("config", {
  id: "68b2fa0a-f611-412a-83c1-162c8a8fd304",
});
av("init");
