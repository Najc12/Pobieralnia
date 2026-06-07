/* =========================
   GENEROWANIE HASŁA DNIA
========================= */

function generateDailyPassword() {

  const today =
    new Date();

  const datePart =
    today.getDate() +
    "-" +
    (today.getMonth() + 1) +
    "-" +
    today.getFullYear();

  return (
    "Craftea-" +
    datePart +
    "-UltraWatch2025"
  );

}

/* =========================
   LOGOWANIE
========================= */

function checkPassword() {

  const password =
    document.getElementById(
      "watch-password"
    ).value;

  /* HASŁO ADMINA */
  const adminPassword =
    "485912m";

  /* HASŁO DNIA */
  const dailyPassword =
    generateDailyPassword();

  if (
    password === adminPassword ||
    password === dailyPassword
  ) {

    /* pokaż filmy */
    document.getElementById(
      "watch-content"
    ).style.display = "block";

    /* ukryj logowanie */
    document.querySelector(
      ".watch-login"
    ).style.display = "none";

  }

  else {

    alert(
      "Nieprawidłowe hasło"
    );

  }

}

/* =========================
   ENTER
========================= */

function handleEnter(event) {

  if (event.key === "Enter") {

    checkPassword();

  }

}

/* =========================
   WYSZUKIWARKA
========================= */

function searchMovies() {

  const input =
    document
    .getElementById(
      "movie-search"
    )
    .value
    .toLowerCase();

  const cards =
    document.querySelectorAll(
      ".watch-card"
    );

  cards.forEach(card => {

    const title =
      card
      .querySelector("h3")
      .textContent
      .toLowerCase();

    if (
      title.includes(input)
    ) {

      card.style.display =
        "block";

    }

    else {

      card.style.display =
        "none";

    }

  });

}

/* =========================
   OTWIERANIE FILMU
========================= */

function openVideo(url) {

  window.open(
    url,
    "_blank"
  );

}

/* =========================
   ROZWIJANIE FILMU
========================= */

function toggleMovie(element) {

  const card =
    element.closest(
      ".watch-card"
    );

  /* zamknij inne */
  document
    .querySelectorAll(
      ".watch-card"
    )
    .forEach(otherCard => {

      if (
        otherCard !== card
      ) {

        otherCard.classList.remove(
          "active"
        );

      }

    });

  /* przełącz obecny */
  card.classList.toggle(
    "active"
  );

}
let currentType = "all";

function setType(type){

  currentType = type;

  filterMovies();

}

function filterMovies(){

  const genre =
    document.getElementById(
      "genre-filter"
    ).value;

  const year =
    document.getElementById(
      "year-filter"
    ).value;

  const cards =
    document.querySelectorAll(
      ".watch-card"
    );

  cards.forEach(card => {

    const cardType =
      card.dataset.type;

    const cardGenre =
      card.dataset.genre;

    const cardYear =
      card.dataset.year;

    const typeMatch =
      currentType === "all" ||
      cardType === currentType;

    const genreMatch =
      genre === "all" ||
      cardGenre === genre;

    const yearMatch =
      year === "all" ||
      cardYear === year;

    if(
      typeMatch &&
      genreMatch &&
      yearMatch
    ){
      card.style.display = "block";
    }
    else{
      card.style.display = "none";
    }

  });

}
