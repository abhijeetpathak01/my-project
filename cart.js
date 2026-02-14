let cart = [];

const cartBtn = document.getElementById("cart-btn");
const cartSection = document.getElementById("cart");
const closeCart = document.getElementById("close-cart");
const cartCount = document.getElementById("cart-count");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

// Add to Cart
document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", function () {

        const productCard = this.closest(".product-card");

        const name = productCard.dataset.name;
        const price = parseInt(productCard.dataset.price);

        cart.push({ name, price });

        updateCart();
    });
});

function updateCart() {

    cartCount.innerText = cart.length;
    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {

        const li = document.createElement("li");

        li.innerHTML = `
            ${item.name} - ₹${item.price}
            <button onclick="removeItem(${index})" class="remove-btn">❌</button>
        `;

        cartItems.appendChild(li);

        total += item.price;
    });

    cartTotal.innerText = total;
}

// Remove Function
function removeItem(index) {
    cart.splice(index, 1);
    updateCart();
}

// Open Cart
cartBtn.addEventListener("click", function () {
    cartSection.classList.remove("cart-hidden");
});

// Close Cart
closeCart.addEventListener("click", function () {
    cartSection.classList.add("cart-hidden");
});
const checkoutBtn = document.querySelector(".checkout-btn");

checkoutBtn.addEventListener("click", function() {
    if(cart.length === 0){
        alert("Your cart is empty!");
        return;
    }
    // Redirect to demo payment page
    window.location.href = "payment.html";
});
