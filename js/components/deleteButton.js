import {getJWTToken} from ".././storage/localStorage.js";
import {apiUrl} from ".././settings/apiUrl.js";

export default function deleteArticleButton(id) {

const deleteContainer = document.querySelector(".delete-container");

deleteContainer.innerHTML = `<button type="button" id="delete-button">Delete Article</button>`;

const deleteButton = document.querySelector("#delete-button");

deleteButton.onclick = async function () {
    console.log(id);

    const performDelete = confirm("Do you really want to delete this article?");

    console.log(performDelete);

    if (performDelete) { 
        const url = apiUrl + "articles/" + id;

        const jwtToken = getJWTToken();

        const callOptions = {
            method: "DELETE",
            headers: {
                Authorization:`Bearer ${jwtToken}`,
            },
        };
        try {
            const response = await fetch(url,callOptions);
            const result = await response.json();

            location.href = "/";

            console.log(result);

        }catch(error) {
            console.log(error);
        }
    }
}
}