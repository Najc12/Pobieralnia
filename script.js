const toggleButton = document.getElementById("theme-toggle");

/* ZAPIS MOTYWU */
if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light-theme");
  toggleButton.textContent = "☀️";
}

/* KLIK */
toggleButton.addEventListener("click", () => {

  document.body.classList.toggle("light-theme");

  if (document.body.classList.contains("light-theme")) {

    toggleButton.textContent = "☀️";
    localStorage.setItem("theme", "light");

  } else {

    toggleButton.textContent = "🌙";
    localStorage.setItem("theme", "dark");

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
