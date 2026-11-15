function orderCake(cakeName) {

    alert("Thank you for choosing " + cakeName + "!");

}

// Contact form functionality



// Shopping Cart

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const customerName = document.getElementById("name").value;

    const cakeName = document.getElementById("cake").value;

    const message = document.getElementById("successMessage");

    message.textContent =
        "Thank you, " + customerName +
        "! Your enquiry for " + cakeName +
        " has been received.";

    message.style.color = "green";

    contactForm.reset();

});


// Shopping Cart - Day 10

let cart = [];

// Add cake to cart
function addToCart(name, price) {

    const existingItem = cart.find(item => item.name === name);

    if (existingItem) {

        existingItem.quantity++;

    } else {

        cart.push({
            name: name,
            price: price,
            quantity: 1
        });

    }

    updateCart();
}


// Display cart
function updateCart() {

    const cartItems = document.getElementById("cartItems");
    const cartTotal = document.getElementById("cartTotal");

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach(function(item, index) {

        const product = document.createElement("div");

        product.innerHTML = `
            <p>
                ${item.name} - ₹${item.price}
                x ${item.quantity}
            </p>
            <button onclick="removeFromCart(${index})">
                Remove
            </button>
        `;

        cartItems.appendChild(product);

        total += item.price * item.quantity;

    });

    if (cart.length === 0) {
        cartItems.textContent = "Your cart is empty.";
    }

    cartTotal.textContent = total;

}


// Remove one cake
function removeFromCart(index) {

    cart.splice(index, 1);

    updateCart();

}


// Clear complete cart
function clearCart() {

    cart = [];

    updateCart();

}