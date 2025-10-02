document.addEventListener("DOMContentLoaded", () => {
  const dots = document.querySelectorAll(".dots span");
  const heroImg = document.querySelector(".hero-img");

  const images = ["arkane.jpg", "arkane2.png", "arkane3.jpg"];
  let index = 0;

  function changeSlide(newIndex) {

    heroImg.classList.remove("fade-in");
    void heroImg.offsetWidth; 

    index = newIndex;
    heroImg.src = images[index];


    heroImg.classList.add("fade-in");


    dots.forEach((dot) => dot.classList.remove("active"));
    dots[index].classList.add("active");
  }


  setInterval(() => {
    index = (index + 1) % images.length;
    changeSlide(index);
  }, 4000);


  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => changeSlide(i));
  });


  changeSlide(0);
});

document.getElementById("searchBtn").addEventListener("click", () => {
  const query = document.getElementById("searchInput").value.toLowerCase();

  if (query.includes("accueil")) {
    window.location.href = "index.html";
  } else if (query.includes("jeux")) {
    window.location.href = "jeux.html";
  } else if (query.includes("histoire")) {
    window.location.href = "histoire.html";
  } else if (query.includes("économie") || query.includes("economie")) {
    window.location.href = "economie.html";
  } else if (query.includes("équipe") || query.includes("equipe")) {
    window.location.href = "equipe.html";
  } else {
    alert("Page non trouvée !");
  }
});
const burger = document.getElementById("burger");
const navbar = document.querySelector(".navbar");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  navbar.classList.toggle("active");
});

