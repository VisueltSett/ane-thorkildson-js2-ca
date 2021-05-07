import createNav from "./components/navigation.js";
import {feedbackMessage} from "./components/feedbackMessage.js";
import {filterArticles} from "./ui/filterArticles.js";
import {searchArticles} from "./ui/articlesSearch.js";
import { apiUrl } from "./settings/apiUrl.js";


createNav();


const url = apiUrl + "articles";


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
