<script>
      // Update your existing mobile menu toggle script
      menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        // Toggle menu icon animation
        menuToggle.classList.toggle("active");
      });
    </script>

<script>
          document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  
  // Create hamburger icon (optional)
  const hamburger = document.createElement('div');
  hamburger.innerHTML = `
    <span></span>
    <span></span>
    <span></span>
  `;
  menuToggle.insertBefore(hamburger, navLinks);
  
  // Toggle menu on click
  menuToggle.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    this.classList.toggle('active');
  });
  
  // Close menu when clicking on a link (optional)
  const navItems = navLinks.querySelectorAll('a');
  navItems.forEach(item => {
    item.addEventListener('click', function() {
      if (window.innerWidth <= 768) {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');
      }
    });
  });
});
</script>
