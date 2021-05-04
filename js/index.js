import createNav from "./components/navigation.js";

createNav();

const booksContainer = document.querySelector(".books-container");
const url = "http://localhost:1337/articles";


(async function getBooks(){
try{
    const response = await fetch(url);
    const books = await response.json();
    console.log(books);

    booksContainer.innerHTML ="";


   books.forEach(function(book) {

        const published = new Date(book.published_at);
        const year = published.getFullYear();
        const month = published.getMonth()+1;
        const dte = published.getDate();

        if (dte < 10){
            dte = "0" + dte;
        }
        if (month<10){
            month= "0" + month;
        }

        console.log(year, month, dte);

       booksContainer.innerHTML += `<div class="book"> 
       <h3><span>Title: </span> ${book.title}</h3>
       <div><span class="underline">Author:</span><p>${book.author}</p></div>
       <div><span class="underline">Published:</span><p>${month}/${dte}/${year}</p></div>
       <div><span class="underline">Summary:</span> <p id="summary">${book.summary}</></div>
       <div id="favorite"><span>Add to favorites</span> <i id="favoriteStar" class="fas fa-star"></i></div>
       </div>`;

   });



}catch(error){
    console.log(error)
}
})();
