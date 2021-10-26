const SmallAppliance = require('./smallAppliance');

class WiredSmallAppliance extends SmallAppliance {
    constructor(type, name, manufacturer, cost, power, switched, usability, networkAdapter) {
        super(type, name, manufacturer, cost, power, switched, usability);
        this.networkAdapter = networkAdapter;
    }
}

module.exports = WiredSmallAppliance;