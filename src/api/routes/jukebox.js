import express from 'express';
import { getComponents, getSettings, getSettingsFiltered } from '../../controllers/jukebox';

const jukebox = express.Router();

/**
 * @route       GET api/jukebox/settings
 * @description Get list of settings available for all jukeboxes.
 */
jukebox.get('/settings', getSettings);

/**
 * @route       GET api/jukebox/components
 * @description Get list of components available on the jukebox we want to control.
 */
jukebox.get('/components', getComponents);

/**
 * @route       GET api/jukebox/settings/filtered
 * @description Get list of settings on the jukebox where the required components list is either:
 *                  - empty;
 *                  - contains at least one component that's in the components array.
 */
jukebox.get('/settings/filtered', getSettingsFiltered);

export default jukebox;
