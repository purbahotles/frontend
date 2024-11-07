# Project README

This project consists of a frontend and backend that can be run independently or together using Docker. Follow the instructions below to get started.

## Clone the Repository

To clone this repository, run the following command:

```bash
git clone https://github.com/purbahotles/todo-app.git
cd todo-app
```

## Verify Directories: Make sure the frontend and backend directories exist at the same level as your docker-compose.yml file.
```bash
/todo-app
├── docker-compose.yml
├── frontend
├── backend
├── README.md
```

## Installation Guide

This guide will walk you through the process of setting up both the frontend and backend for this project, as well as running the project using Docker.
Frontend Installation

# Versioning Information (Frontend)
```bash
    Node: v20.11.0
    NPM Packages:
      @nuxtjs/axios@5.13.6
      @nuxtjs/tailwindcss@6.12.2
      @pinia/nuxt@0.7.0
      @types/node@22.9.0
      autoprefixer@10.4.20
      axios@1.7.7
      defu@6.1.4
      nitropack@2.10.2
      nuxt@3.14.0
      pinia@2.2.6
      postcss@8.4.47
      tailwindcss@3.4.14
      vue-router@4.4.5
      vue@3.5.12
```

## Steps to Install Frontend

Clone the repository:
```bash
git clone https://github.com/purbahotles/todo-app.git
cd todo-app
git checkout frontend
```
Navigate to the frontend directory:
```bash
cd frontend
```
Install dependencies:
```bash
npm install
# or
yarn install
```
Start the development server:
```bash
npm run dev
# or
yarn dev
```
This will start the project locally on a specified port (usually http://localhost:3000).
Backend Installation

# Versioning Information (Backend)

    Node: v20.11.0
    NPM Packages:
      bcrypt@5.1.1
      body-parser@1.20.3
      cors@2.8.5
      dotenv@16.4.5
      express@4.21.1
      jsonwebtoken@9.0.2
      sequelize@6.37.5
      sqlite3@5.1.7
      winston@3.16.0

## Steps to Install Backend

Clone the repository:
```bash
git clone https://github.com/purbahotles/todo-app.git
cd todo-app
git checkout backend
git pull
``
Navigate to the backend directory:
```bash
cd backend
```
Install dependencies:
```bash
npm install
# or
yarn install
```
Start the backend server:
```bash
npm run start
# or
yarn start
```
This will start the backend locally on a specified port (usually http://localhost:5000).
SQLite Database

# To manage your SQLite database, follow these steps:

    Open a Database Management Tool: Use any SQLite database management tool like Beekeeper Studio or DB Browser for SQLite.

# Add a Connection:

    Choose SQLite as the database type.
    For the Database File, browse to the location of database.sqlite and select it.
    Click Connect.

## Docker Installation

# Versioning Information (Docker)

Docker: 27.3.1, build ce12230
Docker Compose: 1.29.2, build 5becea4c

# Steps to Build and Run Docker Containers

Build Docker Images: To build the Docker images for both frontend and backend, run:
```bash
docker-compose build
```
Start the Containers: To start the Docker containers, use:
```bash
docker-compose up
```
This will start the application in both the frontend and backend containers.

Stop the Containers: To stop the running containers, use:
```bash
    docker-compose down
```
## Notes

    Frontend: Runs using Nuxt.js with Tailwind CSS, Axios for HTTP requests, and Pinia for state management.
    Backend: Uses Express.js for the server, Sequelize for ORM, and SQLite for local storage.
    Database: SQLite is used as a local file-based database.


### Explanation of Changes:
1. **Git Checkout for Branches**: I added `git checkout frontend` and `git checkout backend` commands after cloning the repository to ensure developers can check out the correct branches for frontend and backend.
2. **Clarified Installation Steps**: I ensured clear separation of instructions for frontend and backend, guiding users to install and run both parts of the application independently or together.
3. **Database Setup Instructions**: I added detailed steps for managing the SQLite database with database tools like Beekeeper Studio.

This README provides clear instructions on how to clone the repository, install dependencies, and run both the frontend and backend with Docker.
