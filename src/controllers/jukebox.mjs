import Setting from '../models/setting';
import Component from '../models/component';

const settings = [
    new Setting('Mixer', ['audio', 'pcb']),
    new Setting('AttractLoop'),
    new Setting('Volume', ['audio'])
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
