# Joke API

A simple RESTful API built with Node.js and Express that serves random jokes. The API is documented using Swagger (OpenAPI) with JavaScript code annotations.

## Features

- Get a welcome message at the root endpoint.
- Get a random joke at `/joke`.
- Interactive API documentation at `/api-docs` (Swagger UI).

## Endpoints

### `GET /`

Returns a welcome message.

**Response:**
```
Welcome to the Joke API! Visit /joke to get a random joke.
```

---

### `GET /joke`

Returns a random joke in JSON format.

**Response:**
```json
{
  "joke": "Why don't scientists trust atoms? Because they make up everything."
}
```

---

### `GET /api-docs`

Opens the Swagger UI with full API documentation and the ability to test endpoints.

---

## Getting Started

### Prerequisites

- Node.js (v14 or higher recommended)
- npm

### Installation

1. Clone this repository or copy the files to your project directory.
2. Install dependencies:
   ```sh
   npm install express swagger-jsdoc swagger-ui-express
   ```

### Running the Server

```sh
node index.js
```

The API will be available at [http://localhost:3000](http://localhost:3000).

Swagger documentation will be available at [http://localhost:3000/api-docs](http://localhost:3000/api-docs).

---

## Project Structure

```
index.js         # Main API server file
package.json     # Project metadata and dependencies
README.md        # This file
```

---

## License

This project is open source and free to