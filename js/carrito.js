document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cart-items');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart-message">No hay elementos en el carrito.</p>';
    } else {
        cart.forEach(item => {
            const card = document.createElement('div');
            card.classList.add('col-md-4', 'mb-4');

            card.innerHTML = `
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${item.title}</h5>
                        <p class="card-text">Precio: $${item.price}</p>
                    </div>
                </div>
            `;

            cartItemsContainer.appendChild(card);
        });
    }

    // Configurar el botón para limpiar el carrito
    const clearCartButton = document.getElementById('clear-cart');
    if (clearCartButton) {
        clearCartButton.addEventListener('click', () => {
            localStorage.removeItem('cart');
            
            if (cartItemsContainer) {
                cartItemsContainer.innerHTML = '<p class="empty-cart-message">No hay elementos en el carrito.</p>';
            }

        });
    }
});
