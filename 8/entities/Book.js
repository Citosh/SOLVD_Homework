
class Book {
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

class FictionBook extends Book {
    constructor(title, author, ISBN, price, availability, genre) {
        super(title, author, ISBN, price, availability);
        this._genre = genre;
    }

    get genre() {
        return this._genre;
    }

    set genre(newGenre) {
        this._genre = newGenre;
    }
}

class NonFictionBook extends Book {
    constructor(title, author, ISBN, price, availability, topic) {
        super(title, author, ISBN, price, availability);
        this._topic = topic;
    }

    get topic() {
        return this._topic;
    }

    set topic(newTopic) {
        this._topic = newTopic;
    }
}

class Textbook extends Book {
    constructor(title, author, ISBN, price, availability, subject) {
        super(title, author, ISBN, price, availability);
        this._subject = subject;
    }

    get subject() {
        return this._subject;
    }

    set subject(newSubject) {
        this._subject = newSubject;
    }
}


export {
    Book, 
    FictionBook,
    NonFictionBook,
    Textbook
}