const Appliance = require('./appliance');

class LargeAppliance extends Appliance {
    constructor(type, name, manufacturer, cost, power, switched, noiseLevel) {
        super(type, name, manufacturer, cost, power, switched);
        this.noiseLevel = noiseLevel;
    }
}

module.exports = LargeAppliance;