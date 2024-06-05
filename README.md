# Blog post

It is a full-stack web application for managing user signups and posts with infinite scrolling. Built using Node.js, Express.js, MongoDB, and React.js.

## Features

- User Signup with JWT Authentication
- Infinite Scrolling for Posts
- Responsive Design using Tailwind CSS
- Secure Password Storage and Authentication

## Tech Stack

- *Backend:* Node.js, Express.js, MongoDB
- *Frontend:* React.js
- *Authentication:* JWT (jsonwebtoken)
- *Styling:* Tailwind CSS

## Deployed Application

The application is deployed and can be accessed at: Deployed Link : https://brain-op-task.vercel.app

## Setup Instructions

To run this project locally, follow these steps:

### Backend Setup

1. Clone the repository:
   ```
      git clone https://github.com/MOHDSAMIULLAH/BrainOp-task.git
   cd BrainOp-task
   ```

2. Install backend dependencies:
  ```
   cd backend
   npm install
   ```
   

3. Set up environment variables:
   Create a .env file in the backend directory and add the following variables:
   env
   MONGO_URI=your-mongodb-uri
   JWT_SECRET=your-jwt-secret
   

4. Start the backend server:
   ```
   npm start
   ```

### Frontend Setup

1. Open a new terminal and navigate to the frontend directory:
  ```
   cd ../frontend
   ```1

2. Install frontend dependencies:
  ```
   npm install
   ```

3. Start the frontend development server:
   ```
   npm start
   ```

The application should now be running locally at http://localhost:3000.

## API Endpoints

### User Authentication

- *POST /signup:* Register a new user
  - Request Body: { username, email, password }
  - Response: { success, token }

### Posts

- *GET /posts:* Fetch paginated posts (requires authentication)
  - Query Parameters: page, limit
  - Response: { posts, currentPage, totalPages }

- *POST /posts:* Create a new post (requires authentication)
  - Request Body: { title, content }
  - Response: { post }