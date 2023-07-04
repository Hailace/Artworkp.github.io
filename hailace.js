document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-icon');
  const navMenu = document.querySelector('nav ul');

  menuToggle.addEventListener('click', function() {
    navMenu.classList.toggle('open'); // Toggle the "open" class on the navigation menu
    menuToggle.classList.toggle('open'); // Toggle the "open" class on the menu icon
  });
});

// Get all the artwork elements
const artworkElements = document.querySelectorAll('.gallery .artwork');

// Function to rearrange the images in the gallery
function rearrangeImages() {
  artworkElements.forEach((artwork, index) => {
    const columnIndex = Math.floor(index / 3) + 1;
    artwork.style.gridColumn = `auto / span ${columnIndex}`;
  });
}

// Call the function initially to set the initial layout
rearrangeImages();


