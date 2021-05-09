import { feedbackMessage } from "./components/feedbackMessage.js";
import createNav from "./components/navigation.js";
import {getJWTToken} from "./storage/localStorage.js";
import {apiUrl} from "./settings/apiUrl.js";
import deleteArticleButton from "./components/deleteButton.js";

createNav();


const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

if (!id) {
    document.location.href = "/";
}

const articleUrl = apiUrl + "articles/" + id;

console.log(articleUrl);

const editArticleForm = document.querySelector(".edit-article-form");
const feedbackContainer = document.querySelector(".feedback-container");
const articleTitle = document.querySelector("#title");
const published = document.querySelector("#published_at");
const author = document.querySelector("#author");
const summary = document.querySelector("#summary");
const idInput = document.querySelector("#id");
const loader = document.querySelector(".lds-roller");



(async function() {
    try{
        const response = await fetch(articleUrl);
        const article = await response.json();
        console.log(article);

        articleTitle.value = article.title;
        published.value = article.published;
        author.value = article.author;
        summary.value = article.summary;
        idInput.value = article.id;

        deleteArticleButton(article.id);


    }catch(error){
        console.log(error);
    }finally{
        loader.style.display = "none";
        editArticleForm.style.display = "block";
    }
})();

editArticleForm.addEventListener("submit", saveEdits);

function saveEdits(event) {
    event.preventDefault();

    feedbackContainer.innerHTML="";

const articleTitleValue = articleTitle.value.trim();
const publishedValue = parseInt(published.value);
const authorValue = author.value.trim();
const summaryValue = summary.value.trim();
const idValue = idInput.value;


console.log(articleTitleValue);

if(articleTitleValue.length === 0 || authorValue.length === 0 || publishedValue.length === 0 || isNaN(published.value) || summaryValue.length === 0){
    return feedbackMessage("warning","Please add valid values to the form inputs", ".feedback-container");
}


updateArticle (articleTitleValue, authorValue, publishedValue, summaryValue, idValue);

}

async function updateArticle (title, author, published, summary, id){
    const url = apiUrl + "articles/" + id;
    const data = JSON.stringify({title: articleTitle, author: author, published: published, summary: summary});

    const token = getJWTToken();

    const options = {
        method: 'PUT',
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization:`Bearer ${token}`,
        },
    };
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);

        if (result.updated_at) {
            feedbackMessage("success", "Your edits have been saved successfully!", ".feedback-container");
        }

        if(result.error){
            feedbackMessage("error","There was error saving your edits, please control your input values and try again", ".feedback-container");
        }

    } catch (error) {
        console.log(error);

    }
}