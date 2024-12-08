document.addEventListener("DOMContentLoaded", () => {
    const cart = [];
    const cartTableBody = document.querySelector("#cart-table tbody");
    const cartTotal = document.getElementById("cart-total");

    
    function updateCart() {
        cartTableBody.innerHTML = "";
        let total = 0;

        cart.forEach((item, index) => {
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${item.name}</td>
                <td>R$${item.price.toFixed(2)}</td>
                <td>${item.quantity}</td>
                <td>R$${(item.price * item.quantity).toFixed(2)}</td>
                <td><button class="remove-item" data-index="${index}">Remover</button></td>
            `;

            cartTableBody.appendChild(row);
            total += item.price * item.quantity;
        });

        cartTotal.textContent = total.toFixed(2);
    }

    
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", () => {
            const name = button.dataset.name;
            const price = parseFloat(button.dataset.price);

            const existingItem = cart.find(item => item.name === name);

            if (existingItem) {
                existingItem.quantity++;
            } else {
                cart.push({ name, price, quantity: 1 });
            }

            updateCart();
        });
    });


    cartTableBody.addEventListener("click", event => {
        if (event.target.classList.contains("remove-item")) {
            const index = event.target.dataset.index;
            cart.splice(index, 1);
            updateCart();
        }
    });
});
