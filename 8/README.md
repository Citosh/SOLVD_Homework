# Bookstore Documentation

## Classes

### Book

Represents a generic book.

#### Properties

- `title` (string): The title of the book.
- `author` (string): The author of the book.
- `ISBN` (string): The ISBN (International Standard Book Number) of the book.
- `price` (number): The price of the book.
- `availability` (boolean): Indicates whether the book is available or not.

#### Methods

- `constructor(title, author, ISBN, price, availability)`: Initializes a new Book instance with the provided properties.

### FictionBook

Represents a fictional book, inherits from Book.

#### Properties

- Inherits properties from Book class.
- `genre` (string): The genre of the fiction book.

#### Methods

- `constructor(title, author, ISBN, price, availability, genre)`: Initializes a new FictionBook instance with the provided properties.

### NonFictionBook

Represents a non-fictional book, inherits from Book.

#### Properties

- Inherits properties from Book class.
- `topic` (string): The topic of the non-fiction book.

#### Methods

- `constructor(title, author, ISBN, price, availability, topic)`: Initializes a new NonFictionBook instance with the provided properties.


### Textbook

Represents a textbook, inherits from Book.

#### Properties

- Inherits properties from Book class.
- `subject` (string): The subject of the textbook.

#### Methods

- `constructor(title, author, ISBN, price, availability, subject)`: Initializes a new Textbook instance with the provided properties.


### Cart

Represents a shopping cart for storing books.

#### Properties

- `books` (array): An array of books in the cart.

#### Methods

- `constructor()`: Initializes a new Cart instance with an empty array of books.
- `addBook(book)`: Adds a book to the cart if it's available.
- `removeBook(ISBN)`: Removes a book from the cart by its ISBN.
- `calculateTotal()`: Calculates the total price of all books in the cart.
- `clearCart()`: Removes all books from the cart.

### Order

Represents an order made by a user.

#### Properties

- `user` (User): The user who made the order.
- `books` (array): An array of books in the order.
- `totalPrice` (number): The total price of the order.

#### Methods

- `constructor(user, books)`: Initializes a new Order instance with the provided user and array of books.
- `printOrderDetails()`: Prints the details of the order including user information, books, and total price.

### User

Represents a user of the bookstore.

#### Properties

- `name` (string): The name of the user.
- `email` (string): The email address of the user.
- `userID` (number): The unique identifier of the user.
- `cart` (Cart): The shopping cart of the user.

#### Methods

- `constructor(name, email)`: Initializes a new User instance with the provided name and email.
- `createOrder()`: Creates a new order for the user based on the books in their cart.

## Interactions

- Users can add books to their shopping carts.
- Users can remove books from their shopping carts.
- Users can create orders from the books in their shopping carts.
- Orders contain user information, book details, and total price.
- The total price of an order is calculated based on the prices of the books in the order.

