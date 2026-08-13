import { ApiError } from '../utils/ApiError.js';
import { HTTP_STATUS } from '../constants/httpStatus.js';

export const validateUrlPayload = (req, res, next) => {
  const { longUrl } = req.body;
  
  if (!longUrl || typeof longUrl !== 'string') {
    return next(new ApiError(HTTP_STATUS.BAD_REQUEST, 'Valid longUrl is required'));
  }

  try {
    new URL(longUrl);
    next();
  } catch (err) {
    return next(new ApiError(HTTP_STATUS.BAD_REQUEST, 'Invalid URL format'));
  }
};
