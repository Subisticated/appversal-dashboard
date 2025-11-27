# Role-Based Team Dashboard

This is a simple, proof-of-concept dashboard application built with React and Vite. It demonstrates a role-based UI where different users ("Lead" and "Member") have different views and capabilities.

## Features

*   **Role-Based Views**: The UI changes based on whether the user is a "Lead" or a "Member".
*   **Team Status Overview**: The "Lead" can see a summary of the entire team's status (Working, Break, etc.).
*   **Member Management**: The "Lead" can view a list of all team members, filter them by status, and sort them by task count.
*   **Task Management**:
    *   Members can see their own task list.
    *   Members can update the progress of their tasks.
    *   Leads can create new tasks for team members.
*   **State Management**: Uses Redux Toolkit for centralized and predictable state management.
*   **Modern Tooling**: Built with Vite for a fast development experience.

## Tech Stack

*   **Frontend**: [React](https://reactjs.org/)
*   **Build Tool**: [Vite](https://vitejs.dev/)
*   **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/)
*   **Icons**: [Lucide React](https://lucide.dev/guide/packages/lucide-react)
*   **Styling**: Plain CSS

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your machine.

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/Subisticated/appversal-dashboard.git
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd "Dashboard with role based views"
    ```
3.  **Install dependencies:**
    ```sh
    npm install
    ```

### Running the Application

To start the development server, run the following command:

```sh
npm run dev
```

This will start the application and you can view it in your browser at `http://localhost:5173` (or another port if 5173 is in use).

## Available Scripts

In the project directory, you can run:

*   `npm run dev`: Runs the app in development mode.
*   `npm run build`: Builds the app for production to the `dist` folder.
*   `npm run lint`: Lints the codebase for potential errors.
*   `npm run preview`: Serves the production build locally.
