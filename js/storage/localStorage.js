export function saveToLocalStorage(favoriteArticles){

    localStorage.setItem("favorites",JSON.stringify(favoriteArticles));
    
}


const jwtKey = "token";
const userKey = "user";


export function saveLoginJWTToken(token) {
    saveLoginToStorage(jwtKey, token);
}

export function getJWTToken() {
    return getLoginFromLocalStorage(jwtKey);
}

export function saveUserObject(user) {
    saveLoginToStorage(userKey, user);
}


export function getUsernameFromLocalStorage(username) { 
    const user = getLoginFromLocalStorage(userKey);

    if(user) {
        return user.username;
    }else {
        return null;
    }
}


function saveLoginToStorage(key, value){
    localStorage.setItem(key,JSON.stringify(value));
}
function getLoginFromLocalStorage(key){
    const value = localStorage.getItem(key);

    if (!value) {
        return [];
    }
    return JSON.parse(value);
}