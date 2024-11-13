# Pizza Delivery Web Application

A full-stack web application for pizza delivery service with user and restaurant admin functionality.

## Features

- User Authentication (Signup/Signin)
- Shopping Cart System
- Menu Categories (Pizza, Pasta, Appetizers, Drinks)
- Order Tracking
- Restaurant Admin Dashboard
- Address Management
- Order Status Updates (Queue, Cook, Delivery, Complete)

## Tech Stack

- Node.js
- Express.js
- MongoDB
- EJS Templates
- jQuery

## Prerequisites

- Node.js
- MongoDB
- npm

## Installation & Setup

1. Clone the repository:
2. Install MongoDB:
   ```bash
    brew tap mongodb/brew
    brew install mongodb-community

3. Created MongoDb data directory:
   ``` bash
    sudo mkdir -p /data/db
    sudo chown -R `id -un` /data/db

4. Start MongoDB service:
      ``` bash
    brew services start mongodb-community

5. Install dependencies:
      ``` bash
    npm install

6. Start the application:
   ```bash
   node server.js



## The application will run on http://localhost:4000

### Usage

Customer Side
- Browse menu items
- Add items to cart
- Place orders
- Track order status
- Manage delivery addresses


Restaurant Admin Side
- Create admin account at /admin/signup
- Login at /admin/signin
- Access dashboard at /restaurant
- Manage orders and update order statuses
