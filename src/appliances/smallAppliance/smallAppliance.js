const Appliance = require('../appliance');

class SmallAppliance extends Appliance {
    constructor(type, name, manufacturer, cost, power, switched, usability) {
        super(type, name, manufacturer, cost, power, switched);
        this.usability = usability;
    }
}

module.exports = SmallAppliance;