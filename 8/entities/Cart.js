
// Class Cart represents a shopping cart in the online bookstore.
// Methods:
// constructor() doesnt receives arguments and creates books array.
// addBook() method receives Book class literal as an argument and adds this book to the books array.
// removeBook() method receives Book class literal as an argument and removes this book from the books array if it exists. The book will be removed based on the ISBN index.
// calculateTotal() method doesn't receive any arguments and returns the total price of all books currently existing in the books array.
// clearCart() method method doesn't receive arguments and clears books array. this method is used in User class to create Order and clear books from Cart class.

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


