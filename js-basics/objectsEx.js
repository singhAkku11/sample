//Display properties and values of an Object
const address = {
    street: 'Bypass Road',
    city: 'Varanasi',
    zipCode: '122003'
};
function showAddress(address) {
    for (let key in address)
        console.log(key,address[key]);
}
showAddress(address);

//Factory Function
function addressFactory(street,city,zipCode){
    return {
        street,
        city,
        zipCode
    };
}
const address2 = addressFactory('Bypass Road','Varanasi','122003');
console.log(address2);

//Constructor Function
function AdressConstuctor(street,city,zipCode){
        this.street = street,
        this.city= city,
        this.zipCode= zipCode
}
const address3 = new AdressConstuctor('Bypass Road','Varanasi','122003');
console.log(address3);

//Price Object
let priceRanges = [
    { label: '$', tooltip: 'Inexpensive', minPerPerson: 0, maxPerPerson: 10},
    { label: '$$', tooltip: 'Moderate', minPerPerson: 11, maxPerPerson: 20},
    { label: '$$$', tooltip: 'Expensive', minPerPerson: 21, maxPerPerson: 30},
]