# Todo Application

A simple todo application built with TypeScript, Vite, ReactJS, Context API, and local storage. This app allows users to create, edit, delete, and toggle todos to mark them as complete.

## Features

- **Add Todo**: Users can add new todos with a description.
- **Edit Todo**: Users can update the description of existing todos.
- **Delete Todo**: Users can remove todos from the list.
- **Toggle Complete**: Users can mark todos as complete or incomplete.
- **Local Storage**: Todos are stored in local storage, ensuring persistence across page reloads.
- **Context API**: Manages state for todos across the application.

## Technologies

- **TypeScript**: Provides type safety for better development experience.
- **ReactJS**: JavaScript library for building user interfaces.
- **Context API**: Manages the global state of todos.
- **Local Storage**: Stores todos on the client side.

## Getting Started

### Prerequisites

- Node.js (v16 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/todo-project.git
    ```
2. Navigate into the project directory:
    ```bash
    cd todo-project
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```
### Running the Project

1. Start the development server
    ```bash
    npm run dev
    ```
2. Open your browser and go to http://localhost:3000 to see the application in action.

### Usage
- Add a Todo: Enter a description in the input field and press `Enter` or click the `Add` button.
- Edit a Todo: Click on the todo item you wish to edit, update the description, and press `Enter` or click the `Save` button.
- Delete a Todo: Click the `Delete` button next to the todo item.
- Toggle Complete: Click the checkbox next to the todo item to mark it as complete or incomplete.