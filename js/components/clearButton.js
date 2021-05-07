import {getCurrentFavorites} from ".././ui/getCurrentFavorites.js";

export default function clearButton(){
    const clearButton = document.querySelector("#clear-button");

    const articlesContainer = document.querySelector(".articles-container");

    clearButton.onclick = (clearStorage) => {
        if(confirm("Are you sure you want to clear all your favorites?")) {
            localStorage.clear();
            articlesContainer.innerHTML = `<div class="feedbackMessage">You have no articles in your favorites list.</div>`;
            clearButton.disabled = true;
        }
    }
}