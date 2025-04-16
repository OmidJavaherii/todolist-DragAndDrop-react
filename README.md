# Todo List Project

A simple Kanban-style Todo List application built with React, TypeScript, and Tailwind CSS.

## Features

*   Add new tasks.
*   View tasks in three columns: 'To Do', 'In Progress', 'Done'.
*   Move tasks between columns using drag-and-drop.
*   Tasks cannot be moved back from the 'Done' column.
*   Responsive design for different screen sizes (using Tailwind CSS grid).
*   State managed using React Context.

## Technologies Used

*   [React](https://reactjs.org/) (v19) including Context API
*   [TypeScript](https://www.typescriptlang.org/)
*   [Vite](https://vitejs.dev/)
*   [Tailwind CSS](https://tailwindcss.com/) (v4)
*   [uuid](https://github.com/uuidjs/uuid) (for generating task IDs)
*   [ESLint](https://eslint.org/) (for code linting)

## Setup and Installation

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd todolist
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
    or
    ```bash
    yarn install
    ```

## Available Scripts

In the project directory, you can run:

*   `npm run dev` or `yarn dev`: Runs the app in development mode. Open [http://localhost:5173](http://localhost:5173) (or the port specified by Vite) to view it in the browser.
*   `npm run build` or `yarn build`: Builds the app for production to the `dist` folder.
*   `npm run lint` or `yarn lint`: Lints the code using ESLint.
*   `npm run preview` or `yarn preview`: Serves the production build locally for preview.

## Usage

1.  Start the development server (`npm run dev`).
2.  Open the application in your browser.
3.  Enter a task description in the input field at the top and click "Add".
4.  Drag and drop tasks between the "To Do", "In Progress", and "Done" columns to update their status.

## Project Structure

```
/
├── public/           # Static assets
├── src/              # Source files
│   ├── components/   # React components (TaskBoard, TaskCard)
│   ├── context/      # React Context or Zustand store setup
│   ├── types/        # TypeScript type definitions (Task)
│   ├── App.tsx       # Main application component
│   ├── main.tsx      # Entry point
│   └── ...           # Other source files (utils, styles, etc.)
├── .gitignore        # Git ignore file
├── eslint.config.js  # ESLint configuration
├── index.html        # HTML entry point
├── package.json      # Project metadata and dependencies
├── README.md         # This file
├── tsconfig.json     # TypeScript configuration
├── vite.config.ts    # Vite configuration
└── ...               # Other configuration files
```

*(Optional: Add screenshots of the application here)*

## License

*(Specify your license here, e.g., MIT License)*
