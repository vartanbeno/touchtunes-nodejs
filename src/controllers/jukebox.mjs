import { components, settings } from '../utils/constants';
import { filterSettings } from '../utils/functions';

export const getSettings = (req, res) => {
    try {
        return res.status(200).send(settings);
    } catch (e) {
        return res.status(500).send({ e });
    }
};

export const getComponents = (req, res) => {
    try {
        return res.status(200).send(components);
    } catch (e) {
        return res.status(500).send({ e });
    }
};

export const getSettingsFiltered = (req, res) => {
    try {
        return res.status(200).send(filterSettings(settings));
    } catch (e) {
        return res.status(500).send({ e });
    }
};
