import Component from '../src/models/Component';
import Setting from '../src/models/Setting';
import { filterSettings } from '../src/utils/functions';

let components;
let settings;

beforeEach(() => {

    components = [
        new Component('audio'),
        new Component('pcb')
    ];

    settings = [
        new Setting('Mixer', ['audio', 'pcb']),
        new Setting('AttractLoop'),
        new Setting('Volume', ['audio']),
    ];

});


test('Should not filter out any settings', () => {
    expect(filterSettings(components, settings).length).toEqual(settings.length);
});

test('Should filter out 2 settings', () => {

    settings.push(new Setting('Amplifier', ['resistor']));
    settings.push(new Setting('Bluetooth', ['mobile device']));

    expect(filterSettings(components, settings).length).toEqual(settings.length - 2);

});

test('Should return an empty array if initial settings list is empty', () => {
    settings = [];
    expect(filterSettings(components, settings)).toEqual([]);
});

test('Should only return settings with no required components if components list is empty', () => {

    components = [];

    settings.push(new Setting('Language'));
    settings.push(new Setting('Sleep Mode'));

    expect(filterSettings(components, settings).length).toEqual(3);

});
