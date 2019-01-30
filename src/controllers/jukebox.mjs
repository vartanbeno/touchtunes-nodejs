import { components, settings } from '../utils/constants';

export const getSettings = (req, res) => {
    return res.status(200).send(settings);
};

export const getComponents = (req, res) => {
    return res.status(200).send(components);
};

export const getSettingsFiltered = (req, res) => {

    const componentNames = components.map(component => component.name);

    /**
     * 1st condition: setting requires 0 components (components array length is 0).
     * 2nd condition: setting's required components contains at least 1 that's present in the components array.
     */
    const settingsFiltered = settings.filter(setting => setting.requires.length === 0 || setting.requires.some(component => componentNames.includes(component)));

    return res.status(200).send(settingsFiltered);

};
