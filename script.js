document.addEventListener("DOMContentLoaded", () => {
  const dots = document.querySelectorAll(".dots span");
  const heroImg = document.querySelector(".hero-img");

  const images = ["arkane.jpg", "arkane2.png", "arkane3.jpg"];
  let index = 0;

  function changeSlide(newIndex) {
    // Effet fade-out
    heroImg.classList.remove("fade-in");
    void heroImg.offsetWidth; // hack pour relancer l'animation CSS

    index = newIndex;
    heroImg.src = images[index];

    // Effet fade-in
    heroImg.classList.add("fade-in");

    // Gestion des dots
    dots.forEach((dot) => dot.classList.remove("active"));
    dots[index].classList.add("active");
  }

  // Auto-slide
  setInterval(() => {
    index = (index + 1) % images.length;
    changeSlide(index);
  }, 4000);

  // Clic sur les dots
  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => changeSlide(i));
  });

  // Init
  changeSlide(0);
});
