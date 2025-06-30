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
      const hamburger = document.querySelector('.hamburger');
      const navLinks = document.getElementById('navLinks');
      
      hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
      });
    });
  </script>
