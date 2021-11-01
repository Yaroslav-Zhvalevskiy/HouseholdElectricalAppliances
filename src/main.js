const prompt = require('prompt-promise');
let LargeAppliance = require('./appliances/largeAppliance/largeAppliance');
let WiredSmallAppliance = require('./appliances/smallAppliance/connectionType/wired');
let WirelessSmallAppliance = require('./appliances/smallAppliance/connectionType/wireless');
let ConsumerElectronics = require('./appliances/consumerElectronics/consumerElectronics');
let FlatBuilder = require('./data/flatBuilder');

let appliances = [
    new LargeAppliance('refrigerator', 'Bosch', 'Germany', 1899, 250, false, 40),
    new LargeAppliance('kitchen stove', 'Gefest', 'Belarus', 1050, 6000, false, 2),
    new LargeAppliance('dishwasher', 'Bosch', 'Germany', 1566, 2400, false, 54),
    new LargeAppliance('washing machine', 'Bosch', 'Germany', 2299, 3000, false, 73),
    new LargeAppliance('conditioner', 'Mitsubishi', 'Japan', 3396, 5800, false, 44),
    new LargeAppliance('kitchen hood', 'Siemens', 'Germany', 1958, 146, false, 54),

    new WiredSmallAppliance('toaster', 'Phillips', 'Netherlands', 280, 950, false, 10, 120),
    new WiredSmallAppliance('microwave', 'Siemens', 'Germany', 1689, 2200, false, 7, 180),
    new WiredSmallAppliance('multicooker', 'Redmond', 'Russia', 544, 860, false, 5, 150),

    new WirelessSmallAppliance('vacuum cleaner', 'Xiaomi', 'China', 479, 440, false, 6, 180),
    new WirelessSmallAppliance('fan', 'Moser', 'Germany', 187, 2200, false, 9, 90),
    new WirelessSmallAppliance('blender', 'Braun', 'Germany', 258, 750, false, 9, 60),

    new ConsumerElectronics('TV', 'Samsung', 'Korea', 6000, 450, false, 10),
    new ConsumerElectronics('DVD', 'Sony', 'Japan', 560, 140, false, 4),
    new ConsumerElectronics('computer', 'Apple IMac', 'USA', 7500, 95, false, 10),
    new ConsumerElectronics('game console', 'Xbox', 'USA', 1200, 110, false, 9),
    new ConsumerElectronics('radio', 'Ritmix', 'Korea', 60, 10, false, 2),
    new ConsumerElectronics('audio system', 'Bose', 'USA', 1950, 500, false, 8),
];

let flat = new FlatBuilder()
    .addApplianceList(appliances)
    .build();

(async () => {
    let item;
    while (item != 7) {
        console.log('Menu:');
        console.log('1. Show the full list of appliances');
        console.log('2. Show all types of appliances');
        console.log('3. Turn on the appliances');
        console.log('4. Calculate the power consumption of all the turned on appliances');
        console.log('5. Sort appliances by price');
        console.log('6. Show appliances corresponding to a specific manufacturer');
        console.log('7. Exit the program');
        item = parseInt(await prompt('Select a menu item: '));
        switch (item) {
            case 1:
                flat.showAppliances();
                break;
            case 2:
                flat.showTypesOfAppliances();
                break;
            case 3:
                let choise = await prompt('Select the appliance you want to turn on: ');
                flat.switchOn(choise);
                break;
            case 4:
                console.log(`The power consumption of all the turned on appliances in the flat is equal to ${flat.countPower()} watt`);
                break;
            case 5:
                console.log('Appliances sorted by price: ');
                flat.sortByPrice();
                break;
            case 6:
                let param = await prompt('Select the manufacturer by which you want to find the appliances: ');
                console.log(`Appliances corresponding to the selected manufacturer - ${param}: `);
                flat.findAppliance(param);
                break;
            case 7:
                break;
        }
    }
    prompt.finish();
})()