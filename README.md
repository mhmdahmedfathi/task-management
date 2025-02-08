# Task Management App

## Project Overview
This is a task management application built using **React 19**, **TypeScript**, **Vite**, **Tailwind CSS 4**, and **ShadCN UI**. It leverages **Firebase Firestore** for backend services, including task storage and management. The application allows users to create, read, update, and delete tasks, with additional features like sorting, overdue task indicators, and optional authentication.

## Features
### Core Features
- **Task Management (CRUD)**
  - Create new tasks with title, description, priority, due date, and status.
  - Read and display tasks in a structured table.
  - Update task details while preserving the task ID.
  - Delete tasks with a confirmation prompt.
- **Overdue Task Indicator**
  - Tasks automatically marked as overdue if the due date has passed and the status is not completed.
  - Overdue tasks visually highlighted in the UI.
- **Sorting**
  - Sort tasks based on priority (Low, Medium, High) and due date (ascending/descending).
  - Allow multiple sorting criteria to be applied together.
- **Task Completion Status**
  - Mark tasks as completed.
  - Completed tasks are visually indicated and do not appear as overdue.

### Bonus Features (Optional)
- **Search**: Filter tasks by title or description.
- **Pagination**: Paginate the task list with configurable number of tasks per page.
- **Firebase Authentication**: Allow user authentication for secure access.

## Tech Stack
- **Frontend**: React 19, TypeScript, Vite
- **UI Components**: ShadCN UI, Tailwind CSS 4
- **State Management**: React Hooks, React Query
- **Backend Services**: Firebase Firestore
- **Authentication**: Firebase Authentication (optional)

## Project Structure
```
.
├── components.json
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── public
│   └── vite.svg
├── README.md
├── src
│   ├── assets
│   │   └── react.svg
│   ├── components
│   │   ├── Pages
│   │   │   └── task-managment.tsx
│   │   └── ui
│   │       ├── button.tsx
│   │       ├── data-table.tsx
│   │       ├── debounce-input.tsx
│   │       ├── delete-confirmation.tsx
│   │       ├── dialog.tsx
│   │       ├── form.tsx
│   │       ├── Header
│   │       │   ├── index.tsx
│   │       │   └── login.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       ├── pagination.tsx
│   │       ├── select.tsx
│   │       ├── table
│   │       │   ├── add-edit-task.tsx
│   │       │   ├── columns.tsx
│   │       │   ├── table-filters.tsx
│   │       │   ├── table-pagination.tsx
│   │       │   └── table.tsx
│   │       ├── table.tsx
│   │       └── textarea.tsx
│   ├── firebaseConfig.ts
│   ├── index.css
│   ├── lib
│   │   └── utils.ts
│   ├── main.tsx
│   ├── services
│   │   └── taskService.ts
│   ├── stores
│   │   ├── delete-task.ts
│   │   ├── edit-task.ts
│   │   └── tasks.ts
│   ├── types
│   │   └── tasks.d.ts
│   └── vite-env.d.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Setup Instructions
### Prerequisites
Ensure you have the following installed:
- **Node.js** (LTS recommended)
- **npm** or **yarn**

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/mhmdahmedfathi/task-management.git
   cd task-management
   ```
2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```
3. Set up Firebase:
   - Create a Firebase project.
   - Enable Firestore and Authentication (if using auth).
   - Get Firebase config and create a `.env` file:
     ```env
     VITE_FIREBASE_API_KEY=your_api_key
     VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
     VITE_FIREBASE_PROJECT_ID=your_project_id
     VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
     VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
     VITE_FIREBASE_APP_ID=your_app_id
     ```

### Running the Project
1. Start the development server:
   ```sh
   npm run dev
   # or
   yarn dev
   ```
2. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Deployment
To build the project for production:
```sh
npm run build
# or
yarn build
```
Deploy the `dist/` folder to a hosting service like **Vercel**, **Netlify**, or **Firebase Hosting**.

## Contribution
Feel free to contribute by submitting issues or pull requests to enhance the application.

## License
This project is licensed under the MIT License.

