const SmallAppliance = require('./smallAppliance');

class WirelessSmallAppliance extends SmallAppliance {
    constructor(type, name, manufacturer, cost, power, switched, usability, chargingStation) {
        super(type, name, manufacturer, cost, power, switched, usability);
        this.chargingStation = chargingStation;
    }
}

module.exports = WirelessSmallAppliance;