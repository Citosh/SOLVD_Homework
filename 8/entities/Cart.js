
export default class Cart {
    constructor() {
        this._books = [];
    }

    get books() {
        return this._books;
    }

    set books(newBooks) {
        this._books = newBooks;
    }

    addBook(book) {
        if (book.availability) {
            this._books.push(book);
            console.log(`${book.title} added to the cart.`);
        } else {
            console.log(`${book.title} is not available.`);
        }
    }

    removeBook(ISBN) {
        const index = this._books.findIndex(book => book.ISBN === ISBN);
        if (index !== -1) {
            console.log(`${this._books[index].title} removed from the cart.`);
            this._books.splice(index, 1);
        } else {
            console.log(`Book with ISBN ${ISBN} not found in the cart.`);
        }
    }

    calculateTotal() {
        return this._books.reduce((total, book) => total + book.price, 0);
    }

    clearCart() {
        this._books = [];
    }
}


