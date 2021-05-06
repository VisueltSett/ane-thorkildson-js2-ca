export function saveToLocalStorage(favoriteArticles){

    localStorage.setItem("favorites",JSON.stringify(favoriteArticles));
    
}