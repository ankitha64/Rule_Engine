# Rule Engine

A Rule Engine application that allows users to create custom rules, evaluate them with input data, and view created rules in a professional, user-friendly interface. This project includes both backend and frontend code.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Setup Instructions](#setup-instructions)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Usage](#usage)
- [Folder Structure](#folder-structure)

## Features

- **Rule Creation**: Create rules by specifying a name and condition string (e.g., `age > 18 AND income > 50000`).
- **Rule Evaluation**: Evaluate a created rule using user-provided data.
- **Rule Listing**: Display a list of all created rules with their details.

## Technologies

- **Backend**: Node.js, Express, MongoDB
- **Frontend**: React, Axios
- **Styling**: Custom CSS for a clean and professional interface

## Setup Instructions

Follow these steps to set up and run the project on your local machine.

### Prerequisites

- Node.js and npm
- MongoDB (You can use a local MongoDB instance or MongoDB Atlas)

### Backend Setup

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/rule-engine.git
    cd rule-engine/backend
    ```

2. Install backend dependencies:

    ```bash
    npm install
    ```

3. Configure environment variables:

   Create a `.env` file in the `backend` directory and add your MongoDB URI:

    ```env
    MONGO_URI=your_mongodb_uri
    ```

4. Start the backend server:

    ```bash
    npm start
    ```

   The backend server will run on `http://localhost:5000`.

### Frontend Setup

1. Open a new terminal, navigate to the frontend directory:

    ```bash
    cd ../frontend
    ```

2. Install frontend dependencies:

    ```bash
    npm install
    ```

3. Start the React application:

    ```bash
    npm start
    ```

   The frontend server will run on `http://localhost:3000`.

## Usage

1. **Create a Rule**: In the "Create a New Rule" form, enter a rule name and condition (e.g., `age > 18 AND income > 50000`). Click "Create Rule."
   
2. **Evaluate a Rule**: Go to the "Evaluate Rule" section, select a rule, enter JSON formatted user data, and click "Evaluate" to see the result.

3. **View Created Rules**: Check the "Created Rules" section to view a list of all saved rules.

## Folder Structure

```plaintext
rule-engine/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── app.js
│   ├── .env
│   └── package.json
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── App.js
    │   ├── index.js
    │   └── App.css
    └── package.json
