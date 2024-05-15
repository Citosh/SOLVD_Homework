// Class Book represents a book.
// Methods:
// constructor() receives 5 arguments: string title, string author, integer isbn, float price, boolean availability.

export default class Book {
    constructor(title, author, ISBN, price, availability) {
        this._title = title;
        this._author = author;
        this._ISBN = ISBN;
        this._price = price;
        this._availability = availability;
    }

    get title() {
        return this._title;
    }

    set title(newTitle) {
        this._title = newTitle;
    }

    get author() {
        return this._author;
    }

    set author(newAuthor) {
        this._author = newAuthor;
    }

    get ISBN() {
        return this._ISBN;
    }

    set ISBN(newISBN) {
        this._ISBN = newISBN;
    }

    get price() {
        return this._price;
    }

    set price(newPrice) {
        this._price = newPrice;
    }

    get availability() {
        return this._availability;
    }

    set availability(newAvailability) {
        this._availability = newAvailability;
    }
}
