import {clearLocalStorage} from '../storage/localStorage.js';



export default function logout() {
    const logoutButton = document.querySelector("#logoutButton");

        if (logoutButton) {
            logoutButton.onclick = () => { const performLogout = confirm('Are you sure you want to log out?');
        if(performLogout) {
            clearLocalStorage();
            location.href = "/";
        }
    };
    }

 }