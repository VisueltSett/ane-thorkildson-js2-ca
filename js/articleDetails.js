import createNav from "./components/navigation.js";
import {feedbackMessage} from "./components/feedbackMessage.js";
import { apiUrl } from "./settings/apiUrl.js";


createNav();

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

if (!id) {
    document.location.href = "/";
}

const articleUrl = apiUrl + "articles/" + id;

console.log(articleUrl);

const articlesContainer = document.querySelector(".articles-container");

(async function () {
    try {
        const response = await fetch(articleUrl);
        const articleDetails = await response.json();

        console.log(articleDetails);

        articlesContainer.innerHTML ="";

        document.title = articleDetails.title;

        articlesContainer.innerHTML = `<a class="article" href="editArticle.html?id=${articleDetails.id}">
    <h3><span>Title: </span> ${articleDetails.title}</h3>
    <div><span class="underline">Author:</span><p>${articleDetails.author}</p></div>
    <div><span class="underline">Published:</span><p>${articleDetails.published}</p></div>
    <div><span class="underline">Summary:</span> <p id="articleSummary">${articleDetails.summary}</></div>
    <div class="favorite"><i class="fas fa-star" data-id="${articleDetails.id}" data-title="${articleDetails.title} data-author="${articleDetails.author}" data-published="${articleDetails.published}" data-summary="${articleDetails.summary}"></i></div>
    </a>`;


    } catch (error) {
        feedbackMessage("error", error, ".articles-container");
    }
})();
