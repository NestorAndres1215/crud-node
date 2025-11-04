document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");
  const navItems = document.querySelectorAll(".nav-item .nav-link");

  // Función para manejar efecto scroll en navbar
  const handleScroll = () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  };

  // Función para marcar la página activa
  const setActiveNavLink = () => {
    const currentPath = window.location.pathname;

    navItems.forEach(link => {
      // Comparar solo la ruta, ignorando query params
      const linkPath = new URL(link.href).pathname;
      link.classList.toggle("active", linkPath === currentPath);
    });
  };

  // Inicializar
  handleScroll();
  setActiveNavLink();

  // Eventos
  window.addEventListener("scroll", handleScroll);
});
