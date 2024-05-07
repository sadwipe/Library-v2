import { closeModal } from "./animation.js";

const submitButton = document.querySelector(".submit-book");
const bookName = document.querySelector("#book-name");
const author = document.querySelector("#author");
const numberOfPages = document.querySelector("#pages");
const readStatus = document.querySelector("#read-status");
const bookContainer = document.querySelector(".book-container");

const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(bookName, author, numberOfPages, readStatus) {
    // create the book
    const book = new Book(bookName, author, numberOfPages, readStatus);
    myLibrary.push(book);
    // create the book on webpage
    const card = document.createElement("div");
     const cardTitle = document.createElement("div");
     const cardAuthor = document.createElement("div");
     const cardPages = document.createElement("div");
     const cardButtonGroup = document.createElement("div");
     const deleteCard = document.createElement("button");
     const cardButton = document.createElement("button");

     cardButtonGroup.appendChild(deleteCard)
     cardButtonGroup.appendChild(cardButton)

    card.appendChild(cardTitle);
    card.appendChild(cardAuthor);
    card.appendChild(cardPages);
    card.appendChild(cardButtonGroup);
    cardTitle.textContent = `${bookName}`;
    cardAuthor.textContent = `${author}`;
    cardPages.textContent = `${numberOfPages}`
    deleteCard.textContent = "Delete Book";
    cardButton.textContent = readStatus ? "Read" : "Not Read";
    deleteCard.classList.add("delete-card");
    cardButtonGroup.classList.add("buttons")
    card.classList.add("book");
    cardTitle.classList.add("book-title");
    cardAuthor.classList.add("author");
    cardPages.classList.add("pages");
    readStatus ? cardButton.classList.add("read-status-green") : cardButton.classList.add("read-status-red")
    cardButton.addEventListener("click", () => {
        if(readStatus) {
            cardButton.textContent = "Not Read";
            cardButton.classList.remove("read-status-green");
            cardButton.classList.add("read-status-red")
        } else {
            cardButton.textContent = "Read";
            cardButton.classList.remove("read-status-red")
            cardButton.classList.add("read-status-green");
        }
        readStatus = !readStatus
    })
    cardButton.addEventListener("click", () => {

    })

    bookContainer.appendChild(card);
}

submitButton.addEventListener("click", () => {
    addBookToLibrary(bookName.value, author.value, numberOfPages.value, readStatus.checked)
    closeModal();
});