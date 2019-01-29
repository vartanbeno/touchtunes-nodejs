class Setting {

    constructor(name, requires = []) {
        this.name = name;
        this.requires = [...requires];
    }

}

export default Setting;
