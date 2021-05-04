export default function createNav() {
    const {path} = document.location;

const navContainer = document.querySelector(".nav-container");

// const username = getUsername();

// let authLink = `<a class="nav-link ${path === "/login.html" ? "active" : ""}" href="login.html">Login</a>`;

// if (username) {
//     authLink = `<button style="display:inline-block;" id="logout" type="button">Logout</button>`;
//   }

// let welcomeMessage = "";

// if (username){
// welcomeMessage = `<div>Looking good today, <span class="capitalize"> ${username}</span>!</div>`;
// }

let favLink = `<a class="nav-link ${path === "/favorites.html" ? "active" : ""}" href="favorites.html">Favorites <i class="fas fa-star fa-rotate-90"></i><span class="sr-only">(current)</span></a>`;

navContainer.innerHTML = `<nav class="navbar navbar-expand-sm navbar-light bg-light">
<a class="navbar-brand" href="/">Wild Books Publishing</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>

<div class="collapse navbar-collapse" id="navbarTogglerDemo02">
  <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
    <li class="nav-item">
      <a class="nav-link ${path === "/" ? "active" : ""}" href="/">Home<span class="sr-only">(current)</span></a>
    </li>
    <li class="nav-item">
      ${favLink}
    </li>
    <li class="nav-item">
    <div id="welcomeMessage"></div>
    </li>
    <li class="nav-item">
    <div id="logoutBtnContainer"></div>
    </li>
   
  </ul>
</div>
</nav>`;


}