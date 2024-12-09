const cart = [];
let total = 0;

function addToCart(itemName, price) {
    cart.push({ itemName, price });
    total += price;
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById('cart-list');
    const totalElement = document.getElementById('total');
    
    // Clear existing cart items
    cartList.innerHTML = '';
    
    // Add items to the cart
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.itemName} - $${item.price}`;
        cartList.appendChild(li);
    });

    // Update total price
    totalElement.textContent = `Total: $${total}`;
}
