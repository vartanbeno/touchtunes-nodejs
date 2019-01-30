/**
 * This function takes in a list of settings and returns only the ones with an empty required components list, or those
 * with at least 1 required component that's in the components array.
 * @param components: array of components
 * @param settings: array of settings
 * @returns list of filtered settings
 */
export const filterSettings = (components, settings) => {
    const componentNames = components.map(component => component.name);
    return settings.filter(setting => setting.requires.length === 0 || setting.requires.some(component => componentNames.includes(component)));
};
