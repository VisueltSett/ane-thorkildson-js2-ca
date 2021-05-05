export function getFavorites(){
    const starredArticles = localStorage.getItem("favorites");

    if(!favorites){
        return [];
    }else {
        return JSON.parse(favorites);
    }
}