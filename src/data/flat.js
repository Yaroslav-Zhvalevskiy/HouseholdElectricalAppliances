class Flat {
    constructor() {
        this.appliancesList = [];
    }

    showAppliances() {
        console.log('The flat has the following list of electrical appliances:');
        console.log(JSON.stringify(this.appliancesList, null, 1));
    }

    showTypesOfAppliances() {
        console.log('The flat has the following electrical appliances:');
        this.appliancesList.forEach(el => console.log(el.type));
    }

    chooseAppliance(appliance) {
        return this.appliancesList.find((search) => search.getType() === appliance);
    }

    switchOn(choise) {
        this.appliancesList.forEach((el) => {
            if (el.type === choise) {
                el.switched = true;
            }
        })
    }

    countPower() {
        let counter = 0;
        this.appliancesList.forEach((el) => {
            if (el.switched === true) {
                counter += el.power;
            }
        })
        return counter;
    }

    sortByPrice() {
        console.log(JSON.stringify(this.appliancesList.sort((a, b) => b.cost - a.cost), null, 1));

    }

    findAppliance(parameter) {
        this.appliancesList.forEach((el) => {
            if (el.manufacturer === parameter) {
                console.log(JSON.stringify(el, null, 1));
            }

        })
    }
}

module.exports = Flat;