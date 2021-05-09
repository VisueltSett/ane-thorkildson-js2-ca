export function saveToLocalStorage(favoriteArticles){

    localStorage.setItem("favorites",JSON.stringify(favoriteArticles));
    
}


const jwtKey = "jwtToken";
const userKey = "user";


export function saveJWTToken(jwtToken) {
    saveLoginToStorage(jwtKey, jwtToken);
}

export function getJWTToken() {
    return getLoginFromStorage(jwtKey);
}

export function saveUserObject(user) {
    saveLoginToStorage(userKey, user);
}


export function getUserObject() {
    const user = getLoginFromStorage(userKey);

    if(user) {
        return user.username;
    }
        return null;
    }

export function clearLocalStorage() {
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("user");
}


function saveLoginToStorage(key, value){
    localStorage.setItem(key,JSON.stringify(value));
}
function getLoginFromStorage(key){
    const value = localStorage.getItem(key);

    if (!value) {
        return [];
    }
    return JSON.parse(value);
}