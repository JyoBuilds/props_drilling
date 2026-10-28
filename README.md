# Props Drilling in React

## 📌 Overview

Props Drilling is a concept in React where data is passed from a parent component to a deeply nested child component through props. Intermediate components pass the data even if they do not directly use it.

This project demonstrates how to pass data from the `App` component to the `Dashboard` component using props.

## 🎯 Objective

- Understand the concept of Props Drilling in React.
- Learn how to pass data between components using props.
- Understand parent-child component communication.
- Learn how React components share data through props.

## 🛠️ Technologies Used

- React.js
- JavaScript (ES6+)
- HTML
- CSS
- React Hooks (`useState`)

## 📂 Project Structure

```text
props_drilling/
├── src/
│   ├── components/
│   │   ├── Dashboard.jsx
│   │   ├── Profile.jsx
│   │   └── Username.jsx
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── public/
├── package.json
└── README.md
```

## 💻 Code Explanation

### 1. App.jsx — Parent Component

The `App` component maintains the user's name using the `useState` hook and passes it to the `Dashboard` component through props.

```jsx
import React, { useState } from "react";
import Dashboard from "./components/Dashboard";

const App = () => {
  const [name, setName] = useState("Jyo");

  return (
    <div>
      <h1>App</h1>
      <Dashboard name={name} />
    </div>
  );
};

export default App;
```

**Explanation:**

- `useState("Jyo")` initializes the name with `"Jyo"`.
- `name` stores the current name.
- `setName` updates the name if needed.
- `<Dashboard name={name} />` passes the name to the `Dashboard` component.

### 2. Dashboard.jsx — Intermediate Component

The `Dashboard` component receives the name from `App` and passes it to the `Profile` component.

### 3. Profile.jsx — Intermediate Component

The `Profile` component receives the name from `Dashboard` and passes it to the `Username` component.

### 4. Username.jsx — Child Component

The `Username` component receives the name and displays it.

Example implementation:

```jsx
import React from "react";

const Username = ({ name }) => {
  return <div>Username - {name}</div>;
};

export default Username;
```

## 🔄 How Props Drilling Works

```text
       App.jsx
          |
          | name="Jyo"
          ↓
     Dashboard.jsx
          |
          | name="Jyo"
          ↓
      Profile.jsx
          |
          | name="Jyo"
          ↓
     Username.jsx
          |
          ↓
     Username - Jyo
```

**Flow:** `App → Dashboard → Profile → Username`

The `name` prop passes through each intermediate component until it reaches the component that needs to display it.

## 📚 Key Concepts Learned

- **Props:** Used to pass data from parent components to child components.
- **Props Drilling:** Passing props through multiple component levels.
- **useState:** Managing component state.
- **Component Reusability:** Dividing an application into smaller components.
- **Data Flow:** Understanding how data moves through a React component hierarchy.

## ⚖️ Advantages and Disadvantages

### Advantages

- Simple to implement in small applications.
- Makes data flow explicit.
- Does not require additional libraries.

### Disadvantages

- Passing props through many intermediate
