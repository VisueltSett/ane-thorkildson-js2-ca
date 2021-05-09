import { feedbackMessage } from "./components/feedbackMessage.js";
import createNav from "./components/navigation.js";
import {getJWTToken} from "./storage/localStorage.js";
import {apiUrl} from "./settings/apiUrl.js";

createNav();

const addArticleForm = document.querySelector(".add-article-form");
const feedbackContainer = document.querySelector(".feedback-container");
const articleTitle = document.querySelector("#title");
const author = document.querySelector("#author");
const published = document.querySelector("#published_at");
const summary = document.querySelector("#summary");


addArticleForm.addEventListener("submit",submitNewArticle);

function submitNewArticle(event){
    event.preventDefault();

    feedbackContainer.innerHTML ="";

const articleTitleValue = articleTitle.value.trim();
const publishedValue = parseFloat(published.value);
const authorValue = author.value.trim();
const summaryValue = summary.value.trim();

console.log(articleTitleValue);

if(articleTitleValue.length === 0 || authorValue.length === 0 || publishedValue.length === 0 || isNaN(published.value) || summaryValue.length === 0){
    return feedbackMessage("warning","Please add valid values to the form inputs", ".feedback-container");
}


addArticle (articleTitleValue, authorValue, publishedValue, summaryValue);

}

async function addArticle (articleTitle, author, published, summary){
    const url = apiUrl + "articles";

    const data = JSON.stringify({title: articleTitle, author: author, published: published, summary: summary});

    const token = getJWTToken();

    const options = {
        method: 'POST',
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization:`Bearer ${token}`,
        },
    };

try {

const response = await fetch(url, options);
const json = await response.json();

if(json.created_at){
    feedbackMessage("success", "Article created successfully", ".feedback-container");
}
}catch (error) {
    console.log(error);
    feedbackMessage("error", "An error occured while creating the article", ".feedback-container");
}


}