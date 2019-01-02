import * as _ from "lodash";
const smoothie = {
    fruit : { 
        banana: 1,
        apple: 1,
        mango: 1
    }
}
const smoothie2 = {
    fruit : { 
        banana: 1,
        apple: 1,
        mango: 1
    }
}

console.log('**** Duyen favorite lodash method : cloneDeep ****');

const cloneUsingSpread = {... smoothie};
cloneUsingSpread.fruit.banana = 3;
console.log('Clone using spread operator')
console.log(smoothie)
console.log(cloneUsingSpread);

const cloneUsingLodash = _.cloneDeep(smoothie2);
cloneUsingLodash.fruit.banana = 3;
console.log('Clone using Lodash')
console.log(smoothie2)
console.log(cloneUsingLodash);
