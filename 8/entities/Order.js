
// Class Order represents an order of books made by a user in the bookstore.
// Methods:
// constructor() receives 2 arguments: User class literal, Book class literal and creates context field totalPrice that was calculated by the calculateTotalPrice() method.
// calculateTotalPrice(): doesn't receive any arguments, calculates and returns the total price of books in the books array using the price field.

export default class Order {
    constructor(user, books) {
        this._user = user;
        this._books = books;
        this.totalPrice = books.reduce((total, book) => total + book.price, 0);
    }

    get user() {
        return this._user;
    }

    set user(newUser) {
        this._user = newUser;
    }

    get books() {
        return this._books;
    }

    set books(newBooks) {
        this._books = newBooks;
    }

    printOrderDetails() {
        console.log(`Order for ${this._user.name} (${this._user.email}):`);
        this._books.forEach(book => {
            console.log(`- ${book.title} by ${book.author}: $${book.price}`);
        });
        console.log(`Total Price: $${this.totalPrice}`);
    }
}
