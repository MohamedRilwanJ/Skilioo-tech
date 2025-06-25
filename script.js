document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', () => {
      const navbarCollapse = document.getElementById('navbarNavAltMarkup');
      const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);

      if (bsCollapse && navbarCollapse.classList.contains('show')) {
        bsCollapse.hide();
      }
    });
  });


document.addEventListener('click', function (event) {
    const navbar = document.querySelector('.navbar');
    const toggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.getElementById('navbarNavAltMarkup');
    const isClickInside = navbar.contains(event.target);

    if (!isClickInside && navbarCollapse.classList.contains('show')) {
      const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
      if (bsCollapse) bsCollapse.hide();
    }
  });