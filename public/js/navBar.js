document.querySelectorAll('.navbar-burger').forEach(function (navbarBurger) {
  navbarBurger.addEventListener('click', function () {
    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    document.querySelectorAll('.navbar-burger').forEach(function (navbarBurger) {
      navbarBurger.classList.toggle('is-active');
    });
    document.querySelectorAll('.navbar-menu').forEach(function (navbarMenu) {
      navbarMenu.classList.toggle('is-active');
    });
  });
});

// $(document).ready(function () {
//   // Check for click events on the navbar burger icon
//   $('.navbar-burger').click(function () {
//     // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
//     $('.navbar-burger').toggleClass('is-active');
//     $('.navbar-menu').toggleClass('is-active');
//   });
// });
