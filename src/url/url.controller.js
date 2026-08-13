import { asyncHandler } from '../utils/asyncHandler.js';
import * as urlService from './url.service.js';
import { HTTP_STATUS } from '../constants/httpStatus.js';

export const shortenUrl = asyncHandler(async (req, res) => {
  const { longUrl } = req.body;
  const baseUrl = process.env.BASE_URL || `http://localhost:${process.env.PORT || 5000}`;
  
  const shortUrl = await urlService.createShortUrl(longUrl, baseUrl);
  
  res.status(HTTP_STATUS.CREATED).json(shortUrl);
});

export const redirectUrl = asyncHandler(async (req, res) => {
  const { code } = req.params;
  
  const longUrl = await urlService.getLongUrlByCode(code);
  
  res.redirect(longUrl);
});
