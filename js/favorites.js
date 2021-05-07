import createNav from "./components/navigation.js";
import {getCurrentFavorites} from "./ui/getCurrentFavorites.js";
import clearButton from "./components/clearButton.js";

createNav();

const favorites = getCurrentFavorites();

clearButton();

const articlesContainer = document.querySelector(".articles-container");


if (favorites.length === 0) {
    articlesContainer.innerHTML = `<div class="feedbackMessage">You have not yet added any articles to your favorites list.</div>`;
}



favorites.forEach((favorite) => {

    articlesContainer.innerHTML += `<div class="article">
    <h3><span>Title: </span> ${favorite.title}</h3>
    <div><span class="underline">Author:</span><p>${favorite.author}</p></div>
    <div><span class="underline">Published:</span><p>${favorite.published}</p></div>
    <div><span class="underline">Summary:</span> <p id="summary">${favorite.summary}</></div>
    <div class="favorite"><i class="fas fa-star" data-id="${favorite.id}" data-title="${favorite.title} data-author="${favorite.author}" data-published="${favorite.published}" data-summary="${favorite.summary}"></i></div>
    </div>`;

});