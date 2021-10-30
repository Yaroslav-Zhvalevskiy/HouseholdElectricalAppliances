class Flat {
    constructor() {
        this.appliancesList = [];
    }

    showAppliances() {
        console.log('The flat has the following list of electrical appliances:');
        console.log(JSON.stringify(this.appliancesList));
    }

    showTypesOfAppliances() {
        console.log('The flat has the following electrical appliances:');
        this.appliancesList.forEach(el => el.forEach(el => console.log(el.type)));
    }

    chooseAppliance(appliance) {
        return this.appliancesList.find((search) => search.getType() === appliance);
    }

    switchOn(choise) {
        this.appliancesList.forEach((el) => {
            el.forEach((el) => {
                if (el.type === choise) {
                    el.switched = true;
                }
            })
        })
    }

    countPower() {
        let counter = 0;
        this.appliancesList.forEach((el) => {
            el.forEach((el) => {
                if (el.switched === true) {
                    counter += el.power;
                }
            })
        })
        return counter;
    }

    sortByPrice() {
        this.appliancesList.forEach((el) => {
            console.log(JSON.stringify(el.sort((a, b) => b.cost - a.cost)));
        })
    }

    findAppliance(parameter) {
        this.appliancesList.forEach((el) => {
            el.forEach((el) => {
                if (el.manufacturer === parameter) {
                    console.log(JSON.stringify(el));
                }
            })
        })
    }
}

module.exports = Flat;