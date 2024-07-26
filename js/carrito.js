document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cart-items');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart-message">No hay elementos en el carrito.</p>';
    } else {
        cartItemsContainer.innerHTML = ''; // Limpia el contenedor antes de añadir nuevos elementos
        
        cart.forEach((item, index) => {
            const card = document.createElement('div');
            card.classList.add('col-md-4', 'mb-4');

            card.innerHTML = `
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${item.title}</h5>
                        <p class="card-text">Precio: $${item.price}</p>
                        <button class="btn btn-danger btn-sm remove-item" data-index="${index}">Eliminar</button>
                    </div>
                </div>
            `;

            cartItemsContainer.appendChild(card);
        });

        // Agregar funcionalidad de eliminación
        const removeButtons = document.querySelectorAll('.remove-item');
        removeButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                const index = button.getAttribute('data-index');
                let cart = JSON.parse(localStorage.getItem('cart')) || [];

                // Eliminar el producto del carrito
                cart.splice(index, 1);

                // Guardar el carrito actualizado en localStorage
                localStorage.setItem('cart', JSON.stringify(cart));

                // Actualizar la vista del carrito
                location.reload();
            });
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
