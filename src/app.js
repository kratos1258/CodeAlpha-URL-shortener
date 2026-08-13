import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import urlRoutes from './url/url.routes.js';
import { errorHandler } from './middlewares/error.middleware.js';
import { ApiError } from './utils/ApiError.js';
import { HTTP_STATUS } from './constants/httpStatus.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Serve static frontend
app.use(express.static(path.join(__dirname, '../public')));

// Mount routes
app.use('/', urlRoutes);

// Catch-all route for unknown API endpoints
app.use('/api', (req, res, next) => {
  next(new ApiError(HTTP_STATUS.NOT_FOUND, 'API Route not found'));
});

// Global Error Handler
app.use(errorHandler);

export default app;
