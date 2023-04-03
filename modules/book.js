export class Book {
    constructor() {
        this.books = JSON.parse(localStorage.getItem('books')) || [];
    }

    addBooks(title, author, id) {
        const newBook = { id, title, author };
        this.books.push(newBook);
        localStorage.setItem('books', JSON.stringify(this.books));
    }

    deleteBook(id) {
        const { books } = this;
        const filtered = books.filter((book) => book.id !== id);
        localStorage.setItem('books', JSON.stringify(filtered));
    }

    displayBooks() {
        return this.books;
    }
}