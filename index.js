import { Book } from "./modules/book.js";

const addBtn = document.querySelector('#btn');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const listPage = document.querySelector('#list');
const addPage = document.querySelector('#add');
const contactPage = document.querySelector('#contact');


const theBook = new Book()


addBtn.addEventListener('click', () => {
    let size;
    if (theBook.books.length == null) {
        size = 0;
    } else {
        size = theBook.books.length;
    }
    theBook.addBooks(titleInput.value, authorInput.value, size);
    titleInput.value = '';
    authorInput.value = '';
});



const showBooks = () => {
    const booksContainer = document.querySelector('.books-container');
    const bookData = theBook.displayBooks();

    let cardId = 'odd';
    for (let i = 0; i < bookData.length; i++) {
        if (i % 2 === 0) {
            cardId = 'even';
        } else {
            cardId = 'odd';
        };

        const bookCard = document.createElement("div");
        bookCard.classList.add('bookcard');
        bookCard.id = cardId;
        const remButton = document.createElement("button")
        remButton.id = bookData[i].id;
        remButton.innerHTML = 'Remove';
        const p = document.createElement('p');
        p.innerHTML = `"${bookData[i].title}" by 
        ${bookData[i].author}`
        bookCard.appendChild(p);
        bookCard.appendChild(remButton);
        booksContainer.appendChild(bookCard)
        remButton.addEventListener('click', (e) => {
            let id = e.target.id * 1;
            theBook.deleteBook(id)
            location.reload()
        })

    }
}

const showPage = (show, hide) => {
    const showElement = document.querySelector(show);
    showElement.classList.remove('hide');
    for (let i = 0; i < Object.keys(hide).length; i++) {
        const hideElement = document.querySelector(hide[i]);
        if (hideElement.classList.contains('hide') === false) {
            hideElement.classList.add('hide');
        }
    }
}

listPage.addEventListener('click', () => {
    const arr = ['.title-author-box', '.contact-box'];
    showPage(' .book-list-box', arr);
    location.reload();
});

addPage.addEventListener('click', () => {
    const arr = ['.book-list-box', '.contact-box'];
    showPage('.title-author-box', arr);
});

contactPage.addEventListener('click', () => {
    const arr = ['.title-author-box', '.book-list-box'];
    showPage(' .contact-box', arr);
});

window.addEventListener('load', () => {
    showBooks();
});
