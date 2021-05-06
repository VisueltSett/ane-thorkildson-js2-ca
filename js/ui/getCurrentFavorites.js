export function getCurrentFavorites(){
    const favoriteArticles = localStorage.getItem("favorites");
    console.log("looking for", favoriteArticles);

    if(!favoriteArticles){
        return [];
    }else {
        return JSON.parse(favoriteArticles);
    }
}