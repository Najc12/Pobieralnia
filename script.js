document.addEventListener("DOMContentLoaded", () => {

  const themeBtn = document.getElementById("theme-toggle");

  if (themeBtn) {

    // wczytaj zapisany motyw
    if (localStorage.getItem("theme") === "light") {
      document.body.classList.add("light-theme");
      themeBtn.textContent = "☀️";
    }

    themeBtn.addEventListener("click", () => {

      document.body.classList.toggle("light-theme");

      if (document.body.classList.contains("light-theme")) {
        themeBtn.textContent = "☀️";
        localStorage.setItem("theme", "light");
      } else {
        themeBtn.textContent = "☾";
        localStorage.setItem("theme", "dark");
      }

    });

  }

});


// LIGHTBOX
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".lightbox .close");

// tylko jeśli istnieje galeria
if (lightbox && lightboxImg && closeBtn) {

  document.querySelectorAll(".gallery img").forEach(img => {

    img.addEventListener("click", () => {

      lightbox.style.display = "flex";
      lightboxImg.src = img.src;

    });

  });

  closeBtn.addEventListener("click", () => {

    lightbox.style.display = "none";

  });

  lightbox.addEventListener("click", (e) => {

    if (e.target === lightbox) {

      lightbox.style.display = "none";

    }

  });

}

// AKTUALNOŚCI
document.querySelectorAll(".news-button").forEach(button => {

  button.addEventListener("click", () => {

    const card = button.parentElement;

    card.classList.toggle("active");

    if (card.classList.contains("active")) {

      button.textContent = "Ukryj";

    } else {

      button.textContent = "Czytaj więcej";

    }

  });

});
// REKRUTACJA
document.querySelectorAll(".recruit-toggle").forEach(button => {

  button.addEventListener("click", () => {

    const card = button.parentElement;

    card.classList.toggle("active");

    if (card.classList.contains("active")) {

      button.textContent = "Ukryj";

    } else {

      button.textContent = "Czytaj więcej";

    }

  });

});
// ENTER W OGLĄDANKO
const passwordInput = document.getElementById("watch-password");
const loginButton = document.getElementById("watch-login-button");

if (passwordInput && loginButton) {

  passwordInput.addEventListener("keypress", (e) => {

    if (e.key === "Enter") {
      loginButton.click();
    }

  });

}
/* =========================
   INTERAKTYWNE TŁO 3D
========================= */

document.addEventListener("mousemove", (e) => {

  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;

  document.body.style.backgroundPosition =
    `${50 + x/2}% ${50 + y/2}%`;

});
/* =========================
   PARALAKSA TŁA
========================= */

const bg = document.getElementById("background-layer");

let mouseX = 0;
let mouseY = 0;

let currentX = 0;
let currentY = 0;

document.addEventListener("mousemove", e => {

  mouseX = (e.clientX / window.innerWidth - 0.5) * 40;
  mouseY = (e.clientY / window.innerHeight - 0.5) * 40;

});

function animateBackground() {

  currentX += (mouseX - currentX) * 0.05;
  currentY += (mouseY - currentY) * 0.05;

  bg.style.transform =
    `translate(${currentX}px, ${currentY}px) scale(1.08)`;

  requestAnimationFrame(animateBackground);
}

animateBackground();
