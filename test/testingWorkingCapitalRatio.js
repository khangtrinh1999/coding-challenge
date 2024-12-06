
const GetDataFromJSON = require('../utils/getDataFromJSON');
const { getAssets, getLiabilities, getWorkingCapitalRatio } = require('../utils/calculations');

// TESTING getWorkingCapitalRatio function
// ASSUMPTIONS 
// total_cost is non null and positive number


const test1 = () => {
    const data = GetDataFromJSON('./test/test-cases/case14.json');
    // CALCULATE REVENUE
    const result = getAssets(data);
    const expectedRevenue = 10749.5 + 1065.85 + 15081.23  - 825.0 ;
    if (result === (expectedRevenue)) {
        console.log('- getWorkingCapitalRatio Test 1 calculating assets passed');
    } else {
        console.log('- getWorkingCapitalRatio Test 1 calculating assets failed');
    }
}
const test2 = () => {
    const data = GetDataFromJSON('./test/test-cases/case4.json');
    // CALCULATE REVENUE
    const result = getAssets(data);
    const expectedRevenue = 0;
    if (result === (expectedRevenue)) {
        console.log('- getWorkingCapitalRatio Test 2 calculating assets passed');
    } else {
        console.log('- getWorkingCapitalRatio Test 2 calculating assets failed');
    }
}

const test3 = () => {
    const data = GetDataFromJSON('./test/test-cases/case4.json');
    // CALCULATE REVENUE
    const result = getLiabilities(data);
    const expectedRevenue = 0;
    if (result === (expectedRevenue)) {
        console.log('- getWorkingCapitalRatio Test 3 calculating liabilities passed');
    } else {
        console.log('- getWorkingCapitalRatio Test 3 calculating liabilities failed');
    }
}

const test4 = () => {
    const data = GetDataFromJSON('./test/test-cases/case15.json');
    // CALCULATE REVENUE
    const result = getLiabilities(data);
    const expectedRevenue = 10749.5 + 1065.85 + 15081.23  - 825.0 ;
    if (result === (expectedRevenue)) {
        console.log('- getWorkingCapitalRatio Test 4 calculating liabilities passed');
    } else {
        console.log('- getWorkingCapitalRatio Test 4 calculating liabilities failed');
    }
}

const test5 = () => {
    const data = GetDataFromJSON('./test/test-cases/case15.json');
    // CALCULATE REVENUE
    const result = getWorkingCapitalRatio(data);
    const expectedRevenue = 0;
    if (result === (expectedRevenue)) {
        console.log('- getWorkingCapitalRatio Test 5 calculating liabilities passed');
    } else {
        console.log('- getWorkingCapitalRatio Test 5 calculating liabilities failed');
    }
}

const test6 = () => {
    const data = GetDataFromJSON('./test/test-cases/case14.json');
    // CALCULATE REVENUE
    const result = getWorkingCapitalRatio(data);
    const expectedRevenue = 0;
    if (result === (expectedRevenue)) {
        console.log('- getWorkingCapitalRatio Test 6 calculating liabilities passed');
    } else {
        console.log('- getWorkingCapitalRatio Test 6 calculating liabilities failed');
    }
}


test1();
test2();
test3();
test4();
test5();
test6();