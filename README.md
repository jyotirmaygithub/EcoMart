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
 Please navigate to the login section and use the following credentials to gain admin access. If you are already logged in, please log out first and then use these credentials.

- **Email (Admin)**: jyotirmay2000gupta@gmail.com
- **Password**: 22812410

## Environment Variables

### backend/.env
- **ECOMMERCE_JWT_SECRET**: "your_jwt_secret"
- **CLOUD_NAME**: "your_cloud_name"
- **CLOUD_API_KEY**: "your_cloud_api_key"
- **CLOUD_API_SECRET**: "your_cloud_api_secret"
- **PASSWORD_STRING**: "your_password_string"
- **MYEMAIL**: "your_email"
- **MY_PASSWORD**: "your_password"
- **REACT_APP_MONGO_URL**: "your_mongodb_url"

## Routes

Here's an outline of the routes typically used in a MERN stack e-commerce application like Ecomart:

### Authentication

- `GET /api/auth/signin` - To register new user.
- `POST /api/auth/login` - Login user and generate JWT token.
- `POST /api/auth/user-data` - To fetch user details.

### Product Management

- `GET /api/retriveData/products-data` - Fetch all products.
- `GET /api/retriveData/single-product/:id` - Fetch a specific product by ID.
- `PUT /api/update/update-product/:id` - Update a product by ID (Admin only).
- `DELETE /api/delete/delete-product/:id` - Delete a product by ID (Admin only).

### Cart Management

- `GET /api/retriveData/cart-products` - Fetch current user's cart items.
- `POST /api/cart/new-cart-product` - Add a product to the cart.
- `DELETE /api/cart/remove-cart-product/:productId` - Remove a product from the cart.

### Order Management

- `GET /api/orders` - Fetch all orders (Admin only).
- `GET /api/retriveData/productOrder` - Fetch a specific order by user.
- `POST /api/order/productOrder` - Create a new order.

### Image Management

- `POST `-- cloudinary api.

### Address Management

- `POST  /api/shipping/save` - To save the address of the placed order.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/Ecomart.git
   cd Ecomart
