const myLibrary: Book[] = [];

class Book {
  ID: string;

  constructor(
    public title: string,
    public author: string,
    public pages: number,
    public read: boolean
  ) {
    this.ID = crypto.randomUUID();
  }
}

function addBookToLibrary(title: string, author: string, pages: number, read: boolean): void {
  myLibrary.push(new Book(title, author, pages, read));
}

function displayBooks(): void {
  const library = document.getElementById("library") as HTMLDivElement;
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


const dialog = document.getElementById("input-dialog") as HTMLDialogElement;
const showButton = document.querySelector('[command="show-modal"]') as HTMLButtonElement;
const closeButton = document.getElementById("close-dialog") as HTMLButtonElement;
const form = document.getElementById("book-form") as HTMLFormElement;

showButton.addEventListener("click", () => {
  dialog.showModal();
});

closeButton.addEventListener("click", () => {
  dialog.close();
});

form.addEventListener("submit", (e) => {
  const titleInput = document.getElementById("title") as HTMLInputElement;
  const authorInput = document.getElementById("author") as HTMLInputElement;
  const pagesInput = document.getElementById("pages") as HTMLInputElement;
  const readInput = document.getElementById("read") as HTMLInputElement;

  const title = titleInput.value;
  const author = authorInput.value;
  const pages = parseInt(pagesInput.value, 10);
  const read = readInput.checked;
  addBookToLibrary(title, author, pages, read);
  displayBooks();
  form.reset();
});

