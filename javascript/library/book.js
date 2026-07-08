"use strict";
const myLibrary = [];
class Book {
    title;
    author;
    pages;
    read;
    ID;
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.ID = crypto.randomUUID();
    }
}
function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read));
}
function displayBooks() {
    const library = document.getElementById("library");
    library.innerHTML = "";
    myLibrary.forEach((book) => {
        const card = document.createElement("div");
        card.classList.add("book-card");
        const title = document.createElement("h3");
        title.textContent = book.title;
        const author = document.createElement("p");
        author.textContent = `By ${book.author}`;
        const pages = document.createElement("p");
        pages.textContent = `${book.pages} pages`;
        const readStatus = document.createElement("span");
        readStatus.textContent = book.read ? "Read" : "Not read yet";
        readStatus.classList.add(book.read ? "status-read" : "status-unread");
        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(readStatus);
        library.appendChild(card);
    });
}
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, true);
addBookToLibrary("1984", "George Orwell", 328, false);
addBookToLibrary("Dune", "Frank Herbert", 412, true);
displayBooks();
const dialog = document.getElementById("input-dialog");
const showButton = document.querySelector('[command="show-modal"]');
const closeButton = document.getElementById("close-dialog");
const form = document.getElementById("book-form");
showButton.addEventListener("click", () => {
    dialog.showModal();
});
closeButton.addEventListener("click", () => {
    dialog.close();
});
form.addEventListener("submit", (e) => {
    const titleInput = document.getElementById("title");
    const authorInput = document.getElementById("author");
    const pagesInput = document.getElementById("pages");
    const readInput = document.getElementById("read");
    const title = titleInput.value;
    const author = authorInput.value;
    const pages = parseInt(pagesInput.value, 10);
    const read = readInput.checked;
    addBookToLibrary(title, author, pages, read);
    displayBooks();
    form.reset();
});
