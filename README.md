# Project README

## Clone the Repository

To clone this repository, run the following command:

```bash
git clone https://github.com/purbahotles/todo-app.git
cd todo-app
```

Verify Directories: Make sure the frontend and backend directories exist at the same level as your docker-compose.yml file.

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
git clone https://github.com/purbahotles/frontend.git
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


