### ⚙️ &nbsp; Time Taken to Complete this Project :

### If you find this project helpful, please consider giving it a star ⭐.

# Ecomart - E-commerce Shopping App

## Introduction

Welcome to Ecomart, an e-commerce shopping app built using the MERN (MongoDB, Express, React, Node.js) stack and Material-UI for the user interface. This project provides both normal user and admin modes, offering a wide range of features to enhance the shopping experience.

## Features

### Normal User Mode

- **User Authentication**: Users can sign up and log in securely using JWT authentication.
- **Product Browsing**: Browse through available products.
- **Cart Management**: Add products to the cart and manage cart items.
- **Order Placement**: Place orders with options for address filling, payment methods (including cash on delivery), and order confirmation.
- **Order History**: View past orders and order details.
- **Logout**: Securely log out of the application.

### Admin Mode

- **Admin Dashboard**: Provides an interface for administrators to manage the e-commerce platform.
- **Product Management**: Admins can update product details and delete products from the inventory.
- **Data Visualization**: Utilizes Chart.js to provide visual representations of key metrics such as orders, products, and user statistics.


## Tech Stack

- **Backend**: Node.js, Express.js, MongoDB
- **Frontend**: React.js, Material-UI, Tailwind CSS
- **State Management**: Redux, Redux-Thunk, Redux-Persist
- **Data Visualization**: Chart.js, Highcharts.js
- **Additional Libraries**: Compromise (NLP), React-Toastify, React-Awesome-Slider, React-Confetti

## Demo Credentials (to get admin access)

- **Email (Admin)**: jyotirmay2000gupta@gmail.com
- **Password**: 22812410

## Environment Variables

### backend/.env


## Routes

Here's an outline of the routes typically used in a MERN stack e-commerce application like Ecomart:

### Authentication

- `POST /api/auth/register` - Register a new user.
- `POST /api/auth/login` - Login user and generate JWT token.
- `GET /api/auth/signin` - To register new user.

### Product Management

- `GET /api/products` - Fetch all products.
- `GET /api/products/:id` - Fetch a specific product by ID.
- `PUT /api/products/:id` - Update a product by ID (Admin only).
- `DELETE /api/products/:id` - Delete a product by ID (Admin only).

### Cart Management

- `GET /api/cart` - Fetch current user's cart items.
- `POST /api/cart/add` - Add a product to the cart.
- `DELETE /api/cart/remove/:id` - Remove a product from the cart.

### Order Management

- `GET /api/orders` - Fetch all orders (Admin only).
- `GET /api/orders/:id` - Fetch a specific order by ID.
- `POST /api/orders/create` - Create a new order.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/Ecomart.git
   cd Ecomart
