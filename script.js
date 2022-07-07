const toggleNavBtn = document.querySelector(".nav-toggle-btn");
const menu = document.querySelector(".nav-list");
const overlay = document.querySelector(".overlay");
const articlesContainer = document.querySelector("#article--cards__container");

toggleNavBtn.addEventListener("click", toggleNav);

let isOpen = false;
function toggleNav() {
  menu.classList.toggle("show");
  overlay.classList.toggle("show-overlay");
  isOpen = !isOpen;
  return (toggleNavBtn.src = isOpen
    ? "./images/icon-close.svg"
    : "./images/icon-hamburger.svg");
}

function getArticlesData() {
  fetch("articles.json")
    .then((response) => response.json())
    .then((data) => {
      getArticlesHtml(data);
    });
}

function getArticlesHtml(arr) {
  let articlesHtml = "";
  arr.forEach((article) => {
    articlesHtml += `
    <div class="article--card">
    <div class="article--card__img__container">
    <img
      src="${article.image}"
      alt="${article.altText}"
      class="article--card__img"
    />
    </div>
    <div class="article--card--text__container">
      <p class="article--card__author">By ${article.author}</p>
      <h3 class="article--card__title">
      ${article.title}
      </h3>
      <p class="article--card__text">
      ${article.text}
      </p>
    </div>
  </div>
</div>
    `;
  });
  articlesContainer.innerHTML = articlesHtml;
}
getArticlesData();
