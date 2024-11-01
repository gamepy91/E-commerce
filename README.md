# E-commerce Backend Project

This is an E-commerce backend application built using Node.js (Express) and MongoDB. It includes features for user authentication, product management, shopping cart, and order placement.

## Getting Started

### Prerequisites:
- Node.js
- Docker (for containerization)

### Setup:

1. Clone the repository:
   ```bash
   git clone https://github.com/gamepy91/E-commerce.git
   cd E-commerce


2. Install dependencies: npm install
3. Create a .env file in the root directory to set up your environment variables.
   ```
   PORT=3000

   MONGO_URI=mongodb://mongo:27017/ecommerce

   JWT_SECRET=SECRET_TEST
   ```

## Running the Application

Run the development server:
   ```
  docker-compose up -d --build
   ```
This will set up the backend API and connect it to a MongoDB database.
The server will start on http://localhost:3000.

## API Documentation

Authentication API:

1.Register
- Endpoint: POST /api/auth/register
- Description: Create a new user account.
- Request Body:
  ```
   {
    "username": "user123",
    "password": "password123"
   }
   ```
- Response: 200 OK:
  ```
  {
    "message": "User registered successfully"
  }
   ```
2.Login
- Endpoint: POST /api/auth/login
- Description: Create a new user account.
- Request Body:
  ```
   {
    "username": "user123",
    "password": "password123"
   }
   ```
- Response: 200 OK:
  ```
  {
    "token": "jwt_token"
  }
   ```

3.Logout
- Endpoint: POST /api/auth/logout
- Description: Logs out the user (handled on client-side).
- - Response: 200 OK:
  ```
  {
    "message": "Logged out successfully"
  }
   ```

Product Management API:

1.Retrieve Products
- Endpoint: GET /api/products
- Description: Retrieves a list of all products.
- Response: 200 OK:
  ```
   [
    {
        "product_id": "12345",
        "name": "Product Name",
        "description": "Product Description",
        "price": 100,
        "stock": 50,
        "createdAt": "2024-11-01T12:34:56Z"
    }
  ]
   ```

2.Add Product
- Endpoint: POST /api/products
- Description: Adds a new product to the inventory.
- Request Body:
  ```
  {
    "name": "New Product",
    "description": "Product Description",
    "price": 100,
    "stock": 50
  }
   ```
- Response: 200 OK:
  ```
  {
    "name": "New Product",
    "description": "Product Description",
    "price": 100,
    "stock": 50,
    "_id": "6724a9dbf40f4366576dd9ec",
    "createdAt": "2024-11-01T10:13:47.932Z",
  }
   ```
  
3.Update Product
- Endpoint: PUT /api/products/:id
- Description: Updates an existing product.
- Request Body:
  ```
  {
    "name": "Updated Product",
    "price": 120
  }
   ```
- Response: 200 OK:
  ```
  {
    "name": "Updated Product",
    "description": "Product Description",
    "price": 120,
    "stock": 50,
    "_id": "6724a9dbf40f4366576dd9ec",
    "createdAt": "2024-11-01T10:13:47.932Z",
    "updatedAt": "2024-11-01T06:18:38.491Z",
  }
   ```

4.Delete Product
- Endpoint: DELETE /api/products/:id
- Description: Deletes a product from the inventory.
- Response: 200 OK:
  ```
  {
    "message": "Product deleted successfully"
  }
  ```

Cart API:

1.Get Cart
- Endpoint: GET /api/cart
- Description: Retrieves the user’s shopping cart.
- Response: 200 OK:
  ```
  {
    "_id": "6724ab48f40f4366576dd9f8",
    "userId": "67247234b36be6b8d21433f1",
    "products": [
        {
            "productId": {
                "_id": "67247192b36be6b8d21433ec",
                "name": "product1",
                "description": "product1",
                "price": 100,
                "stock": 10,
                "createdAt": "2024-11-01T06:13:38.553Z",
                "updatedAt": "2024-11-01T06:13:38.554Z",
                "__v": 0
            },
            "quantity": 1,
            "_id": "6724ab48f40f4366576dd9f9"
        }
    ],
    "createdAt": "2024-11-01T10:19:52.666Z",
  }
  ```
2.Add to Cart
- Endpoint: POST /api/cart/add
- Description: Adds a product to the user’s cart.
- Request Body:
  ```
  {
    "productId": "67247192b36be6b8d21433ec",
    "quantity": 1
  }
  ```
- Response: 200 OK:
  ```
  {
    "userId": "67247234b36be6b8d21433f1",
    "products": [
        {
            "productId": "67247192b36be6b8d21433ec",
            "quantity": 1,
            "_id": "6724ab48f40f4366576dd9f9"
        }
    ],
    "_id": "6724ab48f40f4366576dd9f8",
    "createdAt": "2024-11-01T10:19:52.666Z"
  }
  ```

Order API:

1.Place Order
- Endpoint: POST /api/orders/place
- Description: Places an order for the items in the cart.
- Response: 201 Created:
  ```
  {
    "userId": "67247234b36be6b8d21433f1",
    "products": [
        {
            "productId": {
                "_id": "67247192b36be6b8d21433ec",
                "name": "product1",
                "description": "product1",
                "price": 100,
                "stock": 10,
                "createdAt": "2024-11-01T06:13:38.553Z",
                "updatedAt": "2024-11-01T06:13:38.554Z",
                "__v": 0
            },
            "quantity": 1,
            "_id": "6724ab48f40f4366576dd9f9"
        }
    ],
    "totalPrice": 100,
    "_id": "6724ac06f40f4366576dda01",
    "createdAt": "2024-11-01T10:23:02.745Z"
  }
  ```
2.Order History
- Endpoint: GET /api/orders/history
- Description: Retrieves the user’s order history.
- Response: 200 OK:
  ```
    [
    {
        "_id": "672479334353cdd11129623f",
        "userId": "67247234b36be6b8d21433f1",
        "products": [
            {
                "productId": {
                    "_id": "67247192b36be6b8d21433ec",
                    "name": "product1",
                    "description": "product1",
                    "price": 100,
                    "stock": 10,
                    "createdAt": "2024-11-01T06:13:38.553Z",
                    "updatedAt": "2024-11-01T06:13:38.554Z",
                    "__v": 0
                },
                "quantity": 2,
                "_id": "6724783a4353cdd111296236"
            }
        ],
        "totalPrice": 200,
        "createdAt": "2024-11-01T06:46:11.622Z"
    }
  ]
  ```

## Authentication and Authorization

This application uses JWT-based authentication. Each request to the protected routes must include a Bearer token in the headers.

Example:
   ```
    Authorization: Bearer <JWT_TOKEN>
   ```
