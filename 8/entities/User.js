import Order from './Order.js'
import Cart from './Cart.js'

// Class User represents a user of the bookstore.
// Methods:
// constructor() receives 3 arguments: string name, string email, UI userId, and creates Cart class literal.
// createOrder() creates Order class literal, and calls clearCart() method from Catr clas

export default class User {
    constructor(name, email, userID) {
        this._name = name;
        this._email = email;
        this._userID = userID;
        this.cart = new Cart();
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }

    get email() {
        return this._email;
    }

    set email(newEmail) {
        this._email = newEmail;
    }

    get userID() {
        return this._userID;
    }

    set userID(newUserID) {
        this._userID = newUserID;
    }

    createOrder() {
        const order = new Order(this, this.cart.books);
        this.cart.clearCart();
        return order;
    }
}

