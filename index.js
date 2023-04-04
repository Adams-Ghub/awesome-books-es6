import Book from './modules/book.js';
import { DateTime } from './modules/luxor.js';
import domElement from './modules/domElements.js';
import { showBooks, showPage } from './modules/utilities.js';

const theBook = new Book();
const today = DateTime.now();
domElement.time.innerText = today.toLocaleString(DateTime.DATE_HUGE);

domElement.timeSection.appendChild(domElement.time);

domElement.addBtn.addEventListener('click', () => {
  let size;
  if (theBook.books.length === 0) {
      size = 0;
  } else {
      size = theBook.books.length;
  }
  theBook.addBooks(domElement.titleInput.value, domElement.authorInput.value, size);
  domElement.titleInput.value = '';
 domElement.authorInput.value = '';
});

domElement.listPage.addEventListener('click', () => {
  const arr = ['.title-author-box', '.contact-box'];
  showPage(' .book-list-box', arr);
  location.reload();
});

domElement.addPage.addEventListener('click', () => {
  const arr = ['.book-list-box', '.contact-box'];
  showPage('.title-author-box', arr);
});

domElement.contactPage.addEventListener('click', () => {
  const arr = ['.title-author-box', '.book-list-box'];
  showPage(' .contact-box', arr);
});

window.addEventListener('load', () => {
  showBooks(theBook, domElement.booksContainer);
});
