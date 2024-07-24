document.addEventListener("DOMContentLoaded", function() {
    const navbarContainer = document.getElementById("navbar-container");
    fetch("navbar.html")
      .then(response => response.text())
      .then(data => {
        navbarContainer.innerHTML = data;
  
        // Agregar el evento al botón después de cargar la navbar
        const darkModeToggle = document.getElementById("dark-mode-toggle");
        if (darkModeToggle) {
          darkModeToggle.addEventListener("click", function() {
            document.body.classList.toggle("dark-mode");
            // Cambia el icono según el modo
            if (document.body.classList.contains("dark-mode")) {
              darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            } else {
              darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            }
          });
        }
      })
      .catch(error => console.error('Error al cargar la navbar:', error));
  });
  
  
  