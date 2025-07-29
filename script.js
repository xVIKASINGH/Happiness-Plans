document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');

  hamburger.onclick = () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  };

  document.querySelectorAll('.nav-link').forEach(link =>
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    })
  );

  document.querySelectorAll('a[href^="#"]').forEach(anchor =>
    anchor.addEventListener('click', e => {
      e.preventDefault();
      document.querySelector(anchor.getAttribute('href'))?.scrollIntoView({ behavior: 'smooth' });
    })
  );


  function showToast(message) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.classList.add("show");

    setTimeout(() => {
      toast.classList.remove("show");
    }, 3000); 
  }

  document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();



    showToast("Message sent successfully!");

    this.reset();
  });
});


