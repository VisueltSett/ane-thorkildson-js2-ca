import createNav from "./components/navigation.js";
import {feedbackMessage} from "./components/feedbackMessage.js";
import {filterArticles} from "./ui/filterArticles.js";
import {searchArticles} from "./ui/articlesSearch.js";


createNav();


const url = "http://localhost:1337/articles";


export default async function getArticles(){

try{
    const response = await fetch(url);
    const articles = await response.json();
    console.log(articles);


    filterArticles(articles);

    searchArticles(articles);




}catch(error){
    console.log(error);
    feedbackMessage("error", error, ".articles-container");
}
}

getArticles()
