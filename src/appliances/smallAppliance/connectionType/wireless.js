const SmallAppliance = require('../smallAppliance');

class WirelessSmallAppliance extends SmallAppliance {
    constructor(type, name, manufacturer, cost, power, switched, usability, chargingTime) {
        super(type, name, manufacturer, cost, power, switched, usability);
        this.chargingTime = chargingTime;
    }
}

module.exports = WirelessSmallAppliance;