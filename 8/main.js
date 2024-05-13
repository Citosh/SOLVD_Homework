// Class Book represents a book.
// Methods:
// constructor() receives 5 arguments: string title, string author, integer isbn, float price, boolean availability.

class Book {
    constructor(title, author, isbn, price, availability) {
      this.title = title
      this.author = author
      this.isbn = isbn
      this.price = price
      this.availability = availability
    }

  }
  


// Class User represents a user of the bookstore.
// Methods:
// constructor() receives 3 arguments: string name, string email, UI userId.

  class User {
    
    constructor(name, email, userId) {
      this.name = name
      this.email = email
      this.userId = userId
    }
  }
  
// Class Cart represents a shopping cart in the online bookstore.
// Methods:
// constructor() receives 1 argument: User class literal as an argument and creates context fields user and books.
// addBook() method receives Book class literal as an argument and adds this book to the books array.
// removeBook() method receives Book class literal as an argument and removes this book from the books array if it exists. The book will be removed based on the ISBN index.
// calculateTotal() method doesn't receive any arguments and returns the total price of all books currently existing in the books array.
// createOrder() method doesn't receive any arguments as well. The purpose of this method is to create an Order class literal for further purchase processing.

// Interaction explanation:
// The user entity with a cart has a one-to-many relationship, so one user can have many carts.
 
  class Cart {

    constructor(user) {
      this.user = user
      this.books = []
    }

    addBook(book){
        if(book.availability)
            this.books.push(book)
        else 
            console.log('availabile')
    }

    removewBook(bookToRemove){
        this.books = this.books.filter(book => book.isbn != bookToRemove.isbn)
    }

    calculateTotal() {
        let total = 0
        this.books.forEach(book => {
          total += book.price
        });
        return total
    }
    
    createOrder(){
        const order = new Order(this.user, this.books);
        delete this
        return order;
    }
  }

// Class Order represents an order of books made by a user in the bookstore.
// Methods:
// constructor() receives 2 arguments: User class literal, Book class literal and creates context field totalPrice that was calculated by the calculateTotalPrice() method.
// calculateTotalPrice(): doesn't receive any arguments, calculates and returns the total price of books in the books array using the price field.

  class Order {
    constructor(user, books) {
        this.user = user
        this.books = books
        this.totalPrice = this.calculateTotalPrice()
    }

    calculateTotalPrice() {
        let total = 0
        this.books.forEach(book => {
        total += book.price
        })
        return total
  }

}
const book1 = new Book('title1', 'author1', 1, 10.99, true)
const book2 = new Book('title2', 'author2', 2, 13.99, true)

const user1 = new User('name1', 'name1.gmail.com', 1 )


const cartForuser1 = new Cart(user1)

cartForuser1.addBook(book1)
cartForuser1.addBook(book2)

// console.log(cartForuser1)

cartForuser1.removewBook(book1)

// console.log(cartForuser1)

cartForuser1.addBook(book2)

const orderFromuser1 = cartForuser1.createOrder()

console.log(orderFromuser1)

