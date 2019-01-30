import Setting from '../models/setting';
import Component from '../models/component';

const settings = [
    new Setting('Mixer', ['audio', 'pcb']),
    new Setting('AttractLoop'),
    new Setting('Volume', ['audio']),
    new Setting('Amplifier', ['audio', 'resistor']),
    new Setting('Brightness', ['LED array']),
    new Setting('Language'),
    new Setting('Bluetooth', ['mobile device'])
];

const components = [
    new Component('audio'),
    new Component('LED array'),
    new Component('pcb')
];

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
