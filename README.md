# Note-Taking Application

## Prerequisites

- Node.js
- MongoDB

## Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd note-taking

2. Install dependencies:
   npm install

3. Start MongoDB:
   mongod

4. Run the server:
   npm start

5. To run tests:
   npm test


# API Endpoints

- POST /notes/: Create a new note.
- GET /notes/:id: Fetch a note by its primary key.
- GET /notes?title=<substring>: Query notes by title substring.
- PUT /notes/:id: Update an existing note.
