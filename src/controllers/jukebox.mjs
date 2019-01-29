export const getSettings = (req, res) => {

    const settings = [
        {
            'name': 'Mixer',
            'requires': ['audio', 'pcb']
        },
        {
            'name': 'AttractLoop',
            'requires': []
        },
        {
            'name': 'Volume',
            'requires': ['audio']
        }
    ];

    return res.status(200).send(settings);

};

export const getComponents = (req, res) => {

    const components = [
        {
            'name': 'audio'
        },
        {
            'name': 'LED array'
        }
    ];

    return res.status(200).send(components);

};
