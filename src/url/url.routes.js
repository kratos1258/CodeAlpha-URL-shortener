import express from 'express';
import * as urlController from './url.controller.js';
import { validateUrlPayload } from '../middlewares/validate.middleware.js';

const router = express.Router();

router.post('/api/shorten', validateUrlPayload, urlController.shortenUrl);
router.get('/:code', urlController.redirectUrl);

export default router;
