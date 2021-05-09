import createNav from "./components/navigation.js";
import { feedbackMessage } from "./components/feedbackMessage.js";
import { apiUrl } from "./settings/apiUrl.js";
import { saveJWTToken, saveUserObject } from "./storage/localStorage.js";

createNav();

const feedbackContainer = document.querySelector(".feedback-container");
const loginForm = document.querySelector(".login-form");
const username = document.querySelector("#username");
const password = document.querySelector("#password");


loginForm.addEventListener("submit", login);

function login(event) {
event.preventDefault();

feedbackContainer.innerHTML ="";

const usernameValue = username.value.trim();
const passwordValue = password.value.trim();

if(usernameValue.length === 0 || passwordValue.length === 0){
    return feedbackMessage("warning", "Please enter a valid username and password", ".feedback-container");
}

performLogin(usernameValue, passwordValue);
}

async function performLogin(username, password){
    const url = apiUrl+"auth/local";

    const loginData = JSON.stringify({identifier: username, password: password});

    const callOptions = {
        method: "POST",
        body: loginData,
        headers: {
            "Content-Type": "application/json",
        },
    };
    try {
        const response = await fetch(url, callOptions);
        const jsonObject = await response.json();

        console.log("result", jsonObject);

        if(jsonObject.user) {
            saveJWTToken(jsonObject.jwt);
            saveUserObject(jsonObject.user);

            location.href ="/";
        }

    if(jsonObject.error) {
        feedbackMessage("warning","Invalid login details.Please check your info and try again.", ".feedback-container");
    }

    }catch(error){
        console.log(error);
    }

}
