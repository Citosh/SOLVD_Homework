import Order from './Order.js'
import Cart from './Cart.js'



export default class User {
    constructor(name, email) {
        this._name = name;
        this._email = email;
        this._userID = Date.now();
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

