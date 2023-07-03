document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-icon');
  const navMenu = document.querySelector('nav ul');

  menuToggle.addEventListener('click', function() {
    navMenu.classList.toggle('open'); // Toggle the "open" class on the navigation menu
    menuToggle.classList.toggle('open'); // Toggle the "open" class on the menu icon
  });
});
