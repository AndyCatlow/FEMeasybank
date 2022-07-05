const toggleNavBtn = document.querySelector(".nav-toggle-btn");
const menu = document.querySelector(".nav-list");
const articlesContainer = document.querySelector("#article--cards__container");

toggleNavBtn.addEventListener("click", toggleNav);

let isOpen = false;
function toggleNav() {
  menu.classList.toggle("show");
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
    <img
      src="${article.image}"
      alt="${article.altText}"
      class="article--card__img"
    />
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
