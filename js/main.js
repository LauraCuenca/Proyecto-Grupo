document.addEventListener("DOMContentLoaded", function() {
  // Cargar la navbar
  const navbarContainer = document.getElementById("navbar-container");
  fetch("navbar.html")
    .then(response => response.text())
    .then(data => {
      navbarContainer.innerHTML = data;

      const darkModeToggle = document.getElementById("dark-mode-toggle");
      if (darkModeToggle) {
        darkModeToggle.addEventListener("click", function() {
          document.body.classList.toggle("dark-mode");
          if (document.body.classList.contains("dark-mode")) {
            darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
          } else {
            darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
          }
        });
      }
    })
    .catch(error => console.error('Error al cargar la navbar:', error));

  // Agregar al carrito
  const cartButtons = document.querySelectorAll('.add-to-cart');
  cartButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      const id = button.getAttribute('data-id');
      const title = button.getAttribute('data-title');
      const price = button.getAttribute('data-price');

      // Recuperar el carrito actual
      let cart = JSON.parse(localStorage.getItem('cart')) || [];

      // Agregar el nuevo artículo
      cart.push({ id, title, price });

      // Guardar el carrito en localStorage
      localStorage.setItem('cart', JSON.stringify(cart));
      alert('Artículo agregado al carrito!');

    });
  });
});
