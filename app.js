let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").checked;

    let newBook = new Book(title, author, pages, read );
}

let newBookBtn = document.getElementById("newBook");
newBookBtn.addEventListener('click', ()=> {
    let form = document.getElementById("form");
    form.style.display = "block";
})