import { feedbackMessage } from "./components/feedbackMessage.js";
import createNav from "./components/navigation.js";
import {getJWTToken} from "./storage/localStorage.js";
import {apiUrl} from "./settings/apiUrl.js";

createNav();

const addArticleForm = document.querySelector(".add-article-form");
const FeedbackContainer = document.querySelector(".feedback-container");
const articleName = document.querySelector("#name");
const author = document.querySelector("#author");
const summary = document.querySelector("#summary");


addArticleForm.addEventListener("submit",submitNewArticle);

function submitNewArticle(event){
    event.preventDefault();

    FeedbackContainer.innerHTML ="";

const articleNameValue = articleName.value.trim();
const authorValue = author.value.trim();
const summaryValue = summary.value.trim();

console.log(articleNameValue);

if(articleNameValue.length === 0 || authorValue.length === 0 || summaryValue.length === 0){
    return feedbackMessage("warning","Please add valid values to the form inputs", ".feedback-container");
}


addArticle (articleNameValue, authorValue, summaryValue);

}

async function addArticle (articleName, author, summary){
    const url = apiUrl + "articles";

    const data = JSON.stringify({name: articleName, author: author, summary: summary});

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