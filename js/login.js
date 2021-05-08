import createNav from "./components/navigation.js";
import { feedbackMessage } from "./components/feedbackMessage.js";
import { apiUrl } from "./settings/apiUrl.js";
import { saveLoginJWTToken, saveUserObject } from "./storage/localStorage.js";

createNav();

const feedbackContainer = document.querySelector(".feedback-container");
const loginForm = document.querySelector(".login-form");
const username = document.querySelector("#username");
const password = document.querySelector("#password");


loginForm.addEventListener("submit", login);

function login(event) {
event.preventDefault();

feedbackContainer.innerHTML ="";

const enteredUsername = username.value.trim();
const enteredPassword = password.value.trim();

if(enteredUsername.length === 0 || enteredPassword.length === 0){
    return feedbackMessage("warning", "Please enter a valid username and password", ".feedback-container");
}

performLogin(enteredUsername, enteredPassword);
}

async function performLogin(username, password){
    const url= apiUrl+"auth/local";

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
    const json = response.json();

    console.log("result", json);

    if(json.user) {
        saveLoginJWTToken(json.jwt);
        saveUserObject(json.user);

        location.href ="/";
    }

    if(json.error) {
        feedbackMessage("warning","Invalid login details.Please check your info and try again.",".feedback-container");
    }

}catch(error){
    console.log(error);
}

}
