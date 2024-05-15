import Book from "./entities/Book.js"
import User from "./entities/User.js"



// Create Book objects
const book1 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', '1234567890', 10.99, true);
const book2 = new Book('1984', 'George Orwell', '2345678901', 8.99, true);
const book3 = new Book('To Kill a Mockingbird', 'Harper Lee', '3456789012', 12.99, false);

// Create User objects
const user1 = new User('Alice', 'alice@example.com', 'U001');
const user2 = new User('Bob', 'bob@example.com', 'U002');


// User Alice adds books to her cart
user1.cart.addBook(book1); // Output: The Great Gatsby added to the cart.
user1.cart.addBook(book2); // Output: 1984 added to the cart.
user1.cart.addBook(book3); // Output: To Kill a Mockingbird is not available.

// Alice places an order
const orderAlice = user1.createOrder();
orderAlice.printOrderDetails();

// User Bob adds books to his cart
user2.cart.addBook(book2); // Output: 1984 added to the cart.
user2.cart.addBook(book3); // Output: To Kill a Mockingbird is not available.

// Bob places an order
const orderBob = user2.createOrder();
orderBob.printOrderDetails();


// User Alice browses books and adds them to her cart
user1.cart.addBook(book1);
user1.cart.addBook(book2);

// Alice places an order
const order1 = user1.createOrder();
order1.printOrderDetails();


// User Bob browses books and adds them to his cart
user2.cart.addBook(book2);
user2.cart.addBook(book3);

// Bob places an order
const order2 = user2.createOrder();
order2.printOrderDetails();



