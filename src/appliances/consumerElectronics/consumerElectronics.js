const Appliance = require('../appliance');

class ConsumerElectronics extends Appliance {
    constructor(type, name, manufacturer, cost, power, switched, pleasure) {
        super(type, name, manufacturer, cost, power, switched);
        this.pleasure = pleasure;
    }
}

module.exports = ConsumerElectronics;