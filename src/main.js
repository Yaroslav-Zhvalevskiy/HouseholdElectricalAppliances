let LargeAppliance = require('./appliances/largeAppliance/largeAppliance');
let SmallAppliance = require('./appliances/smallAppliance');
let ConsumerElectronics = require('./appliances/consumerElectronics/consumerElectronics');
let FlatBuilder = require('./data/flatBuilder');

let appliances = [
    new LargeAppliance('refrigerator', 'Bosch', 'Germany', 1899, 250, false, 40),
    new SmallAppliance('toaster', 'Phillips', 'Netherlands', 280, 950, false, 8),
    new ConsumerElectronics('TV', 'Samsung', 'Korea', 4000, 450, false, 9),
];

let flat = new FlatBuilder()
    .addAppliance(appliances)
    .build();