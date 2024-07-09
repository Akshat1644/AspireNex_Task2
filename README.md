Fullstack Task Manager (MERN)
Overview
Hello everone,Welcome to the "TaskManger" project.This project is built using the MERN stack (MongoDB, Express.js, React, and Node.js).It provides a user-friendly interface for efficient task assignment, tracking, and collaboration. 

SETUP INSTRUCTIONS
Server Setup
Environment variables
First, create the environment variables file .env in the server folder. The .env file contains the following environment variables:

MONGODB_URI = your MongoDB URL
JWT_SECRET = any secret key - must be secured
PORT = 8800 or any port number
NODE_ENV = development
 
Steps to run server
Open the project in any editor of choice.
Navigate into the server directory cd server.
Run npm i or npm install to install the packages.
Run npm start to start the server.
If configured correctly, you should see a message indicating that the server is running successfully and Database Connected.

 
Client Side Setup
Environment variables
First, create the environment variables file .env in the client folder. The .env file contains the following environment variables:

VITE_APP_BASE_URL = http://localhost:8800 #Note: Change the port 8800 to your port number.
VITE_APP_FIREBASE_API_KEY = Firebase api key
Steps to run client
Navigate into the client directory cd client.
Run npm i or npm install to install the packages.
Run npm run dev to run the app on http://localhost:3000.
Open http://localhost:3000 to view it in your browser.
