import {getUserObject} from ".././storage/localStorage.js";
import logout from "./logoutButton.js";

export default function createNav() {
    const {pathname} = document.location;
    console.log(pathname);

  const navContainer = document.querySelector(".nav-container");

  const username = getUserObject();

  let favoritesLink = `<a class="nav-link ${pathname === "/favorites.html" ? "active" : ""}" href="favorites.html">Favorites <i id="smallStar" class="fas fa-star fa-rotate-90"></i><span class="sr-only">(current)</span></a>`;

  let loginLink = `<a class="nav-link ${pathname === "/login.html" ? "active" : ""}" href="login.html">Login<span class="sr-only">(current)</span></a>`;

 if (username) {
    loginLink = `<button id="logoutButton" type="button">Logout</button>`;
  }

let addNewArticle = "";
let welcomeMessage = "";

if (username) {
  addNewArticle = `<a class="nav-link ${pathname === "/addNewArticle.html" ? "active" : ""}" href="addNewArticle.html">Add Article<span class="sr-only">(current)</span></a>`;
}

if (username){
welcomeMessage = `<div>Happy to see you,<br/><span class="capitalize"> ${username}</span>!</div>`;
 }



navContainer.innerHTML = `<nav class="navbar navbar-expand-sm navbar-dark bg-dark">
<a class="navbar-brand" href="/">Wild Articles</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>

<div class="collapse navbar-collapse" id="navbarTogglerDemo02">
  <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
    <li class="nav-item">
      <a class="nav-link ${pathname === "/" ? "active" : ""}" href="/">Home<span class="sr-only">(current)</span></a>
    </li>
    <li class="nav-item">
      ${favoritesLink}
    </li>
    <li class="nav-item" id="addNewArticle">
    ${addNewArticle}
    </li>
    <li class="nav-item" id="welcomeMessage">
    ${welcomeMessage}
    </li>
    <li class="nav-item">
    ${loginLink}
    </li>
  </ul>
</div>
</nav>`;

logout();

}