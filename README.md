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
   ```bash
   npm install

3. Start MongoDB:
   ```bash
   mongod

4. Run the server:
   ```bash
   npm start


## API Endpoints

- POST /notes/: Create a new note.
- GET /notes/:id: Fetch a note by its primary key.
- GET /notes?title=<substring>: Query notes by title substring.
- PUT /notes/:id: Update an existing note.
