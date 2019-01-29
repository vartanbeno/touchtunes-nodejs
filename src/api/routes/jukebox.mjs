import express from 'express';
import { getComponents, getSettings } from '../../controllers/jukebox';

const jukebox = express.Router();

jukebox.get('/settings', getSettings);
jukebox.get('/components', getComponents);

export default jukebox;
