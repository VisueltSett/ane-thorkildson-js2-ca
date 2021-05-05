import {getFavorites} from "./favoriteFuncs.js"
const articlesContainer = document.querySelector(".articles-container");


export function filterArticles(articlesToFilter) {

articlesContainer.innerHTML = "";

articlesToFilter.forEach(function(article) {

    const published = new Date(article.published_at);
    const year = published.getFullYear();
    const month = published.getMonth()+1;
    const dte = published.getDate();

    if (dte < 10){
        dte = "0" + dte;
    }
    if (month<10){
        month= "0" + month;
    }

    console.log(year, month, dte);

    let favoriteStar = "far";


    articlesContainer.innerHTML += `<div class="article"> 
    <h3><span>Title: </span> ${article.title}</h3>
    <div><span class="underline">Author:</span><p>${article.author}</p></div>
    <div><span class="underline">Published:</span><p>${month}/${dte}/${year}</p></div>
    <div><span class="underline">Summary:</span> <p id="summary">${article.summary}</></div>
    <div class="favorite"><span>Add to favorites</span> <i class="${favoriteStar} fa-star" data-id="${article.id}" data-title="${article.title}"></i></div>
    </div>`;

});


const addToFavoritesBtn = document.querySelectorAll(".article i");
 console.log(addToFavoritesBtn);

addToFavoritesBtn.forEach((star) => {
    star.addEventListener("click", starClick);
});

function starClick() {
        this.classList.toggle("fas");
        this.classList.toggle("far");

        const starId = this.dataset.id;
        const starTitle = this.dataset.title;

        const currentFavorites = getFavorites();

    }


}

