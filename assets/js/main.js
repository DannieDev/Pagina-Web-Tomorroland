jQuery(document).ready(function () {


  jQuery(".owl-carousel2").owlCarousel({
    loop: true,
    center: false,
    margin: 20,
    responsiveClass: true,
    nav: true,
    responsive: {
      0: {
        items: 2,
        nav: false,
      },
      600: {
        items: 2,
        nav: false
      },
      1000: {
        items: 4,
        nav: true,
        loop: true
      }
    }
  }
  );

  jQuery(".owl-carousel3").owlCarousel({
    loop: true,
    center: false,
    margin: 20,
    responsiveClass: true,
    nav: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false
      },
      1000: {
        items: 3,
        nav: true,
        loop: true
      }
    }
  }
  );

  jQuery(".owl-carousel4").owlCarousel({
    loop: true,
    center: false,
    margin: 20,
    responsiveClass: true,
    nav: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false
      },
      1000: {
        items: 2,
        nav: true,
        loop: true
      }
    }
  }
  );

  jQuery(document).ready(function () {
    const elemento = document.getElementById('id-del-elemento');
    if (elemento) {
      elemento.style.display = 'block';
    } else {
      console.warn("Elemento no encontrado en el DOM");
    }
  });


});

document.querySelectorAll('.maine-menu .nav-item').forEach(item => {
  let timeout;

  item.addEventListener('mouseenter', () => {
    clearTimeout(timeout);
    item.querySelector('.dropdown').style.display = 'block';
  });

  item.addEventListener('mouseleave', () => {
    timeout = setTimeout(() => {
      item.querySelector('.dropdown').style.display = 'none';
    }, 100); // 300ms de retraso antes de ocultar
  });
});

function myFunction(x) {
  x.classList.toggle("change");
}


document.addEventListener("DOMContentLoaded", function () {
  // Cargar Header
  fetch("/src/views/header.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("header-placeholder").innerHTML = data;

      // Detectar la página actual
      let currentPage = window.location.pathname;
      let loginButton = document.querySelector(".account-btn");
      let menuItems = document.querySelectorAll(".navbar-nav .nav-item");
      let searchContainer = document.querySelector(".search-container");

      // Lógica para Login y Registro
      if (currentPage.includes("login.html")) {
        if (loginButton) {
          loginButton.innerHTML = '<i class="fa-solid fa-user-plus"></i> Registrarse';
          loginButton.href = "/src/pages/register.html";
        }
        menuItems.forEach(item => {
          if (item.textContent.includes("404")) item.style.display = "none";
        });
        if (searchContainer) searchContainer.style.display = "none";
      }

      if (currentPage.includes("register.html")) {
        if (loginButton) {
          loginButton.innerHTML = '<i class="fa-solid fa-user"></i> Iniciar Sesión';
          loginButton.href = "/src/pages/login.html";
        }
        menuItems.forEach(item => {
          if (item.textContent.includes("404")) item.style.display = "none";
        });
        if (searchContainer) searchContainer.style.display = "none";
      }

      if (currentPage.includes("contact.html")) {
        if (loginButton) {
          loginButton.innerHTML = '<i class="fa-solid fa-user"></i> Iniciar Sesión';
          loginButton.href = "/src/pages/login.html";
        }
        menuItems.forEach(item => {
          if (item.textContent.includes("404")) item.style.display = "none";
        });
        if (searchContainer) searchContainer.style.display = "none";
      }
    });

  // Cargar Footer
  fetch("/src/views/footer.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("footer-container").innerHTML = data;
    });
});

