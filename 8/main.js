import {Book, FictionBook, NonFictionBook, Textbook} from "./entities/Book.js"
import User from "./entities/User.js"



// Create Book objects
const fictionBook = new FictionBook("The Great Gatsby", "F. Scott Fitzgerald", "9780743273565", 10.99, true, "Classic");
const nonFictionBook = new NonFictionBook("Sapiens: A Brief History of Humankind", "Yuval Noah Harari", "9780062316097", 15.99, true, "History");
const textbook = new Textbook("Introduction to Computer Science", "John Smith", "9780132151003", 49.99, false, "Computer Science");

// Create User objects
const user1 = new User('Alice', 'alice@example.com',);
const user2 = new User('Bob', 'bob@example.com', );


// User Alice adds books to her cart
user1.cart.addBook(fictionBook); // Output: The Great Gatsby added to the cart.
user1.cart.addBook(nonFictionBook); // Output: 1984 added to the cart.
user1.cart.addBook(textbook); // Output: To Kill a Mockingbird is not available.

// Alice places an order
const orderAlice = user1.createOrder();
orderAlice.printOrderDetails();

// User Bob adds books to his cart
user2.cart.addBook(nonFictionBook); // Output: 1984 added to the cart.
user2.cart.addBook(textbook); // Output: To Kill a Mockingbird is not available.

// Bob places an order
const orderBob = user2.createOrder();
orderBob.printOrderDetails();


// User Alice browses books and adds them to her cart
user1.cart.addBook(fictionBook);
user1.cart.addBook(nonFictionBook);

// Alice places an order
const order1 = user1.createOrder();
order1.printOrderDetails();


// User Bob browses books and adds them to his cart
user2.cart.addBook(nonFictionBook);
user2.cart.addBook(Textbook);

// Bob places an order
const order2 = user2.createOrder();
order2.printOrderDetails();



