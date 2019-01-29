import express from 'express';
import { getComponents, getSettings } from '../../controllers/jukebox';

const jukebox = express.Router();

/**
 * @route       GET api/jukebox/settings
 * @description Get list of settings available for all jukeboxes.
 */
jukebox.get('/settings', getSettings);

/**
 * @route       GET api/jukebox/components
 * @description Get list of components available on the jukebox.
 */
jukebox.get('/components', getComponents);

export default jukebox;
