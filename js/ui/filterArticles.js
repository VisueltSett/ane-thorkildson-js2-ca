import {getCurrentFavorites} from "./getCurrentFavorites.js";
import {saveToLocalStorage} from ".././storage/localStorage.js";


const articlesContainer = document.querySelector(".articles-container");

const favorites = getCurrentFavorites();

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
        
        const publicationDate = month + "/" + dte + "/" + year;

        let favoriteStar = "far";

        const isArticleInFavArray = favorites.find(function(favoriteArticle) {
    return parseInt(favoriteArticle.id) === article.id;
        });

        console.log(isArticleInFavArray);

        if(isArticleInFavArray) {
            favoriteStar = "fas";
        }


        articlesContainer.innerHTML += `<a class="article" href="articleDetails.html?id=${article.id}">
        <h3><span>Title: </span> ${article.title}</h3>
        <div><span class="underline">Author:</span><p>${article.author}</p></div>
        <div><span class="underline">Published:</span><p>${publicationDate}</p></div>
        <div><span class="underline">Summary:</span> <p id="articleSummary">${article.summary}</></div>
        <div class="favorite"><span>Add to favorites</span> <i class="${favoriteStar} fa-star" data-id="${article.id}" data-title="${article.title}" data-author="${article.author}" data-published="${month}/${dte}/${year}" data-summary="${article.summary}"></i></div>
        </a>`;

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
            const starAuthor = this.dataset.author;
            const starPublished = this.dataset.published;
            const starSummary = this.dataset.summary;

            const currentFavorites = getCurrentFavorites();

            console.log("getCurrentFavorites", currentFavorites);

            const checkIfArticleExist = currentFavorites.find(function (existingArticle){
                return existingArticle.id === starId;
            });

            console.log("articleAlreadyExist", checkIfArticleExist);

            if(!checkIfArticleExist){
                const newArticle = {id: starId, title: starTitle, author: starAuthor, published: starPublished, summary: starSummary};

                currentFavorites.push(newArticle);

                saveToLocalStorage(currentFavorites);

            } else {
               const newArticlesArray = currentFavorites.filter((existingArticle) => existingArticle.id !== starId);
            saveToLocalStorage(newArticlesArray);

            console.log("this is", newArticlesArray);

            }
            
        }

    }

