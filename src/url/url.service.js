import { nanoid } from 'nanoid';
import Url from './url.model.js';
import { ApiError } from '../utils/ApiError.js';
import { HTTP_STATUS } from '../constants/httpStatus.js';

export const createShortUrl = async (longUrl, baseUrl) => {
  let url = await Url.findOne({ longUrl });
  if (url) {
    return url;
  }

  const urlCode = nanoid(8);
  const shortUrl = `${baseUrl}/${urlCode}`;

  url = new Url({
    longUrl,
    shortUrl,
    urlCode,
    date: new Date()
  });

  await url.save();
  return url;
};

export const getLongUrlByCode = async (urlCode) => {
  const url = await Url.findOne({ urlCode });
  
  if (!url) {
    throw new ApiError(HTTP_STATUS.NOT_FOUND, 'URL not found');
  }
  
  return url.longUrl;
};
