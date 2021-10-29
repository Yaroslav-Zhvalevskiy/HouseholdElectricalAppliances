const SmallAppliance = require('../smallAppliance');

class WiredSmallAppliance extends SmallAppliance {
    constructor(type, name, manufacturer, cost, power, switched, usability, wireLength) {
        super(type, name, manufacturer, cost, power, switched, usability);
        this.wireLength = wireLength;
    }
}

module.exports = WiredSmallAppliance;