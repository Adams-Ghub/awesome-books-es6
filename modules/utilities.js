export const showBooks = (bookData, booksContainer) => {
  let cardId = 'odd';
  for (let i = 0; i < bookData.books.length; i++) {
    if (i % 2 === 0) {
      cardId = 'even';
    } else {
      cardId = 'odd';
    }
    const bookCard = document.createElement('div');
    bookCard.classList.add('bookcard');
    bookCard.id = cardId;
    const remButton = document.createElement('button');
    remButton.id = bookData.books[i].id;
    remButton.innerHTML = 'Remove';
    const p = document.createElement('p');
    p.innerHTML = `"${bookData.books[i].title}" by 
        ${bookData.books[i].author}`;
    bookCard.appendChild(p);
    bookCard.appendChild(remButton);
    booksContainer.appendChild(bookCard);
    remButton.addEventListener('click', (e) => {
      const id = e.target.id * 1;
      bookData.deleteBook(id);
      location.reload();
    });
  }
};

export const showPage = (show, hide) => {
  const showElement = document.querySelector(show);
  showElement.classList.remove('hide');
  for (let i = 0; i < Object.keys(hide).length; i++) {
    const hideElement = document.querySelector(hide[i]);
    if (hideElement.classList.contains('hide') === false) {
      hideElement.classList.add('hide');
    }
  }
};