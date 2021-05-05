import { filterArticles } from "./filterArticles.js";

const articlesSearch = document.querySelector(".articles-search");
const articlesContainer = document.querySelector(".articles-container");


export function searchArticles(articles) {

articlesSearch.onkeyup = function(event) {

    const searchTerm  = event.target.value.trim().toLowerCase();

    const filteredArticles = articles.filter(function(article) {
        if(article.title.toLowerCase().includes(searchTerm) || article.author.toLowerCase().includes(searchTerm)) {
            return true;
        }
    });
    console.log(filteredArticles);

    if (!filteredArticles.length) {
        articlesContainer.innerHTML = `<div class="feedbackMessage">Sorry, none of our current articles match your search quiery.</div>`;
    } else {
        filterArticles(filteredArticles);
    }

   
}
}