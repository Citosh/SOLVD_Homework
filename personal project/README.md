# Personal project Documentation (task #7)

## Content

1. [Description](#description)
2. [Technical requirements](#technical-requirements)
3. [Base URL](#base-url)
4. [API Documentation](#api-documentation)
    1. [Endpoint auth/registration](#1-endpoint-authregistration) 
    2. [Endpoint auth/login](#2-endpoint-authlogin) 
    3. [Endpoint user/getproducts](#3-endpoint-usergetproducts) 
    4. [Endpoint user/getproductbyname](#4-endpoint-usergetproductbyname) 
    5. [Endpoint user/addtocart](#5-endpoint-useraddtocart)
    6. [Endpoint user/makepurchase](#6-endpoint-usermakepurchase)
    7. [Endpoint manager/addproduct](#7-endpoint-manageraddproduct)
5. [Install](#install)

---

## Description

This project is a RESTful API for a clothes store, developed using Node.js and Express. It leverages PostgreSQL for database management and employs JSON Web Tokens (JWT) for secure authentication. Password hashing ensures user credentials are stored safely. The API features a robust role-based access control system, allowing different permissions for users, managers, and admins.

---

## Technical requirements

- Programming language - Javascript
- Database - PostgreSQL

---

## Base URL

`http://localhost:3000`

---

## API Documentation

### 1. Endpoint `auth/registration`

- Purpose: register user and save data to DB

> Request
```
curl -X 'POST' \\
‘http://localhost:3000/auth/registration’ \\
{
"username": "username",
"password": "password"
}
```

> Response

```
```

----

### 2. Endpoint `auth/login`

- Purpose: autorize user and create access token

> Request

 ```
curl -X 'GET' \\
‘http://localhost:3000/auth/login’ \\
{
"username": "username",
"password": "password"
}
```

> Response

```
> {token : "token"}
```

---


### 3. Endpoint `user/getproducts`

- Purpose: get all products

> Request

 ```
curl -X 'GET' 'http://localhost:3000/user/getproducts' \\
-H 'Authorization: Bearer your_token_here'\\


```

> Response

```
```

---

### 4. Endpoint `user/getproductbyname`

- Purpose: get exact product by name 

> Request

 ```
curl -X 'GET' \\
‘http://localhost:3000/user/getproductbyname’ \\
-H "Authorization: Bearer your_token_here"
{
"name": "name",
}
```

> Response

```
```

---

### 5. Endpoint `user/addtocart`

- Purpose: add product to user`s cart

> Request

 ```
curl -X 'POST' \\
‘http://localhost:3000/user/addtocart’ \\
-H "Authorization: Bearer your_token_here"
{
"product": "product",
"quantity" : 2
}
```

> Response

```
```

---


### 6. Endpoint `user/makepurchase`

- Purpose: make purchase and empty user`s cart

> Request

 ```
curl -X 'POST' \\
‘http://localhost:3000/user/makepurchase’ \\
-H "Authorization: Bearer your_token_here"
```

> Response

```
```

---


### 7. Endpoint `manager/addproduct`

- Purpose: set product quantity

> Request

 ```
curl -X 'POST' \\
‘http://localhost:3000/manager/addproduct’ \\
-H "Authorization: Bearer your_token_here"
{
    "product": "product",
    "quantity": 100
}
```

> Response

```
```

---

## Install 

```

npm install
```







