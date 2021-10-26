const Flat = require('./flat');

class FlatBuilder {
    constructor() {
        this.flat = new Flat();
    }

    addAppliance(appliance) {
        this.flat.appliancesList.push(appliance);
        return this;
    }

    build() {
        return this.flat;
    }
}

module.exports = FlatBuilder;