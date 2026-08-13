# URL Shortener Project

This project is a URL shortener built with Express.js and MongoDB. It allows users to enter a long URL, generate a unique short code, save the mapping in a database, and redirect users from the short URL back to the original destination.

This project was developed as part of the internship task based on the requirement to create a backend API that shortens long URLs and stores them efficiently.

## Features

- Accepts a long URL from the user
- Generates a unique short code using a secure ID generator
- Stores the original URL and short code in MongoDB
- Redirects short links to the original long URL
- Includes a simple frontend for easy URL shortening
- Handles validation and basic API error responses

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- nanoid
- JavaScript (ES Modules)
- HTML, CSS, JavaScript for the frontend

## Project Overview

The app exposes a backend endpoint for shortening URLs and a redirect endpoint for visiting the shortened link. The generated short URL is stored in the database, so the system can map a short alias back to the original URL whenever a user opens it.

The project includes:

- a POST API to create short URLs
- a GET route to redirect by short code
- a frontend page where users can paste a long URL and get a shortened version
- MongoDB connection setup and error handling

## Project Structure

```bash
src/
├── app.js
├── server.js
├── config/
│   └── database.js
├── constants/
│   └── httpStatus.js
├── middlewares/
│   ├── error.middleware.js
│   └── validate.middleware.js
├── url/
│   ├── url.controller.js
│   ├── url.model.js
│   ├── url.routes.js
│   └── url.service.js
├── utils/
│   ├── ApiError.js
│   └── asyncHandler.js
public/
├── index.html
```

## Installation

1. Clone the repository
2. Navigate to the project folder
3. Install dependencies:

```bash
npm install
```

4. Create a `.env` file in the root directory and add the following:

```env
PORT= your port number here
MONGO_URI= your MongoDB connection string here
BASE_URL= your base URL here
```

5. Start the server:

```bash
npm run dev
```

or

```bash
npm start
```

## Running the App

After starting the server, open:

```bash
http://localhost:5000
```

You can then enter a long URL in the frontend form and generate a shortened version.

## API Endpoints

### 1. Shorten a URL

Request:

```http
POST /api/shorten
```

Body:

```json
{
  "longUrl": "https://example.com/very/long/url"
}
```

Response:

```json
{
  "_id": "...",
  "longUrl": "https://example.com/very/long/url",
  "shortUrl": "http://localhost:5000/AbCdEf12",
  "urlCode": "AbCdEf12",
  "date": "2026-08-13T..."
}
```

### 2. Redirect to Original URL

Request:

```http
GET /:code
```

Example:

```http
GET /AbCdEf12
```

This redirects the user to the original long URL stored in MongoDB.

## Example Flow

1. User enters a long URL in the frontend.
2. Server validates the URL.
3. A unique short code is generated.
4. The original URL and short URL are saved in MongoDB.
5. The user gets a shortened link like `http://localhost:5000/AbCdEf12`.
6. When that link is opened, the server redirects to the original URL.

## License

This project is licensed under the ISC License.

## Summary

This URL shortener is a complete backend + frontend solution that follows the original project guidance: it accepts long URLs, stores them in a database, creates a short code, and redirects users to the original URL when the short link is accessed. It uses Express.js on the backend and MongoDB for persistence, making it a practical and scalable project for learning full-stack web development.
