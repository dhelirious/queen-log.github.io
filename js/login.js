document.addEventListener("DOMContentLoaded", function() {
    const reveals = document.querySelectorAll('.reveal');
  
    function revealElements() {
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;
  
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add('active');
        } else {
          reveals[i].classList.remove('active');
        }
      }
    }
  
    window.addEventListener('scroll', revealElements);
    revealElements(); // Llamada inicial para elementos visibles sin scroll
  });