import express from 'express';
import jukebox from './routes/jukebox';

const api = express.Router();

api.use('/jukebox', jukebox);

export default api;
