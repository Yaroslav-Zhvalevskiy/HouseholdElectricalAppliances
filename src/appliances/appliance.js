class Appliance {
    constructor(type, name, manufacturer, cost, power, switched) {
        this.type = type;
        this.name = name;
        this.manufacturer = manufacturer;
        this.cost = cost;
        this.power = power;
        this.switched = switched;
    }

    switchOn() {
        this.switched = true;
    }

    switchOff() {
        this.switched = false;
    }

    getType() {
        return this.type;
    }
}

module.exports = Appliance;