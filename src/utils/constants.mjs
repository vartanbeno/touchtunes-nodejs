import Setting from '../models/Setting';
import Component from '../models/Component';

export const settings = [
    new Setting('Mixer', ['audio', 'pcb']),
    new Setting('AttractLoop'),
    new Setting('Volume', ['audio']),
    new Setting('Amplifier', ['audio', 'resistor']),
    new Setting('Brightness', ['LED array']),
    new Setting('Language'),
    new Setting('Bluetooth', ['mobile device'])
];

export const components = [
    new Component('audio'),
    new Component('LED array'),
    new Component('pcb')
];
